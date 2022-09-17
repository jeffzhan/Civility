import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { TextField } from "@mui/material";

export default function Home() {
  return (
    <div className={styles.container}>
      <header>
        <p>
          Civility{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </p>
      </header>
      <Head>
        <title>Civility</title>
        <meta name="description" content="Powered by j.an.h." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className={styles.title}>Welcome to Civility</h1>

      
      <main className={styles.main}>
        <div>
          <p>A text analyzer for anyone</p>
        </div>
        <TextField variant="filled" multiline rows={5} />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by j.a.h.
        </a>
      </footer>
    </div>
  );
}
