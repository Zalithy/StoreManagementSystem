import { Link } from "react-router-dom"
import { useDolar } from "../modules/hooks/get"

export const Sidebar = () => {
  const dolar = useDolar();

  return (
    <>
      <nav>
        <Link to={'/'}>Home</Link>
        <Link to={'/products'}>Products</Link>
        <Link to={'/sale'}>Sale</Link>
        <Link to={'/reports'}>Reports</Link>
        {dolar ? dolar.bcv.price : <div>si</div>}
      </nav>
    </>
  )
}