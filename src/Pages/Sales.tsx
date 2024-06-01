import { useEffect, useRef, useState } from "react"
import { InputBox } from "../Components/InputBox"
import { Sidebar } from "../Components/Sidebar"
import { Table } from "../Components/Table"
import { useForm } from "react-hook-form"
import { SearchBar } from "../Components/SearchBar"
import { ProductsObject } from "../modules/Products"
import { formatNumber } from "../modules/Utils"
import { useProducts } from "../modules/hooks/get"

interface ProductForm {
  quantity: number,
  id: number,
  name: string,
  price: number
}


export const Sales = () => {
  const {register, handleSubmit, formState: {errors}} = useForm<ProductForm>({});
  const [products, setProducts] = useState<ProductForm[]>([]);
  const data = useProducts();

  function ProductSubmit(data: ProductForm){
    const newProducts = products;

    const repeated = products.filter(obj => obj.name == data.name);
    if(repeated[0]) return;

    newProducts.push(data);
    setProducts(newProducts);
  }

  const [idValue, setIdValue] = useState<number | string>()
  const [priceValue, setPriceValue] = useState<number | string>()
  const [currencyValue, setCurrencyValue] = useState<number | string>(1)
  function searchProductClicked(data: ProductsObject){
    setIdValue(data.id);
    setPriceValue(data.price);
    setCurrencyValue(formatNumber(data.currency == '$' ? 1 : 2));
  }

  return (
    <>
      <Sidebar/>

      <main className="container">
        <h1>Venta</h1>

        <form onSubmit={handleSubmit(ProductSubmit)}>

          <InputBox label="ID" error={errors.name?.message}>
            <input {...register("id", {required: "it's required"})} type="number" value={idValue}/>
          </InputBox>
          
          <InputBox label="Quantity" error={errors.quantity?.message}>
            <input {...register("quantity", {required: "it's required"})} type="number"/>
          </InputBox>

          <InputBox label="Nombre" error={errors.name?.message}>
            <SearchBar data={data} fn={searchProductClicked}>
              <input {...register("name", {required: "it's required"})} type="text" />
            </SearchBar>
          </InputBox>

          <InputBox label="Precio" error={errors.price?.message}>
            <div className='inputCurrency'>
              <select value={currencyValue} style={{marginRight: 5}} onChange={(e) => {
                setCurrencyValue(e.target.value)
              }}>
                <option value="1">$</option>
                <option value="2">Bs.</option>
              </select>

              <input type="number" {...register("price", {
              required: "precio"
              })} value={priceValue} onChange={(e) => setPriceValue(e.target.value)}/>
            </div>
          </InputBox>
          <button>si</button>
        </form>

        <Table headers={['Quantity', 'Nombre', 'Precio', 'Sub Total']}>
          {products ? products.map(p => (
            <tr>
              <td>{p.quantity}</td>
              <td>{p.name}</td>
              <td>{p.price}</td>
              <td>{p.quantity * p.price}</td>
            </tr>
          )): null}
        </Table>

      </main>
    </>
  )
}