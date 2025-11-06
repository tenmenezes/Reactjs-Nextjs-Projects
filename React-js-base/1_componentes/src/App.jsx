//componente pai
import "./App.css";

// importando componente filho
import FunctionalComponent from "./components/FunctionalComponent";
import ClassComponent from "./components/ClassComponent";
import PropsExample from "./components/PropsExample";

function App() {
  return (
    <>
      <h1>Hello World from react Js!</h1>
      {/* Comentários dentro do JSX */}
      <FunctionalComponent />
      {/* Componente de classe */}
      <ClassComponent />
      {/* Exemplo de utilização de Props */}
      <PropsExample nome="Yago Menezes" idade={18} />
    </>
  );
}

export default App;
