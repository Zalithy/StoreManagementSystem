import { useEffect, useState } from 'react';
import { Sidebar } from '../Components/Sidebar'
import {useForm} from 'react-hook-form'
import { SearchBar } from '../Components/SearchBar';
import { ProductsMethods } from '../modules/Products';



export const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function Spain(){
      const fetcheddata = await ProductsMethods.getProducts();
      setData(fetcheddata)
    }
    Spain()
  }, []);

  function HandleChange(data: object[]){
    console.log(data)
  }

  return (
    <>
      <Sidebar/>
      <main className='container'>
        <SearchBar data={data} fn={HandleChange}>
          <input type="text" className='input'/>
        </SearchBar>
      </main>
    </>
  )
}