import { useState } from "react";
import Banner from "./componentes/Banner/index.js";
import Formulario from "./componentes/Formulario/index.js";
import ListaSuspensa from "./componentes/ListaSuspensa/index.js";

function App() {
    const [colaboradores, setColaboradores] = useState([]);

    const aoNovoColaboradorAdicionado = (colaborador) => {
        console.log(colaborador);
        setColaboradores([...colaboradores, colaborador]); //...colabores espalha todos os antigos e por fim adiciona o ultimo
    };

    return (
        <div className="App">
            <Banner />
            <Formulario
                aoColaboradorCadastrado={(colaborador) =>
                    aoNovoColaboradorAdicionado(colaborador)
                }
            />
            <ListaSuspensa />
        </div>
    );
}

export default App;
