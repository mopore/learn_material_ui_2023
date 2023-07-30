import { createTheme, PaletteMode } from "@mui/material";
import React from "react";
import { getDesignTokens } from "./theme";

export const useColorTheme = () => {
	const [mode, setMode] = React.useState<PaletteMode>(() => {
		// This function is only called once to get the initial mode.
		const mode = localStorage.getItem("mode") as PaletteMode;
		return mode ? mode : "light";
	});

	const toggleColorMode = () => {
		setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
	};

	// Only update local storage when mode changes
	React.useEffect(() => {
		localStorage.setItem("mode", mode);
	}, [mode]);

	// Only cteate theme when mode changes
	const modifiedTheme = React.useMemo(
		() => createTheme(getDesignTokens(mode)),
		[mode]
	);

	return {
		theme: modifiedTheme,
		mode,
		toggleColorMode,
	};
};