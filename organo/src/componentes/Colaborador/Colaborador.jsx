import { RiDeleteBin2Line } from "react-icons/ri"; // vc seleciona a pasta com as duas primeiras letras do icone escolhido
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import "./Colaborador.css";

export const Colaborador = ({
    colaborador,
    corDeFundo,
    aoDeletar,
    aoFavoritar,
}) => {
    //FUNÇÃO RESPONSÁVEL POR TRAZER O ID DO COLABORADOR E SER EXECUTADA NO ONCLICK
    function excluirColaborador() {
        aoDeletar(colaborador.id);
    }

    function favoritar() {
        aoFavoritar(colaborador.id);
    }

    return (
        <div className="colaborador" style={{ backgroundColor: corDeFundo }}>
            <RiDeleteBin2Line
                className="deletar"
                // onClick={() => aoDeletar(id)} escreve dessa forma ou da forma abaixo
                onClick={excluirColaborador}
                size={25}
            ></RiDeleteBin2Line>
            <img src={colaborador.imagem} alt={colaborador.nome}></img>
            <div className="cabecalho"></div>
            <div className="rodape">
                <h4>{colaborador.nome}</h4>
                <h5>{colaborador.cargo}</h5>
                <div className="favoritar">
                    {colaborador.favorito ? (
                        <AiFillHeart size={25} onClick={favoritar} />
                    ) : (
                        <AiOutlineHeart size={25} onClick={favoritar} />
                    )}
                </div>
            </div>
        </div>
    );
};
