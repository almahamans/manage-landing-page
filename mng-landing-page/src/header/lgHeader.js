import logo from '../images/logo.svg';
import GetStartBtn from '../buttons/startBtn';
function LgHeader(){
    return(
    <header className='grid grid-rows-1 grid-cols-12 place-items-center h-24 md:grid-cols-11'>
        <section className='col-span-3 md:col-span-3'>
            <img src={logo} alt='logo'/>
        </section>       
        <div className='grid grid-cols-subgrid col-span-5 text-indigo-950 text-sm cursor-pointer md:col-span-6'>
        <span className='hover:text-slate-400'>Pricing</span>
        <span className='hover:text-slate-400'>Product</span>
        <span className='hover:text-slate-400'>AboutUs</span>
        <span className='hover:text-slate-400'>Careers</span>
        <span className='hover:text-slate-400'>Community</span>
        </div>
        <div className='col-span-4 md:col-span-2'>
            <GetStartBtn  />
        </div>       
    </header>
    )
}
export default LgHeader