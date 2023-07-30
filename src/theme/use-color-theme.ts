import { createTheme, PaletteMode } from "@mui/material";
import React from "react";
import { getDesignTokens } from "./theme";

export const useColorTheme = () => {
	const [mode, setMode] = React.useState<PaletteMode>(() => {
		const mode = localStorage.getItem("mode") as PaletteMode;
		return mode ? mode : "light";
	});

	const toggleColorMode = () => {
		setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
	};

	React.useEffect(() => {
		localStorage.setItem("mode", mode);
	}, [mode]);


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