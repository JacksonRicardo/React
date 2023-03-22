import './ListaSuspensa.css'

const ListaSuspensa = (propos) => {
    console.log(propos.itens)
    return(
        <div className='lista-suspensa'>
            <label>{propos.label}</label>
            <select>
                {propos.itens.map(item => {
                return <option key={item}>{item}</option>})}
            </select>
        </div>
    ) 
}

export default ListaSuspensa