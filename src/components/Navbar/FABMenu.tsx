import { FC, useState } from "react";
import { SpeedDial, SpeedDialAction, SxProps } from "@mui/material";
import { useTheme } from "../../ThemeProvider";
import { handleScroll } from "./Navbar";
import { FABProps } from "../../types";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import AutoAwesomeMosaicIcon from "@mui/icons-material/AutoAwesomeMosaic";
import ArticleIcon from "@mui/icons-material/Article";
import InfoIcon from "@mui/icons-material/Info";
import TuneIcon from "@mui/icons-material/Tune";

export const FABMenu: FC<FABProps> = (props: FABProps) => {
  const { theme } = useTheme();
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
              <PersonIcon sx={actionIconStyle} />
            ) : i === 1 ? (
              <AutoAwesomeMosaicIcon sx={actionIconStyle} />
            ) : i === 2 ? (
              <ArticleIcon sx={actionIconStyle} />
            ) : (
              <InfoIcon sx={actionIconStyle} />
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
          <MenuIcon sx={menuIconStyle} />
        ) : (
          <CloseIcon sx={menuIconStyle} />
        )
      }
      onClick={() => setOpen(!open)}
      open={open}
      direction="down"
    >
      {getItemList(props.data.sections)}
      <SpeedDialAction
        icon={<TuneIcon sx={actionIconStyle} />}
        onClick={() => {
          props.handleSettingsModalOpen();
        }}
        sx={actionDialStyle}
        tooltipTitle={
          props.language === "norwegian"
            ? "Åpne innstillinger"
            : "Open settings"
        }
      />
    </SpeedDial>
  );
};
export default FABMenu;
