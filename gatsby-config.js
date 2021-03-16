/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`, // nombre de la instancia de este plugin
        path: `${__dirname}/src/projects/`,  // ruta de donde tomara los archivos para agregarlos a la capa de graphql
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`, // nombre de la instancia para imagenes
        path: `${__dirname}/src/images/`,  // ruta de donde tomara las imagenes
      },
    }
  ],
  siteMetadata: {
    title: 'Web Warrior',
    description: 'web dev portfolio',
    copyright: 'This website is copyright 2021 Web Warrior',
    contact: 'me@thewebwarrior.co.uk'
  }
}
