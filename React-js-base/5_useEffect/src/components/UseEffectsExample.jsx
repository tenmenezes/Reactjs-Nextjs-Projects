import { useState, useEffect } from "react";

const UseEffectsExample = () => {
  // sem dependencias
  useEffect(() => {
    console.log("UE1");
  });

  // com dependencia vazia / array de dep. vazia
    useEffect(() => {
        console.log("R_UE2");
    }, []);
    
    
    // useState ativa a re-renderização
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);
    
    // com dependencias
    useEffect(() => {
        console.log("R_UE3")
    }, [count])
    
    return (
      <div>
        <p>Contador: {count}</p>
        <button onClick={() => setCount(count + 1)}>Aumentar contagem</button>
        <button onClick={() => setCount(count2 + 1)}>Aumentar contagem2</button>
      </div>
    );
};

export default UseEffectsExample;
