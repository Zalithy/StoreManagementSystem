import { cloneElement, useRef, useState } from "react";
import { filterAndSortObjectsByName } from "../modules/Utils";
import './styles/divSearch.scss'

interface Props {
  data: {name: string}[];
  fn: (e: object) => void;
  children: any
}

export const SearchBar: React.FC<Props> = ({ data, fn, children }) => {
  const [result, setResult] = useState<{name: string; id?: number}[]>([]);
  const [display, setDisplay] = useState<"none" | "block">("none");
  const ref = useRef<HTMLInputElement>()
  const divRef = useRef<HTMLDivElement>();


  function searching(){
    const sortedProducts = filterAndSortObjectsByName(ref.current.value, data);
    setResult(sortedProducts);
  }

  return (
    <div className="divSearch">
      {cloneElement(children, { ref: ref, type: "text", onChange: searching, 
        onFocus: () => {setDisplay("block")},
        }
      )}
      <div className="divResult" ref={divRef} style={{display: display}}>
        {
          result.map(e => {
            return (
              <div key={e.id} onClick={() => {
                fn(e)
                setDisplay("none")
              }}>{e.name}</div>
            )
          })
        }
      </div>
    </div>
  )
}