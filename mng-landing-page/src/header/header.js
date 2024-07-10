import logo from '../images/logo.svg';
import GetStartBtn from '../buttons/startBtn';

function Header(){
    return(
    <header className='grid grid-rows-1 grid-cols-12 place-items-center h-24 '>
        <div className='col-span-3'>
            <img src={logo} alt='logo'/>
        </div>
        <div className='grid grid-cols-subgrid col-span-5 text-indigo-950 text-sm cursor-pointer'>
        <span className='hover:text-slate-400'>Pricing</span>
        <span className='hover:text-slate-400'>Product</span>
        <span className='hover:text-slate-400'>About Us</span>
        <span className='hover:text-slate-400'>Careers</span>
        <span className='hover:text-slate-400'>Community</span>
        </div>
        <div className='col-span-4'>
            <GetStartBtn  />
        </div>
        
    </header>
    )
}
export default Header