function DetailsInfo({number, title, body}){
    return(
        <section className='mb-5'>
            <section className='flex gap-3'>
               <span className='bg-orange-600 text-white rounded-full px-5 py-1'>{number}</span>
               <p className='text-indigo-950 font-bold'>{title}</p> 
            </section>  
            <p className='text-slate-500 ml-16'>{body}</p>
        </section>
    )
}
export default DetailsInfo