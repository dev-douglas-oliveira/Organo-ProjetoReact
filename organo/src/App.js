import { useState } from "react";
import { v4 as uuidv4 } from "uuid"; //para criar um id unico para cada elemento
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Time from "./componentes/Time";
import Rodape from "./componentes/Rodape";

function App() {
    //TIMES
    const [times, setTimes] = useState([
        {
            id: uuidv4(),
            nome: "Programação",
            cor: "#57C278",
        },
        {
            id: uuidv4(),
            nome: "Front-End",
            cor: "#82CFFA",
        },
        {
            id: uuidv4(),
            nome: "Data Sciense",
            cor: "#A6D157",
        },
        {
            id: uuidv4(),
            nome: "Devops",
            cor: "#E06B69",
        },
        {
            id: uuidv4(),
            nome: "UX e Design",
            cor: "#D86EBF",
        },
        {
            id: uuidv4(),
            nome: "Mobile",
            cor: "#FEBA05",
        },
        {
            id: uuidv4(),
            nome: "Inovação e Gestão",
            cor: "#FF8A29",
        },
    ]);
    // const [timesList, setTimesList] = useState(times); // transformando a lista de times em uma state

    //COLABORADORES INICIAL
    const inicial = [
        {
            id: uuidv4(),
            nome: "JULIANA AMOASEI",
            cargo: "Desenvolvedora de software e instrutora",
            imagem: "https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg",
            time: times[0].nome,
        },
        {
            id: uuidv4(),
            nome: "DANIEL ARTINE",
            cargo: "Engenheiro de Software na Stone Age",
            imagem: "https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg",
            time: times[0].nome,
        },
        {
            id: uuidv4(),
            nome: "GUILHERME LIMA",
            cargo: "Desenvolvedor Python e JavaScript na Alura",
            imagem: "	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg",
            time: times[0].nome,
        },
        {
            id: uuidv4(),
            nome: "PAULO SILVEIRA",
            cargo: "Hipster e CEO da Alura",
            imagem: "https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg",
            time: times[0].nome,
        },
        {
            id: uuidv4(),
            nome: "JULIANA AMOASEI",
            cargo: "Desenvolvedora de software e instrutora",
            imagem: "https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg",
            time: times[1].nome,
        },
        {
            id: uuidv4(),
            nome: "DANIEL ARTINE",
            cargo: "Engenheiro de Software na Stone Age",
            imagem: "https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg",
            time: times[1].nome,
        },
        {
            id: uuidv4(),
            nome: "GUILHERME LIMA",
            cargo: "Desenvolvedor Python e JavaScript na Alura",
            imagem: "	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg",
            time: times[1].nome,
        },
        {
            id: uuidv4(),
            nome: "PAULO SILVEIRA",
            cargo: "Hipster e CEO da Alura",
            imagem: "https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg",
            time: times[1].nome,
        },
        {
            id: uuidv4(),
            nome: "JULIANA AMOASEI",
            cargo: "Desenvolvedora de software e instrutora",
            imagem: "https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg",
            time: times[2].nome,
        },
        {
            id: uuidv4(),
            nome: "DANIEL ARTINE",
            cargo: "Engenheiro de Software na Stone Age",
            imagem: "https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg",
            time: times[2].nome,
        },
        {
            id: uuidv4(),
            nome: "GUILHERME LIMA",
            cargo: "Desenvolvedor Python e JavaScript na Alura",
            imagem: "	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg",
            time: times[2].nome,
        },
        {
            id: uuidv4(),
            nome: "PAULO SILVEIRA",
            cargo: "Hipster e CEO da Alura",
            imagem: "https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg",
            time: times[2].nome,
        },
        {
            id: uuidv4(),
            nome: "JULIANA AMOASEI",
            cargo: "Desenvolvedora de software e instrutora",
            imagem: "https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg",
            time: times[3].nome,
        },
        {
            id: uuidv4(),
            nome: "DANIEL ARTINE",
            cargo: "Engenheiro de Software na Stone Age",
            imagem: "https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg",
            time: times[3].nome,
        },
        {
            id: uuidv4(),
            nome: "GUILHERME LIMA",
            cargo: "Desenvolvedor Python e JavaScript na Alura",
            imagem: "	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg",
            time: times[3].nome,
        },
        {
            id: uuidv4(),
            nome: "PAULO SILVEIRA",
            cargo: "Hipster e CEO da Alura",
            imagem: "https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg",
            time: times[3].nome,
        },
        {
            id: uuidv4(),
            nome: "JULIANA AMOASEI",
            cargo: "Desenvolvedora de software e instrutora",
            imagem: "https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg",
            time: times[4].nome,
        },
        {
            id: uuidv4(),
            nome: "DANIEL ARTINE",
            cargo: "Engenheiro de Software na Stone Age",
            imagem: "https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg",
            time: times[4].nome,
        },
        {
            id: uuidv4(),
            nome: "GUILHERME LIMA",
            cargo: "Desenvolvedor Python e JavaScript na Alura",
            imagem: "	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg",
            time: times[4].nome,
        },
        {
            id: uuidv4(),
            nome: "PAULO SILVEIRA",
            cargo: "Hipster e CEO da Alura",
            imagem: "https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg",
            time: times[4].nome,
        },
        {
            id: uuidv4(),
            nome: "JULIANA AMOASEI",
            cargo: "Desenvolvedora de software e instrutora",
            imagem: "https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg",
            time: times[5].nome,
        },
        {
            id: uuidv4(),
            nome: "DANIEL ARTINE",
            cargo: "Engenheiro de Software na Stone Age",
            imagem: "https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg",
            time: times[5].nome,
        },
        {
            id: uuidv4(),
            nome: "GUILHERME LIMA",
            cargo: "Desenvolvedor Python e JavaScript na Alura",
            imagem: "	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg",
            time: times[5].nome,
        },
        {
            id: uuidv4(),
            nome: "PAULO SILVEIRA",
            cargo: "Hipster e CEO da Alura",
            imagem: "https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg",
            time: times[5].nome,
        },
        {
            id: uuidv4(),
            nome: "JULIANA AMOASEI",
            cargo: "Desenvolvedora de software e instrutora",
            imagem: "https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg",
            time: times[6].nome,
        },
        {
            id: uuidv4(),
            nome: "DANIEL ARTINE",
            cargo: "Engenheiro de Software na Stone Age",
            imagem: "https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg",
            time: times[6].nome,
        },
        {
            id: uuidv4(),
            nome: "GUILHERME LIMA",
            cargo: "Desenvolvedor Python e JavaScript na Alura",
            imagem: "	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg",
            time: times[6].nome,
        },
        {
            id: uuidv4(),
            nome: "PAULO SILVEIRA",
            cargo: "Hipster e CEO da Alura",
            imagem: "https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg",
            time: times[6].nome,
        },
    ];

    //INICIA APP COM LISTA INICIAL DE COLABORADORES
    const [colaboradores, setColaboradores] = useState(inicial);

    //FUNÇÃO PARA DELETAR COLABORADOR
    function deletarColaborador(id) {
        const colaborador = colaboradores.find(
            (colaborador) => colaborador.id === id
        );
        confirmAlert({
            title: "Excluir colaborador",
            message: `Tem certeza que deseja excluir o colaborador ${colaborador.nome} do time de ${colaborador.time}?`,
            buttons: [
                {
                    label: "Sim",
                    onClick: () => {
                        setColaboradores(
                            colaboradores.filter(
                                (colaborador) => colaborador.id !== id
                            )
                        );
                    },
                },
                {
                    label: "Cancelar",
                    onClick: () => {},
                },
            ],
        });
    }

    //FUNÇÃO PARA MUDAR COR DO TIME
    function mudarCorDoTime(cor, id) {
        setTimes(
            times.map((time) => {
                if (time.id === id) {
                    time.cor = cor;
                }
                return time;
            })
        );
    }

    //FUNÇÃO PARA CADASTRAR TIME
    function cadastrarTime(novoTime) {
        setTimes([...times, { ...novoTime, id: uuidv4() }]);
    }

    return (
        <div className="App">
            <Banner />
            <Formulario
                aoCadastrarTime={cadastrarTime}
                nomeDosTimes={times.map((time) => time.nome)}
                aoCadastrar={(colaborador) =>
                    setColaboradores([...colaboradores, colaborador])
                }
            />
            <section>
                <h1 className="titulo-time">Minha Organização</h1>
                {times.map((time, indice) => (
                    <Time
                        mudarCor={mudarCorDoTime}
                        nome={time.nome}
                        key={indice}
                        id={time.id}
                        cor={time.cor}
                        // corPrimaria={time.corPrimaria}
                        // corSecundaria={time.corSecundaria}
                        colaboradores={colaboradores.filter(
                            (colaborador) => colaborador.time === time.nome
                        )}
                        aoDeletar={deletarColaborador}
                    />
                ))}
            </section>
            <Rodape />
        </div>
    );
}

export default App;
