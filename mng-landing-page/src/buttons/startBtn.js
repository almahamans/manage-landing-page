function GetStartBtn(props){
    const {bg = 'bg-orange-600',  tc='text-white', text='Get Started'} = props
    return(
       <button  className={`rounded-full px-4 py-2 ${bg} ${tc} text-sm hover:bg-red-300`}>
        {text}
        </button>   
    )
}
export default GetStartBtn