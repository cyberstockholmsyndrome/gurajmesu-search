import React from "react";
import { Helmet } from "react-helmet";

const SEO = () => (
  <Helmet>
    <meta name="keywords" content="grimes, lyrics, claire, boucher, music" />
    <meta name="author" content="Peter W." />
    <meta
      name="description"
      content="Najlepsza wyszukiwarka tekstów utworów autorstwa Grimes"
    />
    <meta property="og:url" content="https://gurajmesu-search.netlify.com/" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Gurajmesu Search" />
    <meta
      property="og:description"
      content="Najlepsza wyszukiwarka tekstów utworów autorstwa Grimes"
    />
    <meta
      property="og:image"
      content="http://images3.alphacoders.com/630/630823.jpg"
    />
    <meta
      property="og:image:secure_url"
      content="https://images3.alphacoders.com/630/630823.jpg"
    />
    <meta property="og:image:width" content="1920" />
    <meta property="og:image:height" content="1080" />
  </Helmet>
);

export default SEO;
