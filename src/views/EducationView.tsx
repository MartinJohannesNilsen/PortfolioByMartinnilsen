import { FC } from "react";
import {
  Box,
  makeStyles,
  Typography,
  Grid,
  Card,
  CardContent,
} from "@material-ui/core";
import { Icon } from "@iconify/react";
import caretDown from "@iconify-icons/carbon/caret-down";

type EducationCardProps = {};

const EducationCard: FC<EducationCardProps> = (props) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Box textAlign="left">
          <Typography variant="h3" color="textPrimary">
            Læringsassistent i IDATT2502 - Anvendt maskinlæring med prosjekt
          </Typography>
        </Box>
        <Box textAlign="left">
          <Typography variant="body1" color="textPrimary">
            <p>Norges teknisk-naturvitenskapelige universitet (NTNU)</p>
          </Typography>
        </Box>
        <Box className={classes.textContainer}>
          <Box my={2} textAlign="justify">
            <Typography variant="body2" color="textPrimary">
              Jobber ved siden av studiet som hjelpelærer for de i årene under
              meg. Senest i faget anvendt maskinlæring ved NTNU.
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

type EducationViewProps = {
  data: {};
};

const EducationView: FC<EducationViewProps> = (props) => {
  const classes = useStyles();

  return (
    <Box className={classes.root} textAlign="center">
      <Icon icon={caretDown} className={classes.backgroundTriangle} />
      <Grid
        container
        alignItems="center"
        justify="center"
        className={classes.height}
      >
        <Grid item xs={12} alignContent="center">
          <Box display="flex" className={classes.flex}>
            <EducationCard />
            <EducationCard />
            <EducationCard />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
export default EducationView;

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100%",
    backgroundColor: theme.palette.secondary.main,
    position: "relative",
    width: "300%",
  },
  backgroundTriangle: {
    color: theme.palette.primary.main,
    position: "absolute",
    margin: "-45px",
    height: "100px",
    width: "100px",
  },
  height: {
    height: "100vh",
  },
  flex: {},
  card: {
    backgroundColor: theme.palette.error.main,
    position: "relative",
    borderRadius: 50,
    padding: "40px",
    margin: "0 15vw",
  },
  textContainer: {},
  ref: {
    // opacity: 0
  },
}));
