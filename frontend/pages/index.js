import Head from "next/head";
import styles from "../styles/Home.module.css";
import Homepage from "../components/Homepage";
import { motion } from "framer";
export default function Home() {
  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0, transition: 0.5 },
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <motion.main
        className={styles.main}
        initial="hidden"
        animate="visible"
        variants={variants}
      >
        <Homepage />
      </motion.main>
    </div>
  );
}
