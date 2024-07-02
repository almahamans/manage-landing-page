import logo from './logo.svg';
import GetStartBtn from '../buttons/startBtn';

function Header(){
    return(
    <header className=''>
        <div>
            <img src={logo} alt='logo'/>
        </div>
        <span className=''>Pricing</span>
        <span>Product</span>
        <span>About Us</span>
        <span>Careers</span>
        <span>Community</span>
        <GetStartBtn />
    </header>
    )
}
export default Header