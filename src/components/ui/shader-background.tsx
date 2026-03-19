import { useEffect, useRef, type ComponentProps } from 'react';
import { useIsDark } from '@/lib/use-is-dark';
import { cn } from '@/lib/utils';

// ---- GLSL ----

const VERT_SOURCE = `
  attribute vec4 aVertexPosition;
  void main() {
    gl_Position = aVertexPosition;
  }
`;

const FRAG_SOURCE = `
  precision highp float;
  uniform vec2 iResolution;
  uniform float iTime;
  uniform vec3 uAccentColor;
  uniform float uTimeScale;
  uniform float uIsDark;

  const float gridSmoothWidth = 0.015;
  const float axisWidth = 0.05;
  const float majorLineWidth = 0.025;
  const float minorLineWidth = 0.0125;
  const float majorLineFrequency = 5.0;
  const float minorLineFrequency = 1.0;
  const float scale = 5.0;
  const float minLineWidth = 0.01;
  const float maxLineWidth = 0.2;
  const float lineAmplitude = 1.0;
  const float lineFrequency = 0.2;
  const float warpFrequency = 0.5;
  const float warpAmplitude = 1.0;
  const float offsetFrequency = 0.5;
  const float minOffsetSpread = 0.6;
  const float maxOffsetSpread = 2.0;
  const int linesPerGroup = 16;

  #define drawCircle(pos, radius, coord) smoothstep(radius + gridSmoothWidth, radius, length(coord - (pos)))
  #define drawSmoothLine(pos, halfWidth, t) smoothstep(halfWidth, 0.0, abs(pos - (t)))
  #define drawCrispLine(pos, halfWidth, t) smoothstep(halfWidth + gridSmoothWidth, halfWidth, abs(pos - (t)))
  #define drawPeriodicLine(freq, width, t) drawCrispLine(freq / 2.0, width, abs(mod(t, freq) - (freq) / 2.0))

  float drawGridLines(float axis) {
    return drawCrispLine(0.0, axisWidth, axis)
          + drawPeriodicLine(majorLineFrequency, majorLineWidth, axis)
          + drawPeriodicLine(minorLineFrequency, minorLineWidth, axis);
  }

  float drawGrid(vec2 space) {
    return min(1.0, drawGridLines(space.x) + drawGridLines(space.y));
  }

  float random(float t) {
    return (cos(t) + cos(t * 1.3 + 1.3) + cos(t * 1.4 + 1.4)) / 3.0;
  }

  float getPlasmaY(float x, float horizontalFade, float offset, float time) {
    float lineSpeed = 1.0 * 0.2 * uTimeScale;
    return random(x * lineFrequency + time * lineSpeed) * horizontalFade * lineAmplitude + offset;
  }

  void main() {
    float time = iTime * uTimeScale;
    float baseSpeed = 0.2 * uTimeScale;
    float lineSpeed = 1.0 * baseSpeed;
    float warpSpeed = 0.2 * baseSpeed;
    float offsetSpeed = 1.33 * baseSpeed;

    vec2 fragCoord = gl_FragCoord.xy;
    vec4 fragColor;
    vec2 uv = fragCoord.xy / iResolution.xy;
    vec2 space = (fragCoord - iResolution.xy / 2.0) / iResolution.x * 2.0 * scale;

    float horizontalFade = 1.0 - (cos(uv.x * 6.28) * 0.5 + 0.5);
    float verticalFade = 1.0 - (cos(uv.y * 6.28) * 0.5 + 0.5);

    space.y += random(space.x * warpFrequency + iTime * warpSpeed) * warpAmplitude * (0.5 + horizontalFade);
    space.x += random(space.y * warpFrequency + iTime * warpSpeed + 2.0) * warpAmplitude * horizontalFade;

    vec4 lines = vec4(0.0);
    vec4 lineColor = vec4(uAccentColor, 1.0);
    // Light: subtle accent-tinted white. Dark: deeper accent tint.
    vec4 bgColor1 = mix(vec4(mix(vec3(1.0), uAccentColor, 0.04), 1.0), vec4(uAccentColor * 0.12, 1.0), uIsDark);
    vec4 bgColor2 = mix(vec4(mix(vec3(1.0), uAccentColor, 0.10), 1.0), vec4(uAccentColor * 0.28, 1.0), uIsDark);

    for(int l = 0; l < linesPerGroup; l++) {
      float normalizedLineIndex = float(l) / float(linesPerGroup);
      float offsetTime = iTime * offsetSpeed;
      float offsetPosition = float(l) + space.x * offsetFrequency;
      float rand = random(offsetPosition + offsetTime) * 0.5 + 0.5;
      float halfWidth = mix(minLineWidth, maxLineWidth, rand * horizontalFade) / 2.0;
      float offset = random(offsetPosition + offsetTime * (1.0 + normalizedLineIndex)) * mix(minOffsetSpread, maxOffsetSpread, horizontalFade);
      float linePosition = getPlasmaY(space.x, horizontalFade, offset, iTime);
      float line = drawSmoothLine(linePosition, halfWidth, space.y) / 2.0 + drawCrispLine(linePosition, halfWidth * 0.15, space.y);

      float circleX = mod(float(l) + iTime * lineSpeed, 25.0) - 12.0;
      vec2 circlePosition = vec2(circleX, getPlasmaY(circleX, horizontalFade, offset, iTime));
      float circle = drawCircle(circlePosition, 0.01, space) * 4.0;

      line = line + circle;
      lines += line * lineColor * rand;
    }

    // Light: stronger lines so they're clearly visible on white
    lines *= mix(0.35, 0.25, uIsDark);

    fragColor = mix(bgColor1, bgColor2, uv.x);
    // Dark: fade edges to near-black. Light: no darkening at all.
    fragColor.rgb *= mix(1.0, verticalFade, uIsDark);
    fragColor.a = 1.0;
    fragColor += lines;

    gl_FragColor = fragColor;
  }
`;

// ---- WebGL helpers ----

function compileShader(
	gl: WebGLRenderingContext,
	type: number,
	source: string,
): WebGLShader | null {
	const shader = gl.createShader(type);
	if (!shader) return null;
	gl.shaderSource(shader, source);
	gl.compileShader(shader);
	if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
		console.error('Shader compile error:', gl.getShaderInfoLog(shader));
		gl.deleteShader(shader);
		return null;
	}
	return shader;
}

function createProgram(gl: WebGLRenderingContext): WebGLProgram | null {
	const vert = compileShader(gl, gl.VERTEX_SHADER, VERT_SOURCE);
	const frag = compileShader(gl, gl.FRAGMENT_SHADER, FRAG_SOURCE);
	if (!vert || !frag) return null;

	const program = gl.createProgram();
	if (!program) return null;
	gl.attachShader(program, vert);
	gl.attachShader(program, frag);
	gl.linkProgram(program);

	if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
		console.error('Shader link error:', gl.getProgramInfoLog(program));
		return null;
	}
	return program;
}

/** Resolve --color-accent to [r, g, b] in 0-1 range via offscreen canvas pixel read. */
function resolveAccentRgb(): [number, number, number] {
	const el = document.createElement('div');
	el.style.display = 'none';
	el.style.color = 'var(--color-accent)';
	document.body.appendChild(el);
	const computed = getComputedStyle(el).color;
	document.body.removeChild(el);

	const cvs = document.createElement('canvas');
	cvs.width = cvs.height = 1;
	const ctx = cvs.getContext('2d');
	if (!ctx) return [0.4, 0.2, 0.8];
	ctx.fillStyle = computed;
	ctx.fillRect(0, 0, 1, 1);
	const px = ctx.getImageData(0, 0, 1, 1).data;
	return [px[0]! / 255, px[1]! / 255, px[2]! / 255];
}

// ---- Component ----

interface ShaderBackgroundProps extends ComponentProps<'canvas'> {
	/** Speed multiplier — 1.0 = original, lower = slower. Default 0.07 */
	speed?: number;
}

function ShaderBackground({
	className,
	speed = 0.07,
	...props
}: ShaderBackgroundProps) {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const isDark = useIsDark();

	// Refs so the render loop reads fresh values without re-running the effect
	const isDarkRef = useRef(isDark);
	isDarkRef.current = isDark;

	const accentRef = useRef(resolveAccentRgb());

	// Track accent color via data-accent attribute changes
	useEffect(() => {
		const observer = new MutationObserver(() => {
			accentRef.current = resolveAccentRgb();
		});
		observer.observe(document.documentElement, {
			attributes: true,
			attributeFilter: ['data-accent'],
		});
		return () => observer.disconnect();
	}, []);

	// WebGL setup + render loop
	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		const gl = canvas.getContext('webgl');
		if (!gl) return;

		const program = createProgram(gl);
		if (!program) return;

		const buffer = gl.createBuffer();
		gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
		gl.bufferData(
			gl.ARRAY_BUFFER,
			new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
			gl.STATIC_DRAW,
		);

		const aPos = gl.getAttribLocation(program, 'aVertexPosition');
		const uResolution = gl.getUniformLocation(program, 'iResolution');
		const uTime = gl.getUniformLocation(program, 'iTime');
		const uAccent = gl.getUniformLocation(program, 'uAccentColor');
		const uTimeScale = gl.getUniformLocation(program, 'uTimeScale');
		const uIsDark = gl.getUniformLocation(program, 'uIsDark');

		const resize = () => {
			canvas.width = canvas.offsetWidth;
			canvas.height = canvas.offsetHeight;
			gl.viewport(0, 0, canvas.width, canvas.height);
		};
		const resizeObserver = new ResizeObserver(resize);
		resizeObserver.observe(canvas);
		resize();

		const t0 = Date.now();
		let frameId: number;

		const render = () => {
			const elapsed = (Date.now() - t0) / 1000;
			const accent = accentRef.current;
			const dark = isDarkRef.current ? 1.0 : 0.0;

			gl.clearColor(0, 0, 0, 1);
			gl.clear(gl.COLOR_BUFFER_BIT);
			gl.useProgram(program);

			gl.uniform2f(uResolution, canvas.width, canvas.height);
			gl.uniform1f(uTime, elapsed);
			gl.uniform3f(uAccent, accent[0], accent[1], accent[2]);
			gl.uniform1f(uTimeScale, speed);
			gl.uniform1f(uIsDark, dark);

			gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
			gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);
			gl.enableVertexAttribArray(aPos);
			gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

			frameId = requestAnimationFrame(render);
		};

		frameId = requestAnimationFrame(render);

		return () => {
			cancelAnimationFrame(frameId);
			resizeObserver.disconnect();
			gl.deleteBuffer(buffer);
			gl.deleteProgram(program);
		};
	}, [speed]);

	return (
		<canvas
			ref={canvasRef}
			className={cn('absolute inset-0 h-full w-full', className)}
			{...props}
		/>
	);
}

export { ShaderBackground };
