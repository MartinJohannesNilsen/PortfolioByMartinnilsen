import React, { FC } from "react";
import { Box, Button, makeStyles, Typography } from "@material-ui/core";
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

  // En ide med tooltip?
  // const handleCopyToClipboard = (element: string) => {
  //   document.execCommand(element);
  //   alert("Copied the text: " + element);
  // };

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
                window.open("https://github.com/Martinnilsen99", "_blank")
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
            <Button onClick={() => (window.location.href = "tel:004745005502")}>
              <Typography variant="button" color="textPrimary">
                {props.data.contactText[4]}
              </Typography>
            </Button>
            <Typography
              variant="button"
              color="textPrimary"
              className={classes.bullet}
            >
              •
            </Typography>
            <Button
              onClick={() =>
                (window.location.href = "mailto:martinjnilsen@icloud.com")
              }
            >
              <Typography variant="button" color="textPrimary">
                {props.data.contactText[5]}
              </Typography>
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default ContactView;

const useStyles = makeStyles((theme) => ({
  root: {
    maxHeight: "15%",
    backgroundColor: theme.palette.text.secondary,
    position: "relative",
  },
  backgroundTriangle: {
    color: theme.palette.text.primary,
    position: "absolute",
    margin: "-45px",
    height: "100px",
    width: "100px",
  },
  bullet: {
    margin: "0 5px",
  },
}));
