import "./CampoTexto.css";

export const CampoTexto = (props) => {
    // const placeholderModificada = `${props.placeholder}...`; // template string para concatenar 3 pontos no final de cada placeholder

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value);
    };
    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input
                value={props.valor}
                onChange={aoDigitado}
                required={props.obrigatorio}
                placeholder={props.placeholder}
            ></input>
        </div>
    );
};
