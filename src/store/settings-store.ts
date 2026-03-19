import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface SettingsState {
	apiKey: string;
	apiEndpoint: string;
	setApiKey: (key: string) => void;
	setApiEndpoint: (url: string) => void;
}

export const useSettingsStore = create<SettingsState>()(
	persist(
		(set) => ({
			apiKey: '',
			apiEndpoint: '',
			setApiKey: (key) => set({ apiKey: key }),
			setApiEndpoint: (url) => set({ apiEndpoint: url }),
		}),
		{
			name: 'app-settings',
		},
	),
);
