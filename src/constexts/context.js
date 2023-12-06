import {createContext} from 'react' ;
// عملت خاصية التصدير من اجل الوصول اليه لانه محطوط ضمن ملف خارجي 
// 
export let laoninputname = createContext({   // طبعا هون مو شرط يكون اسمه نفس اسم ال المف تبعه وانما فيني سميه كيف ما بدي 
    nameinput : "" ,
    inputfuction: null ,
    userinformation :null 
})
