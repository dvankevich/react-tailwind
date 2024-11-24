export default function App() {
  function Navbar() {
    return (
      <nav className="bg-blue-500 p-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold text-white">My Website</div>

            <div className="hidden space-x-4 md:flex">
              <a href="#" className="text-white hover:text-gray-300">
                Home
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                About
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                Services
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>
    );
  }
  return (
    <>
      <Navbar />
      <h1 className="text-center text-3xl font-bold text-blue-600 no-underline">
        Hello world!
      </h1>
    </>
  );
}

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
