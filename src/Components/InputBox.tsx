import { Input } from './less/Input'
import './styles/InputBox.scss'

interface Props {
  children?: React.ReactNode;
  currency?: string;
  span: string;
  inputType: "text" | "number";
  required?: boolean
}

export const InputBox = ({span, inputType, required, currency}: Props) => {
  return (
    <div className="inputbox">
        <span>{span}</span>
        {currency ? 
          <div className='inputCurrency'>
            <span>{currency}</span>
            <Input type={inputType} require={required}/>
          </div>
          :
          <Input require={required} type={inputType}/>
        }
    </div>
  )
}