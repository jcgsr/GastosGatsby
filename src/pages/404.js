import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <h1>404: Página não encontrada</h1>
    <p>A página que você tentou acessar não existe</p>
  </Layout>
)

export default NotFoundPage
