import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActions } from "@mui/material";
import CampaignIcon from "@mui/icons-material/Campaign";
import ShortTextIcon from "@mui/icons-material/ShortText";

export default function Goal({ intentName }) {
  return (
    <Card
      sx={{
        maxWidth: 345,
        alignItems: "center",
        m: 5,
        // justifyContent: "center",
        borderRadius: "12px",
        bgcolor: "#E59934",
        color: "white",
        justifyContent: "center",
        "& .hover": {
          // display: "none"
          visibility: "hidden"
        },
        "&:hover .hover": {
          // display: "flex"
          visibility: "visible"
        }
      }}
      elevation={7}
    >
      <CardContent>
        <Typography variant="h5" component="div">
          {intentName}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          color="primary"
          variant="contained"
          startIcon={<ShortTextIcon />}
          className="hover"
        >
          Training
        </Button>
        <Button
          size="small"
          color="primary"
          variant="contained"
          startIcon={<CampaignIcon />}
          className="hover"
        >
          Responses
        </Button>
      </CardActions>
    </Card>
  );
}
