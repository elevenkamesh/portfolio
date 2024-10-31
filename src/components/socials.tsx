import { IoLogoLinkedin } from "react-icons/io5";
import { FaFileDownload , FaGithub, FaDev , FaMedium } from "react-icons/fa";
import { TbBrandLeetcode } from "react-icons/tb";
const Social = ()=>{
    return (
<div className="flex space-x-5">

    <div className="flex items-center  ">
<button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2"> <span className="pr-2 font-semibold">Resume </span><FaFileDownload /></button>

    </div>
    <div className="flex space-x-6 items-center px-5">
     <a href="#" ><IoLogoLinkedin /> </a>
     <a href="#" ><FaGithub />  </a>   
     <a href="#" ><FaDev /> </a>  
     <a href="#" ><FaMedium /> </a>   
     <a href="#" ><TbBrandLeetcode /> </a>   
    </div>

</div>
    )
}

export default Social