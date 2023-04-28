import { RiDeleteBin2Line } from "react-icons/ri"; // vc seleciona a pasta com as duas primeiras letras do icone escolhido
import "./Colaborador.css";

export const Colaborador = (props) => {
    return (
        <div
            className="colaborador"
            style={{ backgroundColor: props.corDeFundo }}
        >
            <RiDeleteBin2Line
                className="deletar"
                onClick={props.aoDeletar}
                size={25}
            ></RiDeleteBin2Line>
            <img src={props.imagem} alt={props.nome}></img>
            <div className="cabecalho"></div>
            <div className="rodape">
                <h4>{props.nome}</h4>
                <h5>{props.cargo}</h5>
            </div>
        </div>
    );
};
