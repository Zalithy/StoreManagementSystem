import { useEffect, useRef } from "react"
import { Sidebar } from "../Components/Sidebar"
import { Table } from "../Components/Table"
import { Dialog } from "../Components/Dialog"
import { InputBox } from "../Components/InputBox"

const ProductDialog = ({refe}) => {

  return (
    <Dialog reference={refe}>
        <form>
          <InputBox required={true} span="Nombre" inputType="text"/>
          <InputBox currency="$" span="Precio" inputType="number"/>
          <button onClick={() => alert("no")}>si?</button>
        </form>
    </Dialog>
  )
}

export const Products = () => {
  const dialog = useRef<HTMLDialogElement>();
  
  useEffect(() => {
    dialog.current.showModal()
  }, [])

  return (
    <>
      <ProductDialog refe={dialog}/>
      <Sidebar/>
      <main className="container">
        <h1>Productos</h1>
        <button onClick={() => {
          dialog.current.showModal()
        }}>addproduct</button>


        <Table>
          <thead>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Categoria</th>
          </thead>
          
        </Table>
      </main>
    </>
  )
}