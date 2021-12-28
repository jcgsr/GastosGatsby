import React, { useState } from "react";
import { Link, navigate } from "gatsby";

// import app from "gatsby-plugin-firebase-v9.0";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase-config";

import Layout from "../components/layout";
import Seo from "../components/seo";

const IndexPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async e => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("funciona");
      alert("Funciona");
      navigate("/form");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <Seo title="Home" />
      <h2>Login</h2>

      <form className="form">
        <label htmlFor="email">e-mail</label>
        <input
          type="text"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <label htmlFor="password">senha</label>
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button id="login" onClick={handleLogin}>
          login
        </button>
      </form>
    </Layout>
  );
};
export default IndexPage;
