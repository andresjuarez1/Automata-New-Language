import React, { useState } from "react";
import { Header, SideBar, Files } from "./components";
import PlayIcon from "./assets/play-icon.svg"
import DeleteIcon from "./assets/delete-icon.svg"

const patterns = [
  { type: "num", regex: /^num [a-zA-Z_]\w*(\s*=\s*\d+);|^num [a-zA-Z_]\w*;/ },
  {
    type: "float",
    regex: /^float [a-zA-Z_]\w*(\s*=\s*[\d.]+);|^float [a-zA-Z_]\w*;/,
  },
  {
    type: "string",
    regex: /^string [a-zA-Z_]\w*;|^string [a-zA-Z_]\w*\s*=\s*"[^"]+";/,
  },
  {
    type: "function",
    regex:
      /^function [a-zA-Z_]\w*\(([^)]*(num|float|string)),([^)]*(num|float|string))\)\s*:\s*(num|float|string)\s*{([^}]+)}/,
  },
  {
    type: "whileLoop",
    regex:
      /^while\s*\(\s*(num|float|string)\s+[a-zA-Z_]\w*\s*(<|>|<=|>=|==)\s*\d+\s*\)\s*{/,
  },
  {
    type: "forLoop",
    regex:
      /^for\s*\((num)\s+[a-zA-Z_]\w*\s*=\s*\d+;\s*[a-zA-Z_]\w*\s*(<|>|<=|>=|==)\s*\d+;\s*[a-zA-Z_]\w*\+\+?\)\s*{/,
  },
  {
    type: "ifStatement",
    regex:
      /^if\s*\(\s*[a-zA-Z_]\w*\s*(==|>=|<=|<|>)\s*[1-9]+\s*\)\s*{\s*}(else)\s*{\s*}/,
  },
];

function App() {
  const [code, setCode] = useState("");
  const [parsedVariables, setParsedVariables] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  const parseVariableDeclaration = () => {
    const lines = code.trim().split("\n");
    for (const line of lines) {
      let trimmedLine = line.trim();
      let foundMatchingPattern = false;

      for (const pattern of patterns) {
        const match = trimmedLine.match(pattern.regex);
        if (match) {
          foundMatchingPattern = true;
          if (pattern.type === "whileLoop") {
            setParsedVariables((prevParsedVariables) => [
              ...prevParsedVariables,
              "Ciclo while detectado",
            ]);
            break;
          } else if (pattern.type === "ifStatement") {
            setParsedVariables((prevParsedVariables) => [
              ...prevParsedVariables,
              "Estructura if detectada",
            ]);
            break;
          } else if (pattern.type === "forLoop") {
            setParsedVariables((prevParsedVariables) => [
              ...prevParsedVariables,
              "Ciclo for detectado",
            ]);
            break;
          } else if (pattern.type === "function") {
            const functionName = match[0].match(/function ([a-zA-Z_]\w*)/)[1];
            setParsedVariables((prevParsedVariables) => [
              ...prevParsedVariables,
              `Function: ${functionName}`,
            ]);
          } else {
            const variableDeclaration = match[0];
            setParsedVariables((prevParsedVariables) => [
              ...prevParsedVariables,
              variableDeclaration,
            ]);
          }
          trimmedLine = trimmedLine.substring(match[0].length).trim();
        }
      }

      if (!foundMatchingPattern && trimmedLine) {
        setErrorMessage(`Error en la escritura del código: "${trimmedLine}"`);
        return;
      }
    }
  };

  const clearErrorMessage = () => {
    setErrorMessage(null);
  };
  return (
    <div className="h-screen">
      <Header />
      <div className="flex">
        <SideBar />
        <Files />
        <div className="w-full h-full">
          <div className="flex">
            <div className="h-9 w-36 flex items-center px-3 justify-between text-[#FFFFFF] text-xs font-medium border-r-[1px] border-[#cccccc33]">
              <div className="flex gap-2">
                <h3 className=" text-[#C9F3BA]">KS</h3>
                <h2>index.ks</h2>
              </div>
              <img src={DeleteIcon} alt="Delete icon" />
            </div>
            <div className=" flex-1 border-b-[1px] border-[#cccccc33]"></div>
          </div>
          <textarea
            className="px-4 py-6 w-full resize-none border-0 p-0 m-0 outline-none overflow-auto font-inherit text-[#FAFAFA] bg-transparent text-sm font-normal"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="|"
            rows="5"
          ></textarea>
          <button
            className="fixed top-2 right-2 text-white"
            onClick={parseVariableDeclaration}
          >
            <img src={PlayIcon} alt="Play Icon" className="h-6"/>
          </button>
          <div className="px-4 py-6 absolute border-solid border-t-[1px] border-[#cccccc33] bottom-0 w-[1130px]">
            <h3 className="text-xs font-semibold text-[#FFFFFF]">
              CORRECTAS
            </h3>
            <div className="h-[1.2px] bg-[#C9F3BA] mt-2 w-[66px] mb-4"></div>
            <ul className="text-xs text-[#CCCCCC]">
              {parsedVariables.map((variable, index) => (
                <li key={index} className="mb-2">{variable}</li>
              ))}
            </ul>
          </div>
          {errorMessage && (
            <div className="fixed inset-0 flex items-center justify-center z-50">
              <div className="bg-[#FEFEFE] border-l-4 border-[#C9F3BA] text-[#101010] p-4 rounded shadow-md flex flex-col">
                <div className="mb-3">{errorMessage}</div>
                <button
                  onClick={clearErrorMessage}
                  className="bg-[#C9F3BA] hover-bg-blue-700 p-2 rounded text-[#101010]"
                >
                  Cerrar
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
