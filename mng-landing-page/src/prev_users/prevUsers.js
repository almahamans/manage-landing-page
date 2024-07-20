import ReviewCard from "./review_card"
import GetStartBtn from '../buttons/startBtn'
import RImg1 from '../images/avatar-ali.png'
import RImg2 from '../images/avatar-anisha.png'
import RImg3 from '../images/avatar-shanai.png'
import RImg4 from '../images/avatar-richard.png'

function PrevUsers(){
    return(
        <div className='mt-24'>
            <h1 className='font-bold text-3xl text-center text-indigo-950 mb-10'>What they've said</h1>
            <section className='flex flex-nowrap mx-auto scrollbar scrollbar-thumb-slate-300 scrollbar-track-slate-100 scrollbar-track-rounded-full overflow-x-scroll '>
                <ReviewCard imgUrl={RImg1} name={'Ali Bravo'} comment={'We have been able to cancel so many other subscriptions since usnig Manage. We have been able to cancel so many other subscriptions since usnig Manage. We have been able to cancel so many other subscriptions since usnig Manage.'}/>
                <ReviewCard imgUrl={RImg2} name={'Anisha Li'} comment={'We have been able to cancel so many other subscriptions since usnig Manage.'}/>
                <ReviewCard imgUrl={RImg3} name={'Shanai Who'} comment={'We have been able to cancel so many other subscriptions since usnig Manage. We have been able to cancel so many other subscriptions since usnig Manage.'}/>
                <ReviewCard imgUrl={RImg4} name={'Richard Watts'} comment={'We have been able to cancel so many other subscriptions since usnig Manage.'}/>
            </section>
            <section className='text-center m-8'>
               <GetStartBtn /> 
            </section> 
        </div>
    )
}
export default PrevUsers