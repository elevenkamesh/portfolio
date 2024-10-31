import kamesh from '../../public/kamesh.jpg';
import Social from './socials';
const About = ()=>{
    return (

        <div className='text-white flex w-50 h-10 pt-10'>


<div>
    <div className='text-4xl font-style: italic font-bold'>

    <h1>hi kamesh here 👋</h1>
    </div>

    <div className='mt-5'>
   <p className='pb-3'> 23-year-old software developer and Ex-Fornite pro player  from India</p>

<p className='pr-4'>
I like to develop full-stack, drink instant coffee and get coding advice from my Dog, Zara.  
</p>
<div className='w-full pt-10 pb-5'>
<div className='p-2 px-2 text-center text-sm flex border-green-400 border-2 w-52 rounded-full'>
<span className='italic'>Activity looking for new job</span>

</div>
</div>
<Social />
    </div>
</div>



<div >

<img className='rounded-lg w-60 h-40' src={kamesh} />
</div>

       
        </div>
    )
}
export default About
