import Head from "next/head";

function MyHead({ title }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="keywords" content="test" />
      <link rel="icon" href="/recipe.ico" />
    </Head>
  );
}

export default MyHead;
