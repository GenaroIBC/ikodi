import Head from "next/head";

export function SemanticHead() {
  return (
    <Head>
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content="IKodi - programming and web development"
      />
      <meta
        property="og:description"
        content="IKodi is a blog about web development and programming, were you can find articles about many different tools, technologies and web concepts."
      />
      <meta property="og:url" content="https://ikodi.vercel.app" />
      <meta property="og:site_name" content="IKodi" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="IKodi - Programming and Web Development"
      />
      <meta
        name="twitter:description"
        content="IKodi is a blog about web development and programming, were you can find articles about many different tools, technologies and web concepts."
      />
      <meta
        name="twitter:image"
        content="https://ikodi.vercel.app/favicon.ico"
      />
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        name="description"
        content="IKodi is a blog about web development and programming, were you can find articles about many different tools, technologies and web concepts."
      />
      <base target="_blank" />
      <title>Ikodi</title>
    </Head>
  );
}
