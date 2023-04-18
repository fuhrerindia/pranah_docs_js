import React, { useState } from "react";
import Heading from "../comp/heading";
import SearchBox from "../comp/searchbox";
import Result from "../comp/result";
import Head from "next/head";
import ProgressActivity from "../comp/progress";
import config from "../const.json";
import ghost from "../../public/ghost.json";
import { Player } from "@lottiefiles/react-lottie-player";
import { useRouter } from "next/router";

export default function Index({}) {
  const [content, setContent] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [nothing, setNothing] = useState(true);
  const [title, setTitle] = useState("");
  const [last, setLast] = useState(0);
  const router = useRouter();
  function loadData() {
    const { q } = router.query;
    setTitle(q);
    fetch(`${config.server_url}/search.php`, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      method: "POST",
      body: new URLSearchParams({
        q: q,
      }),
    })
      .then((r) => {
        r.json().then((result) => {
          if (result.status === 200) {
            setContent(result.message);
            setLast(last + 15);
            setLoaded(true);
            if (result.message.length > 0){
                setNothing(false);
            }
          } else {
            alert("Error");
          }
        });
      })
      .catch((e) => {
        console.error(e);
      });
  }
  React.useEffect(() => {
    loadData();
  }, [router.query]);
  return loaded ? (
    nothing ? (
      <>
        <Head>
          <title>Nothing Found - Pranah Group</title>
        </Head>
        <Heading>No Result Found</Heading>
        <SearchBox value={title} />
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
          <title>Result for {title} - Pranah Group</title>
        </Head>
        <Heading>Result for {title}</Heading>
        <SearchBox value={title} />
        <section onScroll={() => console.log("s")}>
          {content.map((item) => {
            return (
              <Result
                title={item.title}
                snap={item.content}
                link={`/${item.url}`}
                key={item.url}
              />
            );
          })}
        </section>
      </>
    )
  ) : (
    <>
      <Head>
        <title>Pranah Group</title>
      </Head>
      <ProgressActivity />
    </>
  );
}
