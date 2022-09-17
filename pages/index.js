import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { TextField, Typography, Box, Button, Stack, Link } from "@mui/material";

export default function Home() {
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

        <Typography
          variant="h2"
          className={styles.title}
          sx={{ marginTop:5 }}
        >
          An online text analyzer
        </Typography>

        <Typography variant="h5" className={styles.subTitle}>simply enter your text below!</Typography>

        <TextField
          className={styles.textBox}
          multiline
          rows={10}
          placeholder="Type text here..."
          fontFamily="Lato"
          sx={{ width: "100%", marginTop: 3 }}
        />
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
            Powered by j.a.h. 😍
          </Link>
        </Stack>
      </Stack>
    </div>
  );
}
