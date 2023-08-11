import { getValue } from '@testing-library/user-event/dist/utils'
import './CampoTexto.css'

const CampoTexto = (props) => {
    const placeholderModificada = `${props.placeholder}...`;
        
    return (
        
        <div className="campo-texto">
            <label>
                {props.label}
            </label>
            <input placeholder={placeholderModificada}/>
        </div>
    )
}

export default CampoTexto