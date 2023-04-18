import React, { useState } from "react";
import Heading from "./comp/heading";
import { useRouter } from "next/router";
import Head from "next/head";
import ProgressActivity from "./comp/progress";
import SearchBox from "./comp/searchbox";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import ghost from "../public/ghost.json";
import config from "./const.json";
import style from './css/content.module.css';

export default function ContentPage() {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState({});
  const router = useRouter();
  React.useEffect(() => {
  const { identifier } = router.query;
    fetch(`${config.server_url}/get_page.php`, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        pid: identifier,
      }),
      method: "POST",
    })
      .then((r) =>
        r.json().then((bdy) => {
          if (bdy.status === 200){
            setData(bdy.message);
            setLoaded(true);
          }else{
            setLoaded(false);
            setError(true);
          }
        })
      )
      .catch((e) => {
        setLoaded(false);
        setError(true);
        console.log(e);
      });
  }, [router.query]);

  return loaded ? (
    <>
      <Head>
        <title>{data.title} - Pranah Group</title>
      </Head>
      <Heading>{data.title}</Heading>
      <SearchBox />
      <p className={style.p}>{data.content}</p>
    </>
  ) : error ? (
    <>
      <Head>
        <title>Error Loading Page - Pranah Group</title>
      </Head>
      <Heading>Unknown Error Occured</Heading>
      <SearchBox />
      <Player
        autoplay
        loop
        src={ghost}
        style={{ height: "300px", width: "300px" }}
      />
    </>
  ) : (
    <>
      <Head>
        <title>Pranah Group</title>
      </Head>
      <ProgressActivity />
    </>
  );
}
