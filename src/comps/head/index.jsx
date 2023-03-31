import Head from "next/head"


export default function HeadComp(){

  return (<>
      <Head>
        <title>New Twitter</title>
        <meta name="description" content="Hot or Drop with Last.fm" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
  </>)
}