import React, { useState } from "react";
import "./App.css"; // Importamos el archivo CSS de App
import { Teclas } from "./components/Teclas.jsx";
import { Display } from "./components/Display.jsx";

function App() {
  const [operationSign, setOperationSign] = useState("+");
  const [n1, setN1] = useState(0);
  const [n2, setN2] = useState(0);
  const [cont, setcont] = useState(0);
  const [displayValue, setDisplayValue] = useState("0");

  const handleOperationClick = (sign) => {
    setOperationSign(sign);
    setDisplayValue(`${n1} ${sign}`);
    setcont(1);
  };
  const clear = () => {
    setN1(0);
    setN2(0);
    setOperationSign("+");
    setDisplayValue("0");
    setcont(0);
  };
  const setNumero = (value) => {
    if (cont === 0) {
      setN1(value);
      setDisplayValue(value);
    } else {
      setN2(value);
      setDisplayValue(`${n1} ${operationSign} ${value}`);
    }
  };

  const handleIgual = () => {
    let resultado = `${n1} ${operationSign} ${n2}`;
    resultado = eval(resultado);
    setDisplayValue(resultado);
  };

  return (
    <React.Fragment>
      <div className="calculadora">
        <div className="pantalla">
          <Display value={displayValue} />
        </div>
        <div className="botones">
          <Teclas value={1} onClick={() => setNumero(1)} />
          <Teclas value={2} onClick={() => setNumero(2)} />
          <Teclas value={3} onClick={() => setNumero(3)} />
          <Teclas value={4} onClick={() => setNumero(4)} />
          <Teclas value={5} onClick={() => setNumero(5)} />
          <Teclas value={6} onClick={() => setNumero(6)} />
          <Teclas value={7} onClick={() => setNumero(7)} />
          <Teclas value={8} onClick={() => setNumero(8)} />
          <Teclas value={9} onClick={() => setNumero(9)} />
          <Teclas value={0} onClick={() => setNumero(0)} />
        </div>
        <div className="operaciones">
          <Teclas value="+" onClick={() => handleOperationClick("+")} />
          <Teclas value="-" onClick={() => handleOperationClick("-")} />
          <Teclas value="×" onClick={() => handleOperationClick("*")} />
          <Teclas value="÷" onClick={() => handleOperationClick("/")} />
          <Teclas value="=" onClick={() => handleIgual()} />
          <Teclas value="C" onClick={() => clear()} />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
