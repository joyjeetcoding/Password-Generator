import { useCallback, useEffect, useRef, useState } from "react";

function App() {

  const [length, setLength] = useState(9);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [upperCase, setUppercase] = useState(false);
  const [lowerCase, setLowercase] = useState(false);

  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "";

    if(numberAllowed) {
      str += "0123456789"
    }

    if(upperCase) {
      str += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    }

    if(lowerCase) {
      str += "abcdefghijklmnopqrstuvwxyz"
    }

    if(charAllowed) {
      str += "~`!@#$%^&*_-+="
    }

    for(let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)

      pass += str.charAt(char);
    }
    console.log(pass)
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, upperCase, lowerCase, setPassword])

  // useEffect(() => {
  //   passwordGenerator()
  // }, [length, numberAllowed, charAllowed, upperCase, lowerCase, passwordGenerator])

  const copyPasswordtoClipboard = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 100)
    window.navigator.clipboard.writeText(password)
  }, [password])

  return (
    <div className="w-screen h-screen relative">
      <h1 className="text-center text-3xl font-extrabold text-white tracking-wider uppercase font-writing">
        Password Generator
      </h1>
      <div className="absolute top-[50%] bottom-0 left-[50%] -translate-x-1/2 -translate-y-1/2 bg-white bg-opacity-20 backdrop-filter backdrop-blur-md p-5 rounded-md font-rest font-bold ">
        <div className="h-full flex flex-col justify-between">
          <div className="flex flex-row">
            <input
              type="text"
              value={password}
              placeholder="ClIcK oN gEnErAtE"
              className="outline-none p-2 rounded-lg"
              ref={passwordRef}
              readOnly
            />
            <button 
            className="p-1 px-2 rounded-lg mx-1 font-semibold bg-blue-500 text-white"
            onClick={copyPasswordtoClipboard}
            >
              Copy
            </button>
          </div>
          <div className="checkboxes flex justify-between py-3 text-white font-semibold">
            <div className="flex flex-col ">
              <div className="pb-2">
                <input type="checkbox"
                onChange={() => {
                  setUppercase((prev) => !prev)
                }}
                className="mx-1" />
                <label>UpperCase</label>
              </div>
              <div className="pb-2">
                <input type="checkbox"
                onChange={() => {
                  setLowercase((prev) => !prev)
                }}
                className="mx-1" />
                <label>LowerCase</label>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="pb-2">
                <input type="checkbox"
                onChange={() => {
                  setNumberAllowed((prev) => !prev)
                }}
                className="mx-1" />
                <label>Numbers</label>
              </div>
              <div className="pb-2">
                <input type="checkbox"
                defaultChecked={charAllowed}
                onChange={() => {
                  setCharAllowed((prev) => !prev)
                }}
                className="mx-1" />
                <label>Special Characters</label>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <input
             type="range"
             className="cursor-pointer w-full"
             min={6}
             max={100}
             value={length}
             onChange={(e) => setLength(e.target.value)}
             />
             <label className="text-center text-white">Length: {length}</label>
          </div>
          <div className="w-full flex justify-center">
            <button 
            className="p-2 px-2 rounded-lg mx-1  font-semibold bg-blue-500 text-white"
            onClick={passwordGenerator}
            >Generate</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
