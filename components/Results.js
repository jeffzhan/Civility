import React from "react";
import { Box, Typography } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "75%",
  height: "70%",
  bgcolor: "#FFF0D9",
  borderRadius: "40px",
  boxShadow: 24,
  p: 7,
  color: "#585379",
  "@media (max-width: 600px)": {
    height: "90%",
    width: "80%",
  },
};

function Results({ data }) {
  return (
    <div>
      <Box sx={style}>
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", fontFamily: "Lato" }}
        >
          Results
        </Typography>
        <br></br>
        <Typography
          variant="h5"
          sx={{ fontWeight: "bold", fontFamily: "Lato" }}
        >
          Age Warning
        </Typography>
        <Typography sx={{ mt: 2, fontSize: 20, fontFamily: "Lato" }}>
          Your comment is meant for{" "}
          <b>
            {data[0].benign > data[0].offense
              ? "all ages"
              : "only ages above 18+"}
          </b>
          , so please be sensitive of what you type online!
        </Typography>
        <br></br>
        <Typography
          variant="h5"
          sx={{ fontWeight: "bold", fontFamily: "Lato" }}
        >
          Political
        </Typography>
        <Typography sx={{ mt: 2, fontSize: 20, fontFamily: "Lato" }}>
          Your comment seems to fall{" "}
          <b>
            {Math.round(Math.max(data[1].conservative, data[1].liberal) * 100)}%
          </b>{" "}
          more towards the {data[1].politics} spectrum.
        </Typography>
        <br></br>
        <Typography
          variant="h5"
          sx={{ fontWeight: "bold", fontFamily: "Lato" }}
        >
          Toxicity Level
        </Typography>
        <Typography sx={{ mt: 2, fontSize: 20, fontFamily: "Lato" }}>
          The toxicity level of the message that was typed was{" "}
          <b>
            {Math.round(Math.max(data[0].offense, data[0].benign) * 100 * 1.4)}%
          </b>{" "}
          {data[0].toxicity.toLowerCase()}.
          {data[0].offense > data[0].benign
            ? " Stay safe on the internet, you might get cancelled!"
            : " This seems alright to post, keep up the good work!"}
        </Typography>
      </Box>
    </div>
  );
}

export default Results;
