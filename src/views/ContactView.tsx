import React, { FC } from "react";
import {
  Box,
  Button,
  ClickAwayListener,
  makeStyles,
  Tooltip,
  Typography,
  Zoom,
} from "@material-ui/core";
import { Icon } from "@iconify/react";
import caretDown from "@iconify-icons/carbon/caret-down";

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
  const classes = useStyles();
  const [tooltipStates, setTooltipStates] = React.useState(
    Array(props.data.links.length).fill(false)
  );

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
        className={classes.bullet}
      >
        •
      </Typography>
    );
  };

  return (
    <>
      <Box className={classes.root} textAlign="center" id={props.id}>
        <Icon icon={caretDown} className={classes.backgroundTriangle} />
        <Box py={5} px={3} textAlign="left">
          <Box py={2} px={1}>
            <Typography variant="caption" color="textPrimary">
              {props.data.text[0]}
            </Typography>
          </Box>
          <Box py={1} px={1}>
            <Typography variant="caption" color="textPrimary">
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
                      }}
                      onClose={() => handleTooltipState(false, key)}
                      open={tooltipStates[key]}
                      disableFocusListener
                      disableHoverListener
                      disableTouchListener
                      classes={{ tooltip: classes.tooltipWidth }}
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

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    position: "relative",
  },
  backgroundTriangle: {
    color: theme.palette.secondary.main,
    position: "absolute",
    margin: "-45px",
    height: "100px",
    width: "100px",
  },
  bullet: {
    margin: "0 5px",
  },
  tooltipWidth: {
    maxWidth: 400,
  },
}));
