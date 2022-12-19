import withStyles from '@mui/styles/withStyles';
import Switch from "@mui/material/Switch";

export const customSwitch = withStyles((theme) => ({
  root: {
    width: 45,
    height: 20,
    padding: "0 0 0 1px",
    margin: theme.spacing(1),
  },
  switchBase: {
    padding: 1,
    color: "white",
    "&$checked": {
      transform: "translateX(24px)",
      color: "white",
      "& + $track": {
        opacity: 1,
        backgroundColor: "white", //checked track color
        borderColor: "grey", //checked border color
      },
    },
  },
  thumb: {
    boxShadow: "0px 0px 1px 1px rgba(0,0,0,0.75)",
    width: 18,
    height: 18,
    margin: "0 0 0 1px"
  },
  track: {
    border: `1px solid grey`,
    borderRadius: 26 / 2,
    opacity: 1,
    backgroundColor: "#000",
  },
  checked: {},
}))(Switch);
export default customSwitch;
