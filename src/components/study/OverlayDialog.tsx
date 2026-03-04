import type { ReactNode } from 'react';

import { Card } from '../ui/card';

interface OverlayDialogProps {
	id: string;
	titleId: string;
	titleI18n: string;
	titleDefault: string;
	metaI18n?: string;
	metaDefault?: string;
	children: ReactNode;
}

export default function OverlayDialog(props: OverlayDialogProps) {
	const { id, titleId, titleI18n, titleDefault, metaI18n, metaDefault, children } = props;

	return (
		<div id={id} className="overlay" role="dialog" aria-modal="true" aria-labelledby={titleId} hidden>
			<div className="overlay-backdrop"></div>
			<Card className="overlay-container">
				<div className="overlay-header">
					<h2 id={titleId} data-i18n={titleI18n}>
						{titleDefault}
					</h2>
					{metaI18n ? (
						<p className="meta" data-i18n={metaI18n}>
							{metaDefault}
						</p>
					) : null}
					<button type="button" className="overlay-close" aria-label="Close" data-i18n-aria-label="overlay.close">
						&times;
					</button>
				</div>
				<div className="overlay-body">{children}</div>
			</Card>
		</div>
	);
}
