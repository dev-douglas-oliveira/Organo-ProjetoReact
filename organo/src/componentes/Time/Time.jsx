import hexToRgba from "hex-to-rgba";
import "./Time.css";
import Colaborador from "../Colaborador";

export const Time = ({
    aoFavoritar,
    aoDeletar,
    time,
    colaboradores,
    mudarCor,
}) => {
    const cssTime = {
        backgroundImage: "url(/imagens/fundo.png)",
        backgroundColor: hexToRgba(time.cor, 0.6),
    };
    const cssBordaTime = { borderColor: time.cor };

    //pode escrever assim
    //style={cssTime}

    // ou assim: style={{ backgroundColor: props.corSecundaria }}

    return (
        //props.colaborares.length > 0 && serve para verificar se a array de colaboradores é maior que zero, se for exibe a section
        // tbm pode escrever da seguinte forma: props.colaborares.length > 0 ? : ""
        colaboradores.length > 0 ? (
            <section className="time" style={cssTime}>
                <input
                    onChange={(evento) =>
                        mudarCor(evento.target.value, time.id)
                    }
                    value={time.cor}
                    type="color"
                    className="input-cor"
                />
                <h3 style={cssBordaTime}>{time.nome}</h3>
                <div className="colaboradores">
                    {colaboradores.map((colaborador, indice) => {
                        return (
                            <Colaborador
                                key={indice}
                                colaborador={colaborador}
                                corDeFundo={time.cor}
                                aoDeletar={aoDeletar}
                                aoFavoritar={aoFavoritar}
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
