import { useForm } from "react-hook-form";
import { Dialog } from "../../Components/Dialog";
import { ProductsMethods } from "../../modules/Products";
import { InputBox } from "../../Components/InputBox";
import { CategoryMethods, CategoryObject } from "../../modules/Category";
import { useEffect, useState } from "react";

interface ProductsFields {
  name: string;
  price: number;
  currency: number;
  category: string
}


export const ProductDialog = ({OpenDialog}) => {
  const { register, handleSubmit, formState: {errors} } = useForm<ProductsFields>();
  const [categories, setCategories] = useState<CategoryObject[]>()

  function submit(data: ProductsFields){
    ProductsMethods.addProduct(data.name.toLowerCase(), data.price, data.currency);
    location.reload()
  }

  useEffect(() => {
    async function getCategory(){
      let categories: CategoryObject[] = await CategoryMethods.getCategories()
      setCategories(categories);
    }
    getCategory()
  }, [])
  
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
          <div className='inputCurrency'>
            <select {...register("currency")} style={{marginRight: 5}}>
              <option value="1">$</option>
              <option value="2">Bs.</option>
            </select>
            <input type="number" {...register("price", {
            required: "precio"
            })} />
          </div>
        </InputBox>

        <InputBox label="Categoria" error={errors.price?.message}>
          <select {...register("category", {
            required: "Categoria"
          })}>
            {categories ? categories.map((c) => (
              <option value={c.id}>{c.name}</option>
            )) : null}
          </select>
        </InputBox>

        <button type="submit">Submit</button>
      </form>
    </Dialog>
  )
}

interface CategoryFields {
  name: string;
}

export const CategoryDialog = ({OpenDialog}) => {
  const { register, handleSubmit, formState: {errors} } = useForm<CategoryFields>();
  
  function submit(data: CategoryFields){
    CategoryMethods.addCategory(data.name);
    location.reload()
  }
  
  return (
    <Dialog reference={OpenDialog}>
      <h1>Crear Categoria</h1>

      <form onSubmit={handleSubmit(submit)}>
        <InputBox label="Nombre:" error={errors.name?.message}>
          <input type="text" {...register("name", {
            required: "It's required",
          })}/>
        </InputBox>
        <button>Submit</button>
      </form>
    </Dialog>
  )
}