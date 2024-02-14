import Script from "next/script";

export function SetStoredTheme() {
	function scriptCode() {
		try {
			const storedTheme = localStorage.getItem("website-theme");
			if (storedTheme === "dark" || storedTheme === "light") {
				document.body.dataset.theme = storedTheme;
			}
		} catch {
			// ignore
		}
	}

	return (
		<Script
			id="sync-theme"
			dangerouslySetInnerHTML={{
				__html: `(() => { ${scriptCode.toString()}; ${scriptCode.name}(); })()`,
			}}
		/>
	);
}
