import hexToRgba from "hex-to-rgba";
import "./Time.css";
import Colaborador from "../Colaborador";

export const Time = (props) => {
    const cssTime = {
        // backgroundColor: props.cor,
        backgroundImage: "url(/imagens/fundo.png)",
        backgroundColor: hexToRgba(props.cor, 0.6),
    };
    const cssBordaTime = { borderColor: props.cor };

    //pode escrever assim
    //style={cssTime}

    // ou assim: style={{ backgroundColor: props.corSecundaria }}

    return (
        //props.colaborares.length > 0 && serve para verificar se a array de colaboradores é maior que zero, se for exibe a section
        // tbm pode escrever da seguinte forma: props.colaborares.length > 0 ? : ""
        props.colaboradores.length > 0 ? (
            <section className="time" style={cssTime}>
                <input
                    onChange={(evento) =>
                        props.mudarCor(evento.target.value, props.nome)
                    }
                    value={props.cor}
                    type="color"
                    className="input-cor"
                />
                <h3 style={cssBordaTime}>{props.nome}</h3>
                <div className="colaboradores">
                    {props.colaboradores.map((colaborador, indice) => {
                        return (
                            <Colaborador
                                key={indice}
                                nome={colaborador.nome}
                                cargo={colaborador.cargo}
                                imagem={colaborador.imagem}
                                corDeFundo={props.cor}
                                aoDeletar={props.aoDeletar}
                            />
                        );
                    })}
                </div>
            </section>
        ) : (
            ""
        )
    );
};
