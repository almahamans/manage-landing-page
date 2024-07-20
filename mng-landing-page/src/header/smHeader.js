import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import ddl from '../images/icon-hamburger.svg';
import logo from '../images/logo.svg';
function SmHeader(){
    return(
        <header className='flex justify-between py-5 px-3'>
        <section className=''>
            <img src={logo} alt='logo'/>
        </section>
        <Menu>
            <MenuButton>
                <img src={ddl} width={'70%'} />
            </MenuButton>
            <MenuItems anchor='bottom start' className="w-screen mt-5 bg-slate-300 text-center py-5 gap-5 cursor-pointer text-[17px]">
            <MenuItem>
            <p className='hover:text-orange-500'>Pricing</p>
            </MenuItem>
            <MenuItem>
            <p className='hover:text-orange-500'>Product</p>
            </MenuItem>
            <MenuItem>
            <p className='hover:text-orange-500'>About Us</p>
            </MenuItem>
            <MenuItem>
            <p className='hover:text-orange-500'>Careers</p>
            </MenuItem>
            <MenuItem>
            <p className='hover:text-orange-500'>Community</p>
            </MenuItem>
            </MenuItems>
        </Menu>
        </header>
    )
}
export default SmHeader;