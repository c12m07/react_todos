import React, { useState } from "react";
import './App.css'

function App() {
  const [gastos, setGastos] = useState([1500, 300, 450]);

  return (
    <>
      <Contador gastos={gastos} />
      <GastosMes gastos={gastos} />
      <AgregarGasto setGastos={setGastos} />
    </>
  );
}

function Contador({gastos}) {
  let result = gastos.map(Number),
    sum = result.reduce((a, b) => (a += b));

  return (
    <div className="Title"> 
      Gasto mensual: <span>{sum}</span>
    </div>
  );
}

function GastosMes({ gastos }) {
  return (
    <ul className="List">
      {gastos.map((gasto, i) => (
        <li key={i}>{gasto}</li>
      ))}
    </ul>
  );
}

function AgregarGasto({ setGastos }) {
  function handleSubmit(event) {
    event.preventDefault();
    const gasto = event.target.elements.gasto.value;
    setGastos((prevGastos) => [...prevGastos, gasto]);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input autoComplete="off" type="text" id="gasto" />
      <button type="Submit" id="btn"> Agregar gasto </button>
    </form>
  );
}

export default App;
