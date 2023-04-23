import "./Time.css";

export const Time = (props) => {
    const cssTime = { backgroundColor: props.corSecundaria };
    const cssBordaTime = { borderColor: props.corPrimaria };
    //pode escrever assim
    //style={cssTime}

    // ou assim: style={{ backgroundColor: props.corSecundaria }}

    return (
        <section className="time" style={cssTime}>
            <h3 style={cssBordaTime}>{props.nome}</h3>
        </section>
    );
};
