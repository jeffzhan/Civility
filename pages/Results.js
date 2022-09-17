import React from "react";
import { Box, Typography, Button } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60%",
  height: "70%",
  bgcolor: "#FFF0D9",
  borderRadius: "40px",
  boxShadow: 24,
  p: 7,
  color: "#585379",
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
          Dummy.
        </Typography>
        <br></br>
        <Typography
          variant="h5"
          sx={{ fontWeight: "bold", fontFamily: "Lato" }}
        >
          Political
        </Typography>
        <Typography sx={{ mt: 2, fontSize: 20, fontFamily: "Lato" }}>
          {data[1].politics}
        </Typography>
        <br></br>
        <Typography
          variant="h5"
          sx={{ fontWeight: "bold", fontFamily: "Lato" }}
        >
          Toxicity
        </Typography>
        <Typography sx={{ mt: 2, fontSize: 20, fontFamily: "Lato" }}>
          {data[0].toxicity}
        </Typography>

        <Typography
          sx={{
            fontSize: "20vh",
            fontFamily: "Lato",
            fontWeight: "bold",
            marginLeft: "65%",
            marginTop: "-30%",
          }}
        >
          {Math.round(Math.max(data.offense_conf, data.benign_conf) * 100)}%
        </Typography>
      </Box>
    </div>
  );
}

export default Results;
