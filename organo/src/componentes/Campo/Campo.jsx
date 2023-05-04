import "./Campo.css";

export const Campo = ({
    type = "text",
    valor,
    aoAlterado,
    obrigatorio = false,
    placeholder,
    label,
}) => {
    // const placeholderModificada = `${props.placeholder}...`; // template string para concatenar 3 pontos no final de cada placeholder

    const aoDigitado = (evento) => {
        aoAlterado(evento.target.value);
    };

    return (
        <div className={`campo campo-${type}`}>
            <label>{label}</label>
            <input
                type={type}
                value={valor}
                onChange={aoDigitado}
                required={obrigatorio}
                placeholder={placeholder}
            ></input>
        </div>
    );
};
