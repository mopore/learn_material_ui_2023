import { Theme, } from "@mui/material";


const jniStyles = {
  redBackgroundHoverStyle : {
    '&:hover': {
      backgroundColor: "#ff0000",
    },
    transition: (theme: Theme) => theme.transitions.create('background-color', {
      // duration: theme.transitions.duration.standard,
      duration: 1000
    }),
  }
}

export default jniStyles;
