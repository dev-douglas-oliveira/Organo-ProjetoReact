import "./Colaborador.css";

export const Colaborador = (props) => {
    return (
        <div className="colaborador">
            <img
                src="https://github.com/dev-douglas-oliveira.png"
                alt="imagem do indivíduo"
            ></img>
            <div className="cabecalho"></div>
            <div className="rodape">
                <h4>Douglas Oliveira</h4>
                <h5>Desenvolvedor Front End</h5>
            </div>
        </div>
    );
};
