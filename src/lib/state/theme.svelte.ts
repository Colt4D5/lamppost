import { createContext } from 'svelte';

export type ThemeMode = 'light' | 'dark' | 'system';
export type ResolvedTheme = Exclude<ThemeMode, 'system'>;

const storageKey = 'lamppost-theme';

function getSavedMode(): ThemeMode {
	if (typeof window === 'undefined') return 'system';

	const savedMode = window.localStorage.getItem(storageKey);
	return savedMode === 'light' || savedMode === 'dark' || savedMode === 'system' ? savedMode : 'system';
}

function getSystemPreference(): ResolvedTheme {
	return typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export function initializeTheme(): ResolvedTheme {
	const mode = getSavedMode();
	const effective = mode === 'system' ? getSystemPreference() : mode;

	if (typeof document !== 'undefined') document.documentElement.dataset.theme = effective;

	return effective;
}

export class ThemeController {
	mode = $state<ThemeMode>(getSavedMode());
	systemPreference = $state<ResolvedTheme>(getSystemPreference());
	effective = $derived(this.mode === 'system' ? this.systemPreference : this.mode);

	setMode(mode: ThemeMode) {
		this.mode = mode;
		if (typeof window !== 'undefined') window.localStorage.setItem(storageKey, mode);
		this.apply();
	}

	toggle() {
		this.setMode(this.effective === 'dark' ? 'light' : 'dark');
	}

	apply() {
		if (typeof document !== 'undefined') document.documentElement.dataset.theme = this.effective;
	}

	listenForSystemTheme() {
		if (typeof window === 'undefined') return;
		const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
		const updatePreference = (event: MediaQueryListEvent) => {
			this.systemPreference = event.matches ? 'dark' : 'light';
			this.apply();
		};
		mediaQuery.addEventListener('change', updatePreference);
		return () => mediaQuery.removeEventListener('change', updatePreference);
	}
}

export const [getTheme, setTheme] = createContext<ThemeController>();