import './ListaSuspensa.css'

const ListaSuspensa = (propos) => {
    return(
        <div className='lista-suspensa'>
            <label>{propos.label}</label>
            <select onChange={evento =>propos.aoAlterado(evento.target.value)} required={propos.required} value={propos.value}>
                {propos.itens.map(item => {
                return <option key={item}>{item}</option>})}
            </select>
        </div>
    ) 
}

export default ListaSuspensa