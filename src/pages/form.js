import * as React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";

import { signOut } from "firebase/auth";
import { auth } from "../../firebase-config";

const Form = () => {
  const handleLogout = async () => {
    await signOut();
  };
  return (
    <Layout>
      <Seo title="Formulário para inserir e salvar os gastos mensais" />
      <h1>Fórmulário de Gastos</h1>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  );
};

export default Form;
