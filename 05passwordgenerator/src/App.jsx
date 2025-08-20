import { useState, useCallback, useEffect } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // Generate password
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$^&*[]{}`~+=_-";

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  // Generate password when options change
  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  // Copy to clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    alert("Password copied!");
  };

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-6 py-6 my-8 text-orange-500 bg-gray-700">
        <h1 className="text-white text-center text-xl font-semibold mb-6">
          🔑 Password Generator
        </h1>

        {/* Password Box + Copy */}
        <div className="flex shadow rounded-lg overflow-hidden mb-6">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-2 px-3 bg-white text-black"
            placeholder="password"
            readOnly
          />
          <button
            onClick={copyToClipboard}
            className="bg-blue-600 hover:bg-blue-700 active:scale-95 transition text-white font-medium px-4"
          >
            Copy
          </button>
        </div>

        {/* Options */}
        <div className="flex flex-col gap-y-4 text-sm">
          {/* Length Slider */}
          <div className="flex items-center gap-x-3">
            <label className="text-white font-medium">Length:</label>
            <input
              type="range"
              min={6}
              max={30}
              value={length}
              className="cursor-pointer accent-orange-500"
              onChange={(e) => setLength(Number(e.target.value))}
            />
            <span className="text-white font-semibold">{length}</span>
          </div>

          {/* Checkboxes in a row */}
          <div className="flex items-center gap-x-6">
            <label className="flex items-center gap-x-2 text-white">
              <input
                type="checkbox"
                checked={numberAllowed}
                id="numberInput"
                onChange={() => setNumberAllowed((prev) => !prev)}
                className="w-4 h-4 accent-orange-500"
              />
              Numbers
            </label>

            <label className="flex items-center gap-x-2 text-white">
              <input
                type="checkbox"
                checked={charAllowed}
                id="charInput"
                onChange={() => setCharAllowed((prev) => !prev)}
                className="w-4 h-4 accent-orange-500"
              />
              Special Characters
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
