import { useState } from 'react';
import { Sidebar } from '../Components/Sidebar'
import {useForm} from 'react-hook-form'

interface FormFields {
  first: string;
  second: string;
  age: number
}

export const Home = () => {
  const { 
    register, handleSubmit, formState: {errors} 
  } = useForm<FormFields>({defaultValues: {
    first: "si",
    second: "no",
    age: 56
  }});
  const [data, setData] = useState<string>();

  function action (data){
    console.log(data)
    setData(JSON.stringify(data))
  }

  return (
    <>
      <Sidebar/>
      <main className='container'>
        <form onSubmit={handleSubmit(action)}>
          <input type="text" {...register('first', {
            required: 'This is required',
          })}/>
          {errors.first?.message}
          <br></br>
          <input type="number" {...register('second', {
            minLength: {
              value: 5,
              message: "More than 5 characters"
            }
          })}/> <br></br>
          <input type="text" {...register('age')}/> 
          <button>sexo</button>
          
        </form>

        {data ? <p>{data}</p>: null}
      </main>
    </>
  )
}