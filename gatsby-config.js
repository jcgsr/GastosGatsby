// 18.12.2021 - Refazendo o site de gastos. agora em Gatsby.
// Todos no Abais (Tãnia está aqui). Diana foi ontem com Frederico e Tânia e Susi foi hoje sozinha depois de insistir muito pra eu ir. Houve problema com a recarga da oi. Atrasou mais ainda.

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});
module.exports = {
  siteMetadata: {
    title: `Gastos Gatsby`,
    description: `Site feito em Gastby para acompanhar gastos mensais.`,
    author: `@teufel8`,
    siteUrl: `https://gatsbygastos.netlify.app`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-plugin-firebase-v9.0",
      options: {
        credentials: {
          // apiKey: "AIzaSyCbdjmsUWfFooP-R9xfNB1mjNfgT2Q0mJQ",
          // authDomain: "gastosvue.firebaseapp.com",
          // databaseURL: "https://gastosvue.firebaseio.com",
          // projectId: "gastosvue",
          // storageBucket: "gastosvue.appspot.com",
          // messagingSenderId: "1026932042493",
          // appId: "1:1026932042493:web:907ec4b1ca28277baeac94",
          // measurementId: "G-YNTNVK3Y79",
          // apiKey: process.env.GATSBY_PUBLIC_FIREBASE_API_KEY,
          // authDomain: `${process.env.GATSBY_PUBLIC_FIREBASE_PROJECT_ID}firebaseapp.com`,
          // databaseURL: `https://${process.env.GATSBY_PUBLIC_FIREBASE_PROJECT_ID}.firebaseio.com`,
          // projectId: process.env.GATSBY_PUBLIC_FIREBASE_PROJECT_ID,
          // storageBucket: `${process.env.GATSBY_PUBLIC_FIREBASE_PROJECT_ID}.appspot.com`,
          // messagingSenderId: "1026932042493",
          // appId: "1:1026932042493:web:907ec4b1ca28277baeac94",
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#272b30`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#272b30`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
};
