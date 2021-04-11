import { FC, useState } from "react";
import { Box, makeStyles, Typography } from "@material-ui/core";
import { ThemeEnum } from "../../themes/base";
import { useTheme } from "../../ThemeProvider";
import { NavbarProps } from "./Navbar";
import { Icon, InlineIcon } from "@iconify/react";
import menuIcon from "@iconify-icons/gridicons/menu";
import closeOutlined from "@iconify-icons/ant-design/close-outlined";
import flagUnitedKingdom from "@iconify-icons/openmoji/flag-united-kingdom";
import flagNorway from "@iconify-icons/openmoji/flag-norway";
import darkTheme24Filled from "@iconify-icons/fluent/dark-theme-24-filled";
import {
  FloatingMenu,
  MainButton,
  ChildButton,
} from "react-floating-button-menu";
import { handleScroll } from "./Navbar";

export const FABMenu: FC<NavbarProps> = (props: NavbarProps) => {
  const classes = useStyles();
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState<boolean>(false);

  const getItemList: Function = (list: any[]): JSX.Element[] =>
    list.map((item: any, i: number) => {
      return (
        <ChildButton
          icon={
            <Typography
              variant="subtitle2"
              color={
                theme.palette.type === "light" ? "textPrimary" : "textSecondary"
              }
            >
              {item}
            </Typography>
          }
          onClick={() => {
            handleScroll(item);
            setOpen(false);
          }}
          size={52}
          background={"white"}
        />
      );
    });

  return (
    <Box className={classes.root}>
      <FloatingMenu slideSpeed={500} spacing={8} isOpen={open}>
        <MainButton
          iconResting={<Icon icon={menuIcon} className={classes.icon} />}
          iconActive={<Icon icon={closeOutlined} className={classes.icon} />}
          onClick={() => setOpen(!open)}
          background={"white"}
          size={64}
        />
        {getItemList(props.data.navText)}
        <ChildButton
          icon={
            <Icon
              icon={
                props.language === "english" ? flagUnitedKingdom : flagNorway
              }
              className={classes.icon}
            />
          }
          onClick={() => {
            props.language === "english"
              ? props.setLanguage("norwegian")
              : props.setLanguage("english");
          }}
          size={48}
          background={"white"}
        />
        <ChildButton
          icon={
            <InlineIcon icon={darkTheme24Filled} className={classes.icon} />
          }
          onClick={() => {
            theme.palette.type === "light"
              ? setTheme(ThemeEnum.Dark)
              : setTheme(ThemeEnum.Light);
          }}
          size={48}
          background={"white"}
        />
      </FloatingMenu>
    </Box>
  );
};
export default FABMenu;

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    right: "10px",
    top: "18px",
    zIndex: 5,
  },
  icon: {
    height: "35px",
    width: "35px",
    color: "black",
  },
}));
