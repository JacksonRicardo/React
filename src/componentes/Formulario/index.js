import Botao from '../Botao';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import './Formulario.css';

const Formulario = () => {
    const times =[
        'Programação',
        'Redes de Computadores', 
        'Data Science',
        'Devops',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ]

    return (
        <section className="formulario">
            <form>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto label="Nome" placeholder="Digite seu nome"/>
                <CampoTexto label="Cargo" placeholder="Digite seu cargo"/>
                <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem"/>
                <ListaSuspensa label="Time" itens={times}/>
                <Botao texto="Criar Card"/>

                {/*O botão também pode ser feito de herança de filhos para 
                serem utilizados outros tipos de formatos, como texto e imagens:
                <Botao>
                    Criar Card
                </Botao>
                */}

            </form>
        </section>
    )
}

export default Formulario