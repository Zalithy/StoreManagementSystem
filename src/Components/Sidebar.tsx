import { Link } from "react-router-dom"

export const Sidebar = () => {
  return (
    <nav>
      <Link to={'/'}>Home</Link>
      <Link to={'/products'}>Products</Link>
      <Link to={'/sale'}>Sale</Link>
      <Link to={'/reports'}>Reports</Link>
    </nav>
  )
}