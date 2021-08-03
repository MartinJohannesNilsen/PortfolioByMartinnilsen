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
    contactText: string[];
    cvLink: string;
  };
};

const ContactView: FC<ContactViewProps> = (props) => {
  const classes = useStyles();
  const [openEmailTooltip, setOpenEmailTooltip] = React.useState(false);
  const [openTelephoneTooltip, setOpenTelephoneTooltip] = React.useState(false);

  const handleTelephoneTooltipOpen = () => {
    setOpenTelephoneTooltip(true);
  };
  const handleTelephoneTooltipClose = () => {
    setOpenTelephoneTooltip(false);
  };
  const handleEmailTooltipOpen = () => {
    setOpenEmailTooltip(true);
  };
  const handleEmailTooltipClose = () => {
    setOpenEmailTooltip(false);
  };

  return (
    <>
      <Box className={classes.root} textAlign="center" id={props.id}>
        <Icon icon={caretDown} className={classes.backgroundTriangle} />
        <Box py={5} px={3} textAlign="left">
          <Box py={2} px={1}>
            <Typography variant="caption" color="textPrimary">
              {props.data.contactText[0]}
            </Typography>
          </Box>
          <Box py={1} px={1}>
            <Typography variant="caption" color="textPrimary">
              {props.data.contactText[1]}
            </Typography>
          </Box>
          <Box py={3}>
            <Button
              onClick={() =>
                window.open("https://github.com/MartinJohannesNilsen", "_blank")
              }
            >
              <Typography variant="button" color="textPrimary">
                {props.data.contactText[2]}
              </Typography>
            </Button>
            <Typography
              variant="button"
              color="textPrimary"
              className={classes.bullet}
            >
              •
            </Typography>
            <Button onClick={() => window.open(props.data.cvLink, "_blank")}>
              <Typography variant="button" color="textPrimary">
                {props.data.contactText[3]}
              </Typography>
            </Button>
            <Typography
              variant="button"
              color="textPrimary"
              className={classes.bullet}
            >
              •
            </Typography>
            <ClickAwayListener onClickAway={handleTelephoneTooltipClose}>
              <Tooltip
                arrow
                placement="top"
                PopperProps={{
                  disablePortal: true,
                }}
                onClose={handleTelephoneTooltipClose}
                open={openTelephoneTooltip}
                disableFocusListener
                disableHoverListener
                disableTouchListener
                interactive
                classes={{tooltip: classes.tooltipWidth}}
                title={
                  <Typography variant="overline" color="textSecondary">
                    {props.data.contactText[6]}
                  </Typography>
                }
              >
                <Button
                  onClick={() => {
                    handleTelephoneTooltipOpen();
                    navigator.clipboard.writeText(props.data.contactText[5]);
                  }}
                >
                  <Typography variant="button" color="textPrimary">
                    {props.data.contactText[4]}
                  </Typography>
                </Button>
              </Tooltip>
            </ClickAwayListener>
            <Typography
              variant="button"
              color="textPrimary"
              className={classes.bullet}
            >
              •
            </Typography>
            <ClickAwayListener onClickAway={handleEmailTooltipClose}>
              <Tooltip
                arrow
                placement="top"
                PopperProps={{
                  disablePortal: true,
                }}
                onClose={handleEmailTooltipClose}
                open={openEmailTooltip}
                disableFocusListener
                disableHoverListener
                disableTouchListener
                interactive
                classes={{tooltip: classes.tooltipWidth}}
                title={
                  <Typography variant="overline" color="textSecondary">
                    {props.data.contactText[9]}
                  </Typography>
                }
              >
                <Button
                  onClick={() => {
                    handleEmailTooltipOpen();
                    navigator.clipboard.writeText(props.data.contactText[8]);
                  }}
                >
                  <Typography variant="button" color="textPrimary">
                    {props.data.contactText[7]}
                  </Typography>
                </Button>
              </Tooltip>
            </ClickAwayListener>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default ContactView;

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.secondary.main,
    position: "relative",
  },
  backgroundTriangle: {
    color: theme.palette.primary.main,
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
