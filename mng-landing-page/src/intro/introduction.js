import GetStartBtn from "../buttons/startBtn";
import intro from '../images/illustration-intro.svg'
function Introduction(){
    return(
        <div className='grid grid-rows-1 grid-cols-10 place-items-center mt-9 mx-32'>
            <section className='col-span-6 '>
                <h1 className='text-3xl font-extrabold w-[70%] mb-5 text-indigo-950'>Bring everyone togather to build better products.</h1>
                <p className='w-[65%] mb-5 text-slate-500'>Manage make it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.</p>
                <GetStartBtn />
            </section>
            <section className='col-span-4 '>
                <img src={intro} alt="illustration intro"/>
            </section>
        </div>
    )
}
export default Introduction