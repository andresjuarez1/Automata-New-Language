import React, { useState } from 'react';

const patterns = [
  { type: 'num', regex: /^num [a-zA-Z_]\w*(\s*=\s*\d+);|^num [a-zA-Z_]\w*;/ },
  { type: 'float', regex: /^float [a-zA-Z_]\w*(\s*=\s*[\d.]+);|^float [a-zA-Z_]\w*;/ },
  { type: 'string', regex: /^string [a-zA-Z_]\w*;|^string [a-zA-Z_]\w*="[^"]+";/ },
];

function App() {
  const [code, setCode] = useState('');
  const [parsedVariables, setParsedVariables] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  const parseVariableDeclaration = () => {
    const lines = code.trim().split('\n');
  
    for (const line of lines) {
      let trimmedLine = line.trim();
      for (const pattern of patterns) {
        const match = trimmedLine.match(pattern.regex);
        if (match) {
          const variableDeclaration = match[0];
          setParsedVariables((prevParsedVariables) => [...prevParsedVariables, variableDeclaration]);
          trimmedLine = trimmedLine.substring(variableDeclaration.length).trim();
        }
      }
      if (trimmedLine) {
        setErrorMessage(`Hay un error en la escritura del código. Revise: "${trimmedLine}"`);
        return;
      }
    }
  };

  const clearErrorMessage = () => {
    setErrorMessage(null);
  };


  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">COBOLTSCRIPT</h1>
      <textarea
        className="border p-2 rounded-md w-full"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Ingresa las declaraciones de variables aquí..."
        rows="5"
      ></textarea>
      <button
        className="mt-4 bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
        onClick={parseVariableDeclaration}
      >
        Analizar
      </button>
      <div className="mt-4">
        <h3 className="text-xl font-semibold">Escrituras Correctas:</h3>
        <ul className="list-disc pl-6">
          {parsedVariables.map((variable, index) => (
            <li key={index}>{variable}</li>
          ))}
        </ul>
      </div>
      {errorMessage && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-red-200 border-l-4 border-red-500 text-red-700 p-4 rounded shadow-md flex flex-col">
            <div>{errorMessage}</div>
            <button onClick={clearErrorMessage} className='bg-blue-500 hover:bg-blue-700 p-2 rounded text-white'>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
