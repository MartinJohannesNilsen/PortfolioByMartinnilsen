import { FC, useState } from "react";
import { SpeedDial, SpeedDialAction, SxProps } from "@mui/material";
import { useTheme } from "../../ThemeProvider";
import { handleScroll } from "./Navbar";
import { FABProps } from "../../types";
import {
  Computer,
  Tune,
  Info,
  Article,
  AutoAwesomeMosaic,
  Person,
  Menu,
  Close,
} from "@mui/icons-material";

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
    boxShadow: "none",
  };

  const getItemList: Function = (
    list: any[]
  ): any[] => //JSX.Element[]
    list.map((item: any, i: number) => {
      return (
        <SpeedDialAction
          key={i}
          icon={
            i === 0 ? (
              <Person sx={actionIconStyle} />
            ) : i === 1 ? (
              <AutoAwesomeMosaic sx={actionIconStyle} />
            ) : i === 2 ? (
              <Computer sx={actionIconStyle} />
            ) : i === 3 ? (
              <Article sx={actionIconStyle} />
            ) : (
              <Info sx={actionIconStyle} />
            )
          }
          onClick={() => {
            handleScroll(i === 0 ? "Navbar" : item.replace(" ", "_")); // Scroll to item, or top if index 0
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
          boxShadow: "none",
          // border: "2px solid" + theme.palette.text.primary + "50",
          "&:hover": {
            // backgroundColor: "white",
          },
        },
      }}
      icon={!open ? <Menu sx={menuIconStyle} /> : <Close sx={menuIconStyle} />}
      onClick={() => setOpen(!open)}
      open={open}
      direction="down"
    >
      {getItemList(props.data.sections)}
      <SpeedDialAction
        icon={<Tune sx={actionIconStyle} />}
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
