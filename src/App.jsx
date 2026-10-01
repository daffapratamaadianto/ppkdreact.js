import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { Peserta } from './components/Peserta'
import DataPeserta from './components/DataPeserta'
import FormPeserta from './components/FormPeserta'

function App() {
  const [listPeserta, setListPeserta] = useState(Peserta)
  const [editPeserta, setEditPeserta] = useState(null)

  const handleSubmit = (dataPeserta) => {

    if (editPeserta) {
      setListPeserta(
        listPeserta.map((item) => (item.id === dataPeserta.id ? dataPeserta : item))
      )
      setEditPeserta(null)
    } else {
      setListPeserta([...listPeserta, dataPeserta])
    }
  }
  const handleHapus = (id) => {
    setListPeserta(listPeserta.filter((item) => item.id !== id));
    if (id === 1) {
      setListPeserta(null);
    }
  }

  return (
    <>
      <FormPeserta onSimpan={handleSubmit} pesertaEdit={editPeserta} key={editPeserta?.id} />
      {/* {map:looping} */}
      {listPeserta.map((item) => (
        <DataPeserta key={item.id} peserta={item} onEdit={setEditPeserta} onHapus={handleHapus} />
      ))}

      {/* {listPeserta.map((item) => {
      <DataPeserta key={item.id} nama={item.nama} jurusan={ClipboardItem.jurusan}/>
    })} */}
    </>
  )


  // const [count, setCount] = useState(0)


  // // ngerubah data menjadi dinamis dengan aksi
  // // getter, setter : count, setCount


  // // function componen dan class component
  // function Peserta({nama, kelas, nilai}) {
  //   return (
  //     <div style={{ border: "1px solid #ccc", padding: "13px", borderRadius: "8px", margin: "8px" }}>
  //       <h3>{nama}</h3>
  //       <p>{kelas}</p>
  //       <p>{nilai}</p>

  //     </div>
  //   )
  // }

  // return (
  //   <>
  //     <Peserta nama="daffa" kelas="webprog" nilai="90" />
  //     <Peserta kelas="dp" kelas="webprog" nilai="90" />
  //     <Peserta nilai="pratama" kelas="webprog" nilai="90" />

  //     <p>total data : {count}</p>
  //     <button onClick={() => setCount (count + 1)}>tambah</button>
  //     <button onClick={() => setCount (count - 1)}>kurang</button>

  //   </>

  // )
  //   <>
  //     <section id="center">
  //       <div className="hero">
  //         <img src={heroImg} className="base" width="170" height="179" alt="" />
  //         <img src={reactLogo} className="framework" alt="React logo" />
  //         <img src={viteLogo} className="vite" alt="Vite logo" />
  //       </div>
  //       <div>
  //         <h1>Get started</h1>
  //         <p>
  //           Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
  //         </p>
  //       </div>
  //       <button
  //         type="button"
  //         className="counter"
  //         onClick={() => setCount((count) => count + 1)}
  //       >
  //         Count is {count}
  //       </button>
  //     </section>

  //     <div className="ticks"></div>

  //     <section id="next-steps">
  //       <div id="docs">
  //         <svg className="icon" role="presentation" aria-hidden="true">
  //           <use href="/icons.svg#documentation-icon"></use>
  //         </svg>
  //         <h2>Documentation</h2>
  //         <p>Your questions, answered</p>
  //         <ul>
  //           <li>
  //             <a href="https://vite.dev/" target="_blank">
  //               <img className="logo" src={viteLogo} alt="" />
  //               Explore Vite
  //             </a>
  //           </li>
  //           <li>
  //             <a href="https://react.dev/" target="_blank">
  //               <img className="button-icon" src={reactLogo} alt="" />
  //               Learn more
  //             </a>
  //           </li>
  //         </ul>
  //       </div>
  //       <div id="social">
  //         <svg className="icon" role="presentation" aria-hidden="true">
  //           <use href="/icons.svg#social-icon"></use>
  //         </svg>
  //         <h2>Connect with us</h2>
  //         <p>Join the Vite community</p>
  //         <ul>
  //           <li>
  //             <a href="https://github.com/vitejs/vite" target="_blank">
  //               <svg
  //                 className="button-icon"
  //                 role="presentation"
  //                 aria-hidden="true"
  //               >
  //                 <use href="/icons.svg#github-icon"></use>
  //               </svg>
  //               GitHub
  //             </a>
  //           </li>
  //           <li>
  //             <a href="https://chat.vite.dev/" target="_blank">
  //               <svg
  //                 className="button-icon"
  //                 role="presentation"
  //                 aria-hidden="true"
  //               >
  //                 <use href="/icons.svg#discord-icon"></use>
  //               </svg>
  //               Discord
  //             </a>
  //           </li>
  //           <li>
  //             <a href="https://x.com/vite_js" target="_blank">
  //               <svg
  //                 className="button-icon"
  //                 role="presentation"
  //                 aria-hidden="true"
  //               >
  //                 <use href="/icons.svg#x-icon"></use>
  //               </svg>
  //               X.com
  //             </a>
  //           </li>
  //           <li>
  //             <a href="https://bsky.app/profile/vite.dev" target="_blank">
  //               <svg
  //                 className="button-icon"
  //                 role="presentation"
  //                 aria-hidden="true"
  //               >
  //                 <use href="/icons.svg#bluesky-icon"></use>
  //               </svg>
  //               Bluesky
  //             </a>
  //           </li>
  //         </ul>
  //       </div>
  //     </section>

  //     <div className="ticks"></div>
  //     <section id="spacer"></section>
  //   </>
  // )
}

export default App
