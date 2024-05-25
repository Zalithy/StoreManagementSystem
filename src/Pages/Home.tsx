import { Link } from 'react-router-dom'
import { Sidebar } from '../Components/Sidebar'
import { useEffect } from 'react'
import { askQuery } from '../modules/database'

export const Home = () => {

  useEffect(() => {
    askQuery('select * from products').then((e) => console.log(e))
  }, [])
  return (
    <>
      <Sidebar/>
    </>
  )
}