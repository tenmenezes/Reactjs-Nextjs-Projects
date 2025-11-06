import React from "react";

import "./StylesExamples.css";
import styles from "./StylesExamples.module.css";

const StylesExamples = () => {
  // inline styles
  const inlineStyles = {
    color: "red",
    fontSize: "100px",
  };

  return (
    <div>
      <h1>Hello world</h1>
      <h2 style={inlineStyles}>Estilos inline - Somente casos extremos</h2>
      {/* Arquivos de estilo */}
      <p className="text">Importando arquivo de estilo</p>
      {/* CSS Modules */}
      <p className={styles.textRed}>Testando css modules</p>
    </div>
  );
};

export default StylesExamples;
