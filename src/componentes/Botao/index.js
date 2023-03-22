import './Botao.css'

const Botao = (props) => {
    return (
        <button className='botao'>
            {props.texto}
            {/*propos.children*/}
        </button>
    )
}

export default Botao