import "./Formulario.css";
import Campo from "../Campo";
import ListaSuspensa from "../ListaSuspensa";
import Botao from "../Botao";
import { useState } from "react";

export const Formulario = (props) => {
    const [nome, setNome] = useState("");
    const [cargo, setCargo] = useState("");
    const [imagem, setImagem] = useState("");
    const [time, setTime] = useState("");
    const [nomeTime, setNomeTime] = useState("");
    const [corTime, setCorTime] = useState("");

    //CRIAR CARD DO COLABORADOR
    const aoSalvar = (evento) => {
        evento.preventDefault();
        // console.log("Form foi submetido =>", nome, cargo, imagem, time);
        props.aoCadastrar({ nome, cargo, imagem, time });
        setNome(""); //após dar o submit, limpa o campo
        setCargo(""); //após dar o submit, limpa o campo
        setImagem(""); //após dar o submit, limpa o campo
        setTime(""); //após dar o submit, limpa o campo
    };

    //CRIAR NOVO TIME
    const aoCriarTime = (evento) => {
        evento.preventDefault();
        props.aoCadastrarTime({ nome: nomeTime, cor: corTime });
        setNomeTime("");
        setCorTime("");
    };

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <Campo
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite seu nome"
                    valor={nome}
                    aoAlterado={(valor) => setNome(valor)}
                />
                <Campo
                    obrigatorio={true}
                    label="Cargo"
                    placeholder="Digite seu cargo"
                    valor={cargo}
                    aoAlterado={(valor) => setCargo(valor)}
                />
                <Campo
                    label="Imagem"
                    type="url"
                    placeholder="Informe o endereço da imagem"
                    valor={imagem}
                    aoAlterado={(valor) => setImagem(valor)}
                />
                <ListaSuspensa
                    obrigatorio={true}
                    label="Time"
                    itens={props.nomeDosTimes}
                    valor={time}
                    aoAlterado={(valor) => setTime(valor)}
                />
                <Botao>Criar Card</Botao>
            </form>

            <form onSubmit={aoCriarTime}>
                <h2>Preencha os dados para criar um novo time.</h2>
                <Campo
                    obrigatorio
                    label="Time"
                    placeholder="Digite o nome do time"
                    valor={nomeTime}
                    aoAlterado={(valor) => setNomeTime(valor)}
                />
                <Campo
                    obrigatorio
                    type="color"
                    label="Cor"
                    placeholder="Digite a cor do time"
                    valor={corTime}
                    aoAlterado={(valor) => setCorTime(valor)}
                />
                <Botao>Criar Novo Time</Botao>
            </form>
        </section>
    );
};
