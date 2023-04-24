import "./Time.css";
import Colaborador from "../Colaborador";

export const Time = (props) => {
    const cssTime = { backgroundColor: props.corSecundaria };
    const cssBordaTime = { borderColor: props.corPrimaria };
    //pode escrever assim
    //style={cssTime}

    // ou assim: style={{ backgroundColor: props.corSecundaria }}

    return (
        <section className="time" style={cssTime}>
            <h3 style={cssBordaTime}>{props.nome}</h3>
            <div className="colaboradores">
                {props.colaboradores.map((colaborador) => (
                    <Colaborador
                        nome={colaborador.nome}
                        cargo={colaborador.cargo}
                        imagem={colaborador.imagem}
                    />
                ))}
            </div>
        </section>
    );
};
