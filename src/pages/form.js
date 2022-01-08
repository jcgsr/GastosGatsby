import React, { useState, useEffect } from "react";
import { navigate } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";

import { toast, Toaster } from "react-hot-toast";

import ScaleLoader from "react-spinners/ScaleLoader";

import { RiDeleteBin6Fill } from "react-icons/ri";
import app from "gatsby-plugin-firebase-v9.0";

import { signOut, getAuth } from "firebase/auth";

import {
  addDoc,
  collection,
  getDocs,
  doc,
  deleteDoc,
  orderBy,
  query,
  getFirestore,
} from "firebase/firestore";
// import { auth, db } from "../../firebase-config";

const Form = ({ location, ...rest }) => {
  // Gastos inserir
  const [dataAtual, setDataAtual] = useState("");
  const [casa, setCasa] = useState("");
  const [luz, setLuz] = useState("");
  const [agua, setAgua] = useState("");
  const [ouro, setOuro] = useState("");
  const [net, setNet] = useState("");
  const [saude, setSaude] = useState("");
  const [edu, setEdu] = useState("");
  const [carro, setCarro] = useState("");
  const [inss, setInss] = useState("");

  // Gastos mostrar
  const [gastos, setGastos] = useState([]);
  const [loading, setLoading] = useState(true);
  const db = getFirestore(app);
  const gastosColRef = collection(db, "gastos");
  const q = query(gastosColRef, orderBy("dataAtual", "desc"));

  // logged in
  const auth = getAuth(app);
  const user = auth.currentUser;

  useEffect(() => {
    const getGastos = async () => {
      const gastosData = await getDocs(q);
      setGastos(gastosData.docs.map(doc => ({ ...doc.data(), id: doc.id })));
      setLoading(false);
    };
    getGastos();
  }, []);
  if (!user && location.pathname !== `/`) {
    navigate("/");
    return null;
  }
  const handleInsert = async e => {
    e.preventDefault();
    try {
      await addDoc(gastosColRef, {
        dataAtual: dataAtual,
        casa: casa,
        luz: luz,
        agua: agua,
        ouro: ouro,
        net: net,
        saude: saude,
        edu: edu,
        carro: carro,
        inss: inss,
      });
      toast.success("Gasto inserido!");
      limpar();
    } catch (error) {
      alert(error);
    }
  };
  const handleLogout = async () => {
    const auth = getAuth(app);
    await signOut(auth);
    navigate("/");
  };

  const handleDelete = async id => {
    const gastoDoc = doc(db, "gastos", id);
    await deleteDoc(gastoDoc);
    toast.success("Gasto excluído!");
  };

  const limpar = () => {
    setDataAtual("");
    setCasa("");
    setAgua("");
    setLuz("");
    setOuro("");
    setNet("");
    setSaude("");
    setEdu("");
    setCarro("");
    setInss("");
  };
  if (loading) {
    return (
      <div className="spinner">
        <ScaleLoader color="#ccc" />
      </div>
    );
  }
  return (
    <Layout>
      <Seo title="Formulário para inserir e salvar os gastos mensais" />
      <Toaster />
      <h1>Formulário de Gastos</h1>

      <section>
        <form className="form">
          <input
            type="date"
            value={dataAtual}
            onChange={e => setDataAtual(e.target.value)}
          />
          <input
            placeholder="casa"
            type="text"
            value={casa}
            onChange={e => setCasa(e.target.value)}
          />
          <input
            placeholder="água"
            type="text"
            value={agua}
            onChange={e => setAgua(e.target.value)}
          />
          <input
            placeholder="luz"
            type="text"
            value={luz}
            onChange={e => setLuz(e.target.value)}
          />
          <input
            placeholder="ourocard"
            type="text"
            value={ouro}
            onChange={e => setOuro(e.target.value)}
          />
          <input
            placeholder="net/tv"
            type="text"
            value={net}
            onChange={e => setNet(e.target.value)}
          />
          <input
            placeholder="saúde"
            type="text"
            value={saude}
            onChange={e => setSaude(e.target.value)}
          />
          <input
            placeholder="educação"
            type="text"
            value={edu}
            onChange={e => setEdu(e.target.value)}
          />
          <input
            placeholder="carro-528.9"
            type="text"
            value={carro}
            onChange={e => setCarro(e.target.value)}
          />
          <input
            placeholder="inss"
            type="text"
            value={inss}
            onChange={e => setInss(e.target.value)}
          />
          <button id="insert" onClick={handleInsert}>
            inserir gastos
          </button>
        </form>
        <button id="logout" onClick={handleLogout}>
          sair
        </button>
        <div>
          <table>
            <thead>
              <tr>
                <th>Data</th>
                <th>Casa</th>
                <th>Luz</th>
                <th>Água</th>
                <th>Ourocard</th>
                <th>Net/TV</th>
                <th>Saúde</th>
                <th>Educação</th>
                <th>Carro</th>
                <th>INSS</th>
              </tr>
            </thead>

            <tbody>
              {gastos.map(gasto => (
                <tr>
                  <td>{gasto.dataAtual}</td>
                  <td>{gasto.casa}</td>
                  <td>{gasto.luz}</td>
                  <td>{gasto.agua}</td>
                  <td>{gasto.ouro}</td>
                  <td>{gasto.net}</td>
                  <td>{gasto.saude}</td>
                  <td>{gasto.edu}</td>
                  <td>{gasto.carro}</td>
                  <td>{gasto.inss}</td>
                  <button
                    onClick={() => {
                      handleDelete(gasto.id);
                    }}
                    id="excluir"
                  >
                    <RiDeleteBin6Fill />
                  </button>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </Layout>
  );
};

export default Form;
