import React, { FC } from "react";
import {
  Box,
  Button,
  ClickAwayListener,
  Tooltip,
  Typography,
  useMediaQuery,
  Zoom,
} from "@mui/material";
import { useTheme } from "../ThemeProvider";

type ContactViewProps = {
  id: string;
  data: {
    text: string[];
    links: [
      {
        text: string;
        value: string;
        copyText?: string;
      }
    ];
  };
};

const ContactView: FC<ContactViewProps> = (props) => {
  const [tooltipStates, setTooltipStates] = React.useState(
    Array(props.data.links.length).fill(false)
  );
  const { theme } = useTheme();
  const lgUp = useMediaQuery(theme.breakpoints.up("lg"));

  const handleTooltipState = (newState: boolean, index: number) => {
    let tooltips = [...tooltipStates];
    tooltips[index] = newState;
    setTooltipStates(tooltips);
  };

  const TypographyBullet: FC = () => {
    return (
      <Typography
        variant="button"
        color="textPrimary"
        sx={{
          margin: "0 5px",
        }}
      >
        •
      </Typography>
    );
  };

  return (
    <>
      <Box
        sx={{
          backgroundColor: "primary.main",
          position: "relative",
        }}
        textAlign="center"
        id={props.id}
      >
        <Box py={5} px={3} textAlign="left">
          <Box py={2} px={1}>
            <Typography
              variant="body1"
              color="textPrimary"
              style={{ fontWeight: 600, fontSize: lgUp ? "1.1rem" : "0.9rem" }}
            >
              {props.data.text[0]}
            </Typography>
          </Box>
          <Box py={1} px={1}>
            <Typography
              variant="body1"
              color="textPrimary"
              style={{ fontWeight: 600, fontSize: lgUp ? "1.1rem" : "0.9rem" }}
            >
              {props.data.text[1]}
            </Typography>
          </Box>
          <Box py={3}>
            {props.data.links.map((link, key) => {
              let elements = [];
              if (link.hasOwnProperty("copyText")) {
                elements.push(
                  <ClickAwayListener
                    onClickAway={() => handleTooltipState(false, key)}
                  >
                    <Tooltip
                      arrow
                      placement="top"
                      PopperProps={{
                        disablePortal: true,
                        sx: {
                          maxWidth: "400px",
                        },
                      }}
                      onClose={() => handleTooltipState(false, key)}
                      open={tooltipStates[key]}
                      disableFocusListener
                      disableHoverListener
                      disableTouchListener
                      TransitionComponent={Zoom}
                      title={
                        <Typography variant="overline" color="inherit">
                          {link.copyText}
                        </Typography>
                      }
                    >
                      <Button
                        onClick={() => {
                          handleTooltipState(true, key);
                          navigator.clipboard.writeText(link.value);
                        }}
                      >
                        <Typography variant="button" color="textPrimary">
                          {link.text}
                        </Typography>
                      </Button>
                    </Tooltip>
                  </ClickAwayListener>
                );
              } else {
                elements.push(
                  <Button onClick={() => window.open(link.value, "_blank")}>
                    <Typography variant="button" color="textPrimary">
                      {link.text}
                    </Typography>
                  </Button>
                );
              }
              if (key < props.data.links.length - 1) {
                elements.push(<TypographyBullet />);
              }
              return elements;
            })}
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default ContactView;
