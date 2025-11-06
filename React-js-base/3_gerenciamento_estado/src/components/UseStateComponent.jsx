// useState = Hook

import { useState } from "react";

// sempre que o valor de algo tiver que ser alterado => useState
// sempre que o valor for somente leitura => var, state

const UseStateComponent = () => {
  // criando variavel de consulta, de alteração e iniciando o hook

  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1); // o mesmo que o de baixo
    // porém é uma forma de ter a certeza de que está pegando
    // o estado anterior da variável - forma "react" de ser feita
    // setCount(count+1);
    console.log(count);
  };

  const [user, setUser] = useState({
    name: "Yago Menezes",
    age: 18,
    hobbies: ["Ouvir música", "Programação"],
  });

  const updateUserAge = () => {
    setUser((prevUser) => ({
      ...prevUser,
      age: prevUser.age + 1,
    }));
  };

  return (
    <div>
      <h2>Contador</h2>
      <p>Voce clicou {count} vezes</p>
      <button onClick={increment}>Incrementar</button>
      <p>
        Nome: {user.name} <br /> Idade: {user.age}
      </p>
      <button onClick={updateUserAge}>incrementar idade</button>
    </div>
  );
};

export default UseStateComponent;
