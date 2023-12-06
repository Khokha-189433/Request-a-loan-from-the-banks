import {useContext} from "react"
import { laoninputname } from './constexts/context'
export default function  Myinputforms()
{
 const inputtype = useContext(laoninputname)
  return (<>
             <lebal >{inputtype.names}</lebal>   
           <input type="text" placeholder='UserNmae'  value={inputtype.titilename}
            onChange={(event) =>{
              inputtype.functiontype(event.target.value) 
           }}
          />
  </>)
}