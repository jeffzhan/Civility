import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { TextField, Typography, Box, Button, Stack, Link } from "@mui/material";
import { styled } from "@mui/system";
import { useState } from "react";

const ColoredBorderTextField = styled(TextField)`
  &:hover {
    color: ##585379;
  }
  & label.Mui-focused {
    color: #585379;
  }
  & .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-color: #585379;
    }
  }
`;

export default function Home() {
  const [inputText, setInputText] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Civility</title>
        <meta name="description" content="Powered by j.a.h." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Stack
        sx={{
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          width: "70%",
          height: "100vh",
          marginTop: 15,
        }}
      >
        <Typography variant="h4" fontFamily="Lato">
          civility
          {/* <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span> */}
        </Typography>

        <Typography variant="h2" className={styles.title} sx={{ marginTop: 5 }}>
          An online text analyzer
        </Typography>

        <Typography variant="h5" className={styles.subTitle}>
          simply enter your text below!
        </Typography>

        <div className="roundedTextField">
          <ColoredBorderTextField
            multiline
            variant="outlined"
            rows={10}
            placeholder="Type text here..."
            fontFamily="Lato"
            inputProps={{ style: { fontSize: 20, color: "black" } }}
            sx={{ width: "100%", marginTop: 3, borderRadius: 10 }}
            value={inputText}
            onChange={(event) => {
              setInputText(event.target.value);
            }}
          />
        </div>

        <Stack direction="row" justifyContent="end">
          <Button
            variant="contained"
            sx={{
              marginTop: 2,
              width: "15%",
              textTransform: "none",
              borderRadius: "14px",
              padding: "1rem",
              backgroundColor: "#585379",
              fontSize: 18,
              color: "#FFF0D9",
              "&:hover": { backgroundColor: "#8c84bf" },
            }}
            hover="none"
          >
            Check your Civility
          </Button>
        </Stack>
        <Stack
          direction="row"
          position="fixed"
          bottom="0"
          sx={{ marginBottom: 2, left: "46%" }}
        >
          <Link
            href="https://github.com/jeffzhan/civility"
            target="_blank"
            rel="noopener noreferrer"
            underline="none"
            color="#585379"
          >
            powered by j.a.h. 😍
          </Link>
        </Stack>
      </Stack>
    </div>
  );
}
