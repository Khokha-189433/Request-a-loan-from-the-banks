import'./Styleform.css';
import Mymodel from './Mymodel' ;
import {useState} from 'react'
import Myinputforms from './Myinputforms.js';
import { laoninputname } from "./constexts/context.js";

export default function LoanFor()
{    const [correcttext, setcorrecttext] =useState(null)
     const [showsubmit , setshowsubmit] = useState(false)   
     const [loaninput , loanfunction] = useState({ 
          name : "" ,
          mopilePhone : "" ,
          age :""  , 
          isEmployee : false ,
          asalary: ""
     }) 
     const condetionsbuton =  loaninput.name == "" ||loaninput.mopilePhone =="" ||loaninput.age=="" 
     function handelsubmitablade(event)
     {  
        event.preventDefault(); ///  submit تقوم ع التحقق من البيانات  قبل عمل ال 
        setcorrecttext("null");
        const{age , mopilePhone , name  } = loaninput    
        if (loaninput.age <20  ||loaninput.age > 50 )
        {
            setcorrecttext("Enter the age betwen 20 => 40 ");
        }
        else if (mopilePhone.length < 10 || mopilePhone.length > 12 )
        {
            setcorrecttext("Enter  number betwen 10 to 12 ");
        }else if (name.length < 8  || name.length > 19 )
        {
            setcorrecttext("Enter the name betwen 8 => 19 ");
        }
        setshowsubmit(true) ;    
     }
     function handelonclicked(){
        if(showsubmit === true)
         {
            setshowsubmit(false);
         }
     }
     // من اجل اختصار كود ال forms
    function handelsetuseStateusername(value)
    {
        loanfunction({...loaninput , name:value})
    }
    function handelsetuseStatemopilephone(value)
    {
        loanfunction({...loaninput ,mopilePhone :value})
    }
    function handelsetuseStateage(value)
    {
        loanfunction({...loaninput ,  age: value})
    }
     return(

     <div className="flix" onClick={handelonclicked} >
      
      <form className="Flixform" >
           <h1 style={{color :"white" ,  fontFamily:"Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif"}}>Requesting a Loan </h1>
           <hr className="hr1" />

         
              {/* username */}

           <laoninputname.Provider   value={{names:"Username" , functiontype :handelsetuseStateusername  , titilename :loaninput.name}}>
              <Myinputforms />       
           </laoninputname.Provider>

           
             <laoninputname.Provider   value={{names:"MopilePhon" , functiontype :handelsetuseStatemopilephone , titilename :loaninput.mopilePhone}}>
              <Myinputforms />       
           </laoninputname.Provider>
              
              <laoninputname.Provider   value={{names:"age" , functiontype :handelsetuseStateage , titilename :loaninput.age}}>
              <Myinputforms />       
           </laoninputname.Provider>

           {/*  */}
        
           <lebal>  Are you Employee :</lebal>   
           <input type="checkBox"    checked={loaninput.isEmployee} onChange={(event) =>{
               loanfunction({...loaninput , isEmployee: event.target.checked })
           }}></input>

           <lebal>  Salery :</lebal> 
           <select className="selects"  value={loaninput.asalary} onChange={(event) =>{
               loanfunction({...loaninput , asalary: event.target.value })
           }}>
                <option>200$ to  800$</option>
                <option>900$ to  1500$</option>
                <option>1600$ to  2000$</option>
           </select>
           <button  onClick={handelsubmitablade}  disabled={condetionsbuton} style={{margin:"15px" , borderRadius :"6px" , padding:"7px" , border:"none" }} id='Submitstyle'>Submit</button>
      </form>
       <Mymodel  errorMessige ={correcttext} isvisable={showsubmit}/>   
     </div>

    )
}