import { useState } from "react"

const Header = ()=>{
   const textColor = "text-[#89909d]"

   const [color , setColor] = useState('dark') 
return (
   <div className="sticky top-0 z-50 flex  py-6 backdrop-blur-sm justify-between">
<div className={`${textColor} flex  space-x-4 `}>
   <div className="hover:text-white cursor-pointer">Home</div>
   <div  className="hover:text-white cursor-pointer" >Projects</div>
   <div  className="hover:text-white cursor-pointer" >Blog</div>
   <div  className=" hover:text-white cursor-pointer">Contact</div>

    </div>
<div className="text-white "> 
   <div>
     {color === "light"
      ? <button type="button" onClick={()=>setColor("dark") 
      }>light</button>
       :

<button type="button" onClick={()=>
       setColor("light")  
      }>dark</button>}
   </div>
</div>


    
   </div>
)
}

export default Header