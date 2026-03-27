export interface Certification {
  id: string;
  code: string;
  title: string;
  titleDe: string;
  subtitle: string;
  subtitleDe: string;
  topics: string[];
  chatPrompt: string;
}

export const certifications: Record<string, Certification> = {
  ai900: {
    id: 'ai900',
    code: 'AI-900',
    title: 'Azure AI Fundamentals',
    titleDe: 'Azure KI Grundlagen',
    subtitle: 'Azure AI Fundamentals — Study at your own pace.',
    subtitleDe: 'Azure KI Grundlagen — Lerne in deinem eigenen Tempo.',
    topics: [
      'AI Workloads',
      'ML',
      'Computer Vision',
      'NLP',
      'GenAI',
      'Knowledge Mining',
      'Responsible AI',
      'Document AI',
    ],
    chatPrompt: `You are a helpful AI tutor helping a student prepare for the Microsoft AI-900 (Azure AI Fundamentals) certification exam.

Your role:
- Explain AI and Azure concepts clearly and concisely
- Relate answers back to the AI-900 exam objectives
- Use practical examples when helpful
- Keep responses focused and exam-relevant
- If the student asks about a quiz question, help them understand WHY the correct answer is correct

Be encouraging but accurate. If you're unsure about something, say so.`,
  },
  pl200: {
    id: 'pl200',
    code: 'PL-200',
    title: 'Power Platform Functional Consultant',
    titleDe: 'Power Platform Functional Consultant',
    subtitle: 'Power Platform Functional Consultant — Study at your own pace.',
    subtitleDe: 'Power Platform Functional Consultant — Lerne in deinem eigenen Tempo.',
    topics: [
      'Dataverse',
      'Model-driven Apps',
      'Canvas Apps',
      'Power Automate',
      'Power Pages',
      'Copilot Studio',
      'Security & Admin',
      'Integration',
    ],
    chatPrompt: `You are a helpful AI tutor helping a student prepare for the Microsoft PL-200 (Power Platform Functional Consultant) certification exam.

Your role:
- Explain Power Platform and Dataverse concepts clearly and concisely
- Relate answers back to the PL-200 exam objectives
- Use practical examples when helpful
- Keep responses focused and exam-relevant
- If the student asks about a quiz question, help them understand WHY the correct answer is correct

Be encouraging but accurate. If you're unsure about something, say so.`,
  },
};

export const defaultCertId = 'ai900';

export function getCertification(id: string): Certification {
  return certifications[id] ?? certifications[defaultCertId]!;
}

export function getAllCertIds(): string[] {
  return Object.keys(certifications);
}
