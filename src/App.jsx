import { useState } from "react";

function App() {
  return (
    <div className="w-screen h-screen relative">
      <h1 className="text-center text-3xl font-extrabold text-white tracking-wider uppercase">
        Password Generator
      </h1>
      <div className="absolute top-[50%] bottom-0 left-[50%] -translate-x-1/2 -translate-y-1/2 bg-white bg-opacity-20 backdrop-filter backdrop-blur-md p-5 rounded-md">
        <div className="">
          <div className="flex flex-row">
            <input
              type="text"
              placeholder="ClIcK oN gEnErAtE"
              className="outline-none p-2 rounded-lg"
              readOnly
            />
            <button className="p-1 px-2 rounded-lg mx-1 font-semibold bg-blue-500 text-white">
              Copy
            </button>
          </div>
          <div className="checkboxes flex justify-between py-3 text-white font-semibold">
            <div className="flex flex-col ">
              <div className="pb-2">
                <input type="checkbox" className="mx-1" />
                <label>UpperCase</label>
              </div>
              <div className="pb-2">
                <input type="checkbox" className="mx-1" />
                <label>LowerCase</label>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="pb-2">
                <input type="checkbox" className="mx-1" />
                <label>Numbers</label>
              </div>
              <div className="pb-2">
                <input type="checkbox" className="mx-1" />
                <label>Special Characters</label>
              </div>
            </div>
          </div>
          <div>
            <input
             type="range"
             className="cursor-pointer w-full"
             min={6}
             max={100}
             />
             <p className="text-center text-white">Length:</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
