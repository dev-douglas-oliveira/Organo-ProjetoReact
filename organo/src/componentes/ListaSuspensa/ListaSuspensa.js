import "./ListaSuspensa.css";

export const ListaSuspensa = (props) => {
    console.log(props.itens);
    return (
        <div className="lista-suspensa">
            <label>{props.label}</label>
            <select>
                {props.itens?.map((item) => {
                    return <option key={item}>{item}</option>;
                })}
                {/* usado o operador "?" para evitar o erro de proprieda nula ou undefined*/}
            </select>
        </div>
    );
};
