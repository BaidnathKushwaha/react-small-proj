import { useState, useRef, useCallback, useEffect } from "react";

function App() {
  const [length, setLength] = useState(16);
  const [numbers, setNumbers] = useState(false);
  const [characters, setCharacters] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const generatePassword = useCallback(() => {
    let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (numbers) chars += "0123456789";
    if (characters) chars += "!@#$%^&*()_+-={}[]<>?";

    let pass = "";
    for (let i = 0; i < length; i++) {
      const index = Math.floor(Math.random() * chars.length);
      pass += chars[index];
    }
    setPassword(pass);
  }, [length, numbers, characters]); 

  useEffect(() => {
    generatePassword();
  }, [generatePassword]);

  const copyPassword = () => {
    passwordRef.current?.select();
    //passwordRef.current?.setSelectionRange(0,8);
    navigator.clipboard.writeText(password);
  };

  return (
    <div className="w-full h-screen bg-black flex items-start justify-center pt-24">
      <div className="w-[420px] bg-slate-800 rounded-xl p-5 shadow-lg">
        
        {/* Password field */}
        <div className="flex mb-4">
          <input
            ref={passwordRef}
            value={password}
            readOnly
            className="flex-1 px-3 py-2 rounded-l-lg outline-none text-orange-500 font-medium"
          />
          <button
            onClick={copyPassword}
            className="bg-blue-600 px-4 rounded-r-lg text-white font-medium"
          >
            copy
          </button>
        </div>

        {/* Slider */}
        <div className="flex items-center gap-3 mb-3">
          <input
            type="range"
            min={6}
            max={32}
            value={length}
            onChange={(e) => setLength(e.target.value)}
            className="w-full cursor-pointer"
          />
          <span className="text-orange-400 text-sm">
            Length ({length})
          </span>
        </div>

        {/* Options */}
        <div className="flex items-center gap-4 text-orange-400 text-sm">
          <label className="flex items-center gap-1 cursor-pointer">
            <input
              type="checkbox"
              checked={numbers}
              onChange={() => setNumbers((prev) => !prev)}
            />
            Numbers
          </label>

          <label className="flex items-center gap-1 cursor-pointer">
            <input
              type="checkbox"
              checked={characters}
              onChange={() => setCharacters((prev) => !prev)}
            />
            Characters
          </label>
        </div>

      </div>
    </div>
  );
}

export default App;
