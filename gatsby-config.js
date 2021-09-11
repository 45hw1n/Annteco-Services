module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "anneteco-services",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    // {
    //   resolve: "gatsby-plugin-google-analytics",
    //   options: {
    //     trackingId: "",
    //   },
    // },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName:"Anneteco",
        fieldName:"Anneteco",
        downloadLocalImage: true,
        url:"https://api-us-east-1.graphcms.com/v2/ckt618ds81wb301yzgc9h2yt7/master",
      }
    }
  ],
};
