import { FC, useState } from "react";
import { SpeedDial, SpeedDialAction, SxProps } from "@mui/material";
import { ThemeEnum } from "../../themes/base";
import { useTheme } from "../../ThemeProvider";
import { NavbarProps } from "./Navbar";
import { Icon, InlineIcon } from "@iconify/react";
import flagUnitedKingdom from "@iconify-icons/openmoji/flag-united-kingdom";
import flagNorway from "@iconify-icons/openmoji/flag-norway";
import darkTheme24Filled from "@iconify-icons/fluent/dark-theme-24-filled";

import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ArtTrackOutlinedIcon from "@mui/icons-material/ArtTrackOutlined";
import AutoAwesomeMosaicOutlinedIcon from "@mui/icons-material/AutoAwesomeMosaicOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ContactPageOutlinedIcon from "@mui/icons-material/ContactPageOutlined";

import { handleScroll } from "./Navbar";

export const FABMenu: FC<NavbarProps> = (props: NavbarProps) => {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState<boolean>(false);

  const menuIconStyle: SxProps = {
    height: "35px",
    width: "35px",
    color: theme.palette.text.primary,
  };

  const actionIconStyle: SxProps = {
    height: "30px",
    width: "30px",
    color: theme.palette.text.primary,
  };

  const actionDialStyle: SxProps = {
    height: "45px",
    width: "45px",
    color: "black",
  };

  const getItemList: Function = (list: any[]): JSX.Element[] =>
    list.map((item: any, i: number) => {
      return (
        <SpeedDialAction
          key={i}
          icon={
            i === 0 ? (
              <PersonOutlineOutlinedIcon sx={actionIconStyle} />
            ) : i === 1 ? (
              <AutoAwesomeMosaicOutlinedIcon sx={actionIconStyle} />
            ) : i === 2 ? (
              <ArticleOutlinedIcon sx={actionIconStyle} />
            ) : (
              <InfoOutlinedIcon sx={actionIconStyle} />
            )
          }
          onClick={() => {
            handleScroll(item);
            setOpen(false);
          }}
          sx={actionDialStyle}
          tooltipTitle={
            props.language === "english"
              ? 'Go to the section "' + item.toLowerCase() + '"'
              : 'Gå til seksjonen "' + item.toLowerCase() + '"'
          }
        />
      );
    });

  return (
    <SpeedDial
      ariaLabel="Menu for smaller screens"
      sx={{
        position: "fixed",
        right: "8px",
        top: "8px",
        zIndex: 5,
        "& .MuiSpeedDial-fab": {
          // backgroundColor: "white",
          "&:hover": {
            // backgroundColor: "white",
          },
        },
      }}
      icon={
        !open ? (
          <MenuOutlinedIcon sx={menuIconStyle} />
        ) : (
          <CloseOutlinedIcon sx={menuIconStyle} />
        )
      }
      onClick={() => setOpen(!open)}
      open={open}
      direction="down"
    >
      {getItemList(props.data.sections)}
      <SpeedDialAction
        icon={
          <Icon
            icon={props.language === "english" ? flagUnitedKingdom : flagNorway}
            style={actionIconStyle}
          />
        }
        onClick={() => {
          props.language === "english"
            ? props.setLanguage("norwegian")
            : props.setLanguage("english");
        }}
        sx={actionDialStyle}
        tooltipTitle={
          props.language === "english"
            ? "Change language to Norwegian"
            : "Endre språket til engelsk"
        }
      />
      <SpeedDialAction
        icon={<InlineIcon icon={darkTheme24Filled} style={actionIconStyle} />}
        onClick={() => {
          theme.palette.mode === "light"
            ? setTheme(ThemeEnum.Dark)
            : setTheme(ThemeEnum.Light);
        }}
        sx={actionDialStyle}
        tooltipTitle={
          theme.palette.mode === "light"
            ? props.language === "english"
              ? "Change to dark mode"
              : "Bytt til mørk modus"
            : props.language === "english"
            ? "Change to light mode"
            : "Bytt til lys modus"
        }
      />
    </SpeedDial>
  );
};
export default FABMenu;
