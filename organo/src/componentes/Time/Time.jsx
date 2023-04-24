import "./Time.css";
import Colaborador from "../Colaborador";

export const Time = (props) => {
    const cssTime = { backgroundColor: props.corSecundaria };
    const cssBordaTime = { borderColor: props.corPrimaria };
    //pode escrever assim
    //style={cssTime}

    // ou assim: style={{ backgroundColor: props.corSecundaria }}

    return (
        //props.colaborares.length > 0 && serve para verificar se a array de colaboradores é maio que zero, se for exibe a section
        // tbm pode escrever da seguinte forma: props.colaborares.length > 0 ? : ""
        props.colaboradores.length > 0 ? (
            <section className="time" style={cssTime}>
                <h3 style={cssBordaTime}>{props.nome}</h3>
                <div className="colaboradores">
                    {props.colaboradores.map((colaborador) => (
                        <Colaborador
                            key={colaborador.id}
                            nome={colaborador.nome}
                            cargo={colaborador.cargo}
                            imagem={colaborador.imagem}
                            corDeFundo={props.corPrimaria}
                        />
                    ))}
                </div>
            </section>
        ) : (
            ""
        )
    );
};
