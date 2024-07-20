function ReviewCard({imgUrl, name, comment}){
    return(
        <div className='flex flex-col items-center text-center gap-2 m-5 p-5 w-[30%] flex-shrink-0 bg-gray-50 sm:w-[70%] xs:w-[70%]'>
            <img src={imgUrl} alt="User Image" hight='20%' width='20%' className=''/>
            <p className='text-indigo-950 font-bold text-sm'>{name}</p>
            <p className='text-gray-400'>{comment}</p>
        </div>
    )
}
export default ReviewCard