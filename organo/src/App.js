import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Time from "./componentes/Time";

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
            <Time nome="Programação" />
            <Time nome="Froont-End" />
        </div>
    );
}

export default App;
