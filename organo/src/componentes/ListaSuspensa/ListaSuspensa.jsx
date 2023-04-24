import "./ListaSuspensa.css";

export const ListaSuspensa = (props) => {
    return (
        <div className="lista-suspensa">
            <label>{props.label}</label>
            <select
                onChange={(evento) => props.aoAlterado(evento.target.value)}
                value={props.valor}
                required={props.obrigatorio}
            >
                {/* limpa o campo Time */}
                <option value=""></option>

                {props.itens?.map((item) => {
                    return <option key={item}>{item}</option>;
                })}
                {/* usado o operador "?" para evitar o erro de proprieda nula ou undefined*/}
            </select>
        </div>
    );
};
