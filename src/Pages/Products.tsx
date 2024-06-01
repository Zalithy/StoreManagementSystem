import { useEffect, useRef, useState } from "react"
import { Sidebar } from "../Components/Sidebar"
import { Table } from "../Components/Table"
import { ProductsMethods, ProductsObject } from "../modules/Products"
import { CategoryDialog, ProductDialog } from "./Dialogs/ProductsD"
import { useProducts } from "../modules/hooks/get"




export const Products = () => {
  const productRef = useRef<HTMLDialogElement>();
  const categoryRef = useRef<HTMLDialogElement>();
  const products = useProducts();

  return (
    <>
      <ProductDialog OpenDialog={productRef}/>
      <CategoryDialog OpenDialog={categoryRef}/>
      <Sidebar/>
      <main className="container">
        <h1>Productos</h1>
        <button onClick={() => {productRef.current.showModal()}}>Producto</button>
        <button onClick={() => {categoryRef.current.showModal()}}>Categoria</button>
        <Table headers={["Nombre", "Precio", "Category", "Spain"]}>
            {
              products ? 
              products.map((product) => (
                <tr key={product.id}>
                  <td>{product.name}</td>
                  <td>{product.price} {product.currency}</td>
                  <td>{product.categoryName}</td>
                </tr>
              ))
              : <h1>Not</h1>
            }
        </Table>
      </main>
    </>
  )
}