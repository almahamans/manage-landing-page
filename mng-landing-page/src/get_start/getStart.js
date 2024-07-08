import GetStartBtn from '../buttons/startBtn'
function GetStart(){
    return(
        <div className='bg-orange-600 h-36 flex justify-between mt-32'>
            <h1 className='text-2xl ml-24 mt-10 font-bold text-white w-80'>Simplify how your team works today.</h1>
            <section className='mt-16 mr-24'>
             <GetStartBtn bg='bg-white' tc='bg-orange-600'/>   
            </section>
            
        </div>
    )
}
export default GetStart