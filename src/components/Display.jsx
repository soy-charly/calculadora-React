import './css/Display.module.css';  // Importamos el archivo CSS de Display

export function Display({ value }) {
  return (
    <div className='Display'>
      {value || 0}
    </div>
  );
}
