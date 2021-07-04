import Head from "next/head";

export const LocalHead = () => {
  return (
    <Head>
      <title>Next Todo App</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="og:url" content="https://next-todo-2-0.vercel.app/" />
      <meta property="og:title" content="Next Todo-App" />
      <meta
        property="og:description"
        content="This Todo-App is beautiful and easy to use. ✨"
      />
      <meta
        property="og:image"
        content="https://user-images.githubusercontent.com/68226398/124373769-2ced7580-dcd0-11eb-86cd-93e56533a072.png"
      />
    </Head>
  );
};
