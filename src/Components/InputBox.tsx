import './styles/InputBox.scss'

interface Props {
  currency?: string;
  label: string;
  children: any;
  error?: any;
}

export const InputBox = ({children, label, error, currency}: Props) => {
  return (
    <div className="inputbox">
        <span>{label}</span>
        {currency ? 
          <div className='inputCurrency'>
            <span>{currency}</span>
            {children}
          </div>
          :
          children
        }
        {error ? <p>{error}</p> : null}
    </div>
  )
}