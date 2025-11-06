import React from "react";

// resumidamente:

// props: Comunicação de dados do componente pai para o componente filho

// Maneira menos convencional:

// const PropsExample = (props}) => {
//  return (
//    <div>
//      <h4>Olá, sou {props.nome}</h4>
//      <p>Eu tenho {props.idade} anos.</p>
//    </div>
//  );
//}

// maneira mais convencional de utilizar props:
const PropsExample = ({ nome, idade }) => {
  return (
    <div>
      <h4>Olá, sou {nome}</h4>
      <p>Eu tenho {idade} anos.</p>
    </div>
  );
};

export default PropsExample;
