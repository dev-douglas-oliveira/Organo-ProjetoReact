import "./Formulario.css";
import CampoTexto from "../CampoTexto/index.js";
import ListaSuspensa from "../ListaSuspensa/index";

export const Formulario = () => {
    const times = [
        "Programação",
        "Front-End",
        "Data Science",
        "DevOps",
        "UX e Design",
        "Mobile",
        "inovação e Gestão",
    ];
    return (
        <section className="formulario">
            <form>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <CampoTexto label="Nome" placeholder="Digite seu nome" />
                <CampoTexto label="Cargo" placeholder="Digite seu cargo" />
                <CampoTexto
                    label="Imagem"
                    placeholder="Informe o endereço da imagem"
                />
                <ListaSuspensa label="Time" itens={times} />
            </form>
        </section>
    );
};
