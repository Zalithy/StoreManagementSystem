import '../styles/Input.scss'

interface Props {
  type: "text" | "number",
  require: boolean
}

export const Input = ({type, require=false}: Props) => {
  return(
    <>
      <input type={type} required={require} />
    </>
  )
}