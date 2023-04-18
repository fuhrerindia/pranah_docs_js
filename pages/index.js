import React, { useState } from "react";
import Heading from "./comp/heading";
import SearchBox from "./comp/searchbox";
import Result from "./comp/result";
import Head from "next/head";
import ProgressActivity from "./comp/progress";
import config from "./const.json";

export default function Index({}) {
  const [content, setContent] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [last, setLast] = useState(0);

  function loadData() {
    fetch(`${config.server_url}/index.php`, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      method: "POST",
      body: new URLSearchParams({
        start: last,
      }),
    })
      .then((r) => {
        r.json().then((result) => {
          if (result.status === 200) {
            setContent(result.message);
            setLast(last + 15);
            setLoaded(true);
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
  }, []);
  return loaded ? (
    <>
      <Head>
        <title>Help Centre - Pranah Group</title>
      </Head>
      <Heading>Help Centre</Heading>
      <SearchBox />
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
  ) : (
    <>
      <Head>
        <title>Pranah Group</title>
      </Head>
      <ProgressActivity />
    </>
  );
}
