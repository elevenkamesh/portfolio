import  react  from '../assets/tech/react.png'
import  node   from '../assets/tech/node.png'
import  js   from '../assets/tech/js.png'
import  ts   from '../assets/tech/ts.png'
import  go   from '../assets/tech/go.png'
import  doc   from '../assets/tech/doc.png'
import  git   from '../assets/tech/git.png'
import  jn   from '../assets/tech/jn.png'
import  tail   from '../assets/tech/tail.png'





const TechStack = ()=>{

    const data = [
        {url : js, name : "javascript"  } , 
        {url : ts , name : "typescript"  } , 
        {url : go , name : "go"  } , 
        {url : react , name : "react"  } , 
        {url : node, name : "Nodejs"  } , 
        {url : tail , name : "Tailwind "  } , 

        {url : git , name : "Github"  } , 
        {url : doc , name : "Docker"  } , 
        {url : jn , name : "Jenkins"  } , 



]

  
    
    return(
        <div className="  flex space-x-3">
{data.map((item)=> 

<div className="w-20 h-20 bg-slate-900 rounded-md p-0 px-0">
<img src={item.url} />
</div>)}

        </div>
    )
}

export default TechStack;