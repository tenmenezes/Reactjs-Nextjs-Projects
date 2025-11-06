import { useState } from "react";

const EventHandlingExamples = () => {
  const handleClick = () => {
    alert("Evento com função");
  };

  const handleGreet = (nome) => {
    return alert(`Olá ${nome}`);
  };

  const [name, setName] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Enviado! ${nome}`);
  };

  return (
    <div>
      <button onClick={() => alert("Evento de clique")}>Clique</button>
      <br />
      <br />
      <button onClick={handleClick}>Clique_2</button>
      <br />
      <br />
      <button onClick={() => handleGreet("Ana")}>dizer ola ana</button>
      <br />
      <br />
      <button onClick={() => handleGreet("Pedro")}>dizer ola pedro</button>
      <br />
      <br />
      <hr />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Digite seu nome"
        />
        <br />
        <br />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default EventHandlingExamples;
