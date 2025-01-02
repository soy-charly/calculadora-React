import './css/Teclas.module.css';  // Importamos el archivo CSS de Teclas

export function Teclas({ value, onClick }) {
    return (
        <button className="boton" onClick={onClick}>
            {value}
        </button>
    );
}
