import { base } from "@theme-ui/preset-base";

const theme = {
  ...base,
  colors: {
    ...base.colors,
    text: "#222",
    background: "#fff",
    primary: "#07c",
    modes: {
      dark: {
        text: "#fff",
        background: "#222",
        primary: "#0cf",
      },
    },
  },
};

export default theme;
