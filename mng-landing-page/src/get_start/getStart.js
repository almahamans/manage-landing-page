import GetStartBtn from '../buttons/startBtn'
function GetStart(){
    return(
        <div className='bg-orange-600 h-36 flex justify-around mt-32 sm:flex-col sm:h-max sm:text-center xs:h-max xs:text-center xs:flex-col'>
            <h1 className='text-2xl mt-10 font-bold text-white w-80 sm:mx-auto xs:mx-auto'>Simplify how your team works today.</h1>
            <section className='mt-16 sm:mt-5 sm:mb-3 xs:mt-5 xs:mb-3'>
             <GetStartBtn bg='bg-white' tc='text-orange-600'/>   
            </section>
            
        </div>
    )
}
export default GetStart