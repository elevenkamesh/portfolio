import { useState } from "react";

const Experience = () => {
  const [nav , SetNav] = useState('work')
    return (
      <div className="pt-80">
        <div className="flex bg-[#1f2937] p-2 w-full justify-between text-white rounded-lg">
          <div onClick={()=>SetNav("work")  } className={`${nav === "work" ? "bg-[#030711] font-bold w-2/4 text-center shadow-sm hover:cursor-pointer rounded-xl" : "font-bold w-2/4 text-center shadow-sm hover:cursor-pointer"}`}>
          <div>Work</div>
            
          </div>
          
          <div  onClick={()=>SetNav("edu")  }className={`${nav === "edu"  ? "bg-[#030711] font-bold w-2/4 text-center shadow-sm hover:cursor-pointer rounded-xl" : "font-bold w-2/4 text-center shadow-sm hover:cursor-pointer"}`}>

          <div>Education</div>
          </div>
        </div>
  
        <div className="mt-5">
          {/* Additional content here */}
        </div>
      </div>
     
    );
  };
  
  export default Experience;
  