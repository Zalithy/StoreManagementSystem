import { useEffect, useRef } from "react"
import { Sidebar } from "../Components/Sidebar"
import { Table } from "../Components/Table"
import { Dialog } from "../Components/Dialog"
import { InputBox } from "../Components/InputBox"
import { useForm } from "react-hook-form"

interface FormFields {
  name: string;
  price: number;
}

const ProductDialog = ({OpenDialog}) => {
  const { register, handleSubmit, formState: {errors} } = useForm<FormFields>();

  function submit(data){
    console.log(data)
  }
  
  return (
    <Dialog reference={OpenDialog}>
      <h1>Crear Producto</h1>
      <form onSubmit={handleSubmit(submit)}>
        <InputBox label="Nombre:" error={errors.name?.message}>
          <input type="text" {...register("name", {
            required: "It's required",
          })}/>
        </InputBox>
        <InputBox label="Precio" error={errors.price?.message}>
          <input type="number" {...register("price", {
            required: "precio"
          })} />
        </InputBox>
        <button>Submit</button>
      </form>
    </Dialog>
  )
}

export const Products = () => {
  const dialog = useRef<HTMLDialogElement>();
  
  useEffect(() => {
    dialog.current.showModal()
  }, [dialog])

  return (
    <>
      <ProductDialog OpenDialog={dialog}/>
      <Sidebar/>
      <main className="container">
        <h1>Productos</h1>
        <button onClick={() => {dialog.current.showModal()}}>addproduct</button>

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