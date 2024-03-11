import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState<any>(10)
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  //useRef hook
  const passwordRef = useRef<HTMLInputElement>(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char) 
    }
    setPassword(pass)

  }, [length, numberAllowed, charAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <div className="flex justify-center items-center flex-col w-full">
      <div className="flex justify-center p-4 w-1/2 bg-gray-700">
        <input type="text" className="w-3/4 p-2 border-none focus:outline-none" value={password} ref={passwordRef}/>
        <button className="w-1/4 text-white bg-blue-500 p-2" onClick={copyPasswordToClipboard}>copy</button>
      </div>
      <div className="flex justify-around p-4 gap-6 w-1/2 bg-gray-700">
        <div className="flex gap-2">
          <input name="length" type="range" min={0} max={100} value={length} onChange={(e)=> setLength(e.target.value)}/> 
          <p className="text-white text-10">{length}</p>
          <label htmlFor="length" className="text-white">Length</label>
        </div>
        <div className="flex gap-2">
          <input name="number" type="checkbox" onChange={()=> setNumberAllowed((prev)=> !prev)}/>
          <label htmlFor="number" className="text-white">Numbers</label>
        </div>
        <div className="flex gap-2">
          <input name="characters" type="checkbox" onChange={()=> setCharAllowed((prev)=> !prev)}/>
          <label htmlFor="characters" className="text-white">Characters</label>
        </div>

      </div>

    </div>
  );
}

export default App;
