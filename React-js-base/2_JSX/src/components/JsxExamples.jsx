import React from "react";

const JsxExamples = () => {
    function getGreeding(name) {
        return `Olá ${name}`;
    }

    const userName = "Carlos";

    const userIsLoggedIn = true;

    const userRolle = "admin";

    const users = [
      {
        id: 1,
        name: "Ana",
      },
      {
        id: 2,
        name: "Yasmim",
      },
      {
        id: 3,
        name: "Thiago",
      },
    ];

    const user = {
        name: "Ana",
        lastName: "Maria",
    };

    return (
        <div>
            {/* Básico */}
            <h2>Conteúdo que o usuário vai ver</h2>
            {/* Listando dados do usuário */}
            <p>O nome do usuário é: {userName}</p>
            <p>
                Usuário com class: {user.name} {user.lastName}
            </p>
            <p>{getGreeding(userName)}</p>
            <p>{getGreeding("Yago Menezes")}</p>
            {/* Diferenças do HTML */}
            <div className="test">teste</div> <br />
            <button onClick={() => alert("Evento de clique com jsx")}>click</button>
            {/* Renderização condicional */}
            {userIsLoggedIn ? (
                <div>
                    <p>Caso: está logado!</p>
                </div>
            ) : (
                <p>Caso: NÂO está logado!</p>
            )}

            <p>{userRolle === "admin" && "Voce é um admin"}</p>

            {/* Renderização de listas */}

            <div>
                <ul>
                    {users.map((user) => (
                        <li key={user.id}>
                            {user.id} - {user.name}
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    );
};

export default JsxExamples;
