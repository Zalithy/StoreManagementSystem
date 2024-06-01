import './styles/Dialog.scss'


export const Dialog = ({children, reference}) => {
  return (
    <dialog className="dialog" ref={reference}>
      {children}
    </dialog> 
  )
}