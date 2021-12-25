import React from 'react'

const Footer = () => {
	return (
		
			<footer
          style={{
            marginTop: `2rem`,
            textAlign: `center`,
            padding: `1rem`,
            backgroundColor: `#222`
          }}
        >
          © {new Date().getFullYear()} - Gastos Gastby, feito com Gatsby
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>{` `} <br />
          por <a href="https://jovane.netlify.app">Jovane</a>
        </footer>
	)
}

export default Footer