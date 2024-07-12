import logo from '../images/logo.svg';
import fb from '../images/icon-facebook.svg';
import insta from '../images/icon-instagram.svg';
import yt from '../images/icon-youtube.svg';
import pin from '../images/icon-pinterest.svg';
import Form from '../form/form';
function Footer(){
    return(
        <div className='vh-80 bg-black'>
            <section className='flex justify-around md:flex-wrap'>
            <section className='flex flex-col ml-14 gap-16 md:mr-10'>
                <img src={logo} alt="logo" className='fill-white mt-20 max-w-[100%] min-w-36'/>
                <section className='flex gap-5'>
                <img src={fb} alt="facebook-icon" />
                <img src={insta} alt="instagram-icon" />
                <img src={yt} alt="youtube-icon" />
                <img src={pin} alt="pinterest-icon" />
                </section>
            </section>
            <section className='grid grid-cols-2 grid-rows-4 gap-5 text-white mt-16'>
                <span>Home</span>
                <span>Pricing</span>
                <span>Product</span>
                <span>About Us</span>
                <span>Careers</span>
                <span>Community</span>
                <span>Privacy Policy</span>
            </section>
            <section className='mt-24 md:mx-auto '>
                <Form/>
            </section>
            </section>
            <section className='mt-14 ml-[40%] md:ml-[30%]'>
                <p className='text-white'>Copyright 2024. All Rights Reserved.</p>
            </section>
        </div>
    )
}
export default Footer