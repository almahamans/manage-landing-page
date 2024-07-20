import DetailsInfo from "./details_info";
function Info(){
    return(
        <div className='flex my-24 mx-32 justify-between md:mx-16 md:justify-evenly lg:mx-16 sm:mx-5 sm:flex-col xs:mx-5 xs:flex-col'>
            <section className='w-96 md:w-[15rem] lg:mr-16 sm:mb-10 xs:mb-10'>
                <h1 className='text-indigo-950 text-3xl font-extrabold mb-7 md:text-2xl sm:mb-3 xs:mb-3'>What's different About manage?</h1>
                <p className='text-slate-500'>Manage provides all functionality your team needs, without the complexity. Our software is tailor-mode for modern digital product team.</p>
            </section>
            <section className="">
                <DetailsInfo number="01" title="Track company-wide progress" body="See how your day-to-day tasks fit into the wider vision." />
                <DetailsInfo number="02" title="Advance build-in reports" body="See how your day-to-day tasks fit into the wider vision." />
                <DetailsInfo number="03" title="Everything you need in one place" body="See how your day-to-day tasks fit into the wider vision." />
            </section>
        </div>
    )
}
export default Info