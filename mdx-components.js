import ProjectHero from "./app/components/ProjectHero";

export function useMDXComponents(components) {
	return {
		...components,
		ProjectHero,
	};
}
