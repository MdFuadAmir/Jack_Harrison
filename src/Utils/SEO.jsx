import { Helmet } from "react-helmet-async";

const SEO = ({
  title = "Jack Harrison | MERN Stack Web Developer",
  description = "Professional MERN stack web developer building fast, responsive, and modern web applications with React, Node.js, MongoDB, and Express.",
  image = "https://i.ibb.co.com/WNqYCBcV/fuad.png",
  url = "https://jack-harrison.vercel.app",
}) => {
  return (
    <Helmet>
      {/* BASIC SEO */}
      <title>{title}</title>

      <meta name="description" content={description} />

      <meta
        name="keywords"
        content="web developer, MERN stack developer, React developer, frontend developer, backend developer, full stack developer, Node.js, MongoDB, Express.js"
      />

      <meta name="author" content="Jack Harrison" />

      {/* OPEN GRAPH */}
      <meta property="og:type" content="website" />

      <meta property="og:title" content={title} />

      <meta property="og:description" content={description} />

      <meta property="og:image" content={image} />

      <meta property="og:url" content={url} />

      {/* TWITTER */}
      <meta name="twitter:card" content="summary_large_image" />

      <meta name="twitter:title" content={title} />

      <meta name="twitter:description" content={description} />

      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default SEO;
