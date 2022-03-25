import Head from "next/head";
import Navbar from "../components/Navbar";
import TopProjects from "../components/TopProjects";
import styles from "../styles/Home.module.css";
import Landingpage from "../components/Landingpage";
import AllProjects from "../components/AllProjects";
import Hostedprojectcard from "../components/Hostedprojectcard";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Navbar />
        <Landingpage />
        <TopProjects />
        <AllProjects />
      </main>
    </div>
  );
}
