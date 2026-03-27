import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { defaultCertId, getCertification, getAllCertIds } from '@/db/certifications';
import type { Certification } from '@/db/certifications';

interface CertState {
	currentCertId: string;
	setCert: (certId: string) => void;
	current: () => Certification;
	allIds: () => string[];
}

export const useCertStore = create<CertState>()(
	persist(
		(set, get) => ({
			currentCertId: defaultCertId,
			setCert: (certId) => set({ currentCertId: certId }),
			current: () => getCertification(get().currentCertId),
			allIds: () => getAllCertIds(),
		}),
		{
			name: 'selected-cert',
			partialize: (state) => ({ currentCertId: state.currentCertId }),
		},
	),
);
