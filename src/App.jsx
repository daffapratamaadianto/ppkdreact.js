import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
// import { Peserta } from './components/Peserta'
// import DataPeserta from './components/DataPeserta'
// import FormPeserta from './components/FormPeserta'

import Login from "./pages/Login";
import Dashboard from './pages/Dashboard'
import MainLayout from './pages/MainLayout'
import ListUser from './pages/user/ListUser'
import CategoryPage from './pages/Category/CategoryPage'
import ProductPage from './pages/Product/ProductPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />}></Route>
        <Route element={<MainLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/user" element={<ListUser />} />
          <Route path="/Category" element={<CategoryPage />} />
          <Route path="/product" element={<ProductPage />} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
  // const [listPeserta, setListPeserta] = useState(Peserta)
  // const [editPeserta, setEditPeserta] = useState(null)

  // const handleSubmit = (dataPeserta) => {

  //   if (editPeserta) {
  //     setListPeserta(
  //       listPeserta.map((item) => (item.id === dataPeserta.id ? dataPeserta : item))
  //     )
  //     setEditPeserta(null)
  //   } else {
  //     setListPeserta([...listPeserta, dataPeserta])
  //   }
  // }
  // const handleHapus = (id) => {
  //   setListPeserta(listPeserta.filter((item) => item.id !== id));
  //   if (id === 1) {
  //     setListPeserta(null);
  //   }
  // }

  // return (
  //   <>
  //     <FormPeserta onSimpan={handleSubmit} pesertaEdit={editPeserta} key={editPeserta?.id} />
  //     {/* {map:looping} */}
  //     {listPeserta.map((item) => (
  //       <DataPeserta key={item.id} peserta={item} onEdit={setEditPeserta} onHapus={handleHapus} />
  //     ))}

  //     {/* {listPeserta.map((item) => {
  //     <DataPeserta key={item.id} nama={item.nama} jurusan={ClipboardItem.jurusan}/>
  //   })} */}
  //   </>
  // )



}

export default App
