// server/index.js
const path = require("path");
const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 3001;
const app = express();
app.use(cors());

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

const cohere = require("cohere-ai");
cohere.init("W1LA4VcWQeEqm88JXR8NK9PM8vB9MxyrYUrCXDLz");

(async () => {
  const response = await cohere.classify({
    model: "large",
    inputs: ["i like flowers", "i'm going to kill you"],
    examples: [
      { text: "Murda Gang\n  bitch its Gang Land", label: "Offensive" },
      { text: "bitch nigga\n  miss me with it", label: "Offensive" },
      {
        text: "Harlem shake is just an excuse to go full retard for 30 seconds",
        label: "Offensive",
      },
      { text: "she look like a tranny", label: "Offensive" },
      { text: "You are being a bit\n  negative.", label: "Benign" },
      { text: "You are being a bit\n  negative.", label: "Benign" },
      {
        text: "Hi, thanks for\n  testing! Please press start.",
        label: "Benign",
      },
      { text: "How long have you\n  been going crazy?", label: "Benign" },
      { text: "What city will you\n  be flying from?", label: "Benign" },
      { text: "Oh, i prefer\n  mountain biking.", label: "Benign" },
      {
        text: "#Yankees I ain't\n  complaining about the Royals win or lose game7. They showed heart. AL ride or\n  die! No flex zone. They earned it!",
        label: "Benign",
      },
      { text: "Oh, i fat ugly\n  bastard.", label: "Offensive" },
      { text: "fuckin skyler white is such a bitch", label: "Offensive" },
    ],
  });
  console.log(`
    The confidence levels of the labels are ${JSON.stringify(
      response.body.classifications
    )}`);
})();
