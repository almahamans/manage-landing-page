function DetailsInfo({number, title, body}){
    return(
        <section className='mb-5 md:w-[15rem]'>
            <section className='flex gap-3 '>
                <div>
                 <span className='bg-orange-600 text-white rounded-full px-5 py-1'>{number}</span>    
                </div>         
               <p className='text-indigo-950 font-bold md:flex-wrap'>{title}</p> 
            </section>  
            <p className='text-slate-500 ml-16'>{body}</p>
        </section>
    )
}
export default DetailsInfo