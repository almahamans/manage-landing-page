import DetailsInfo from "./details_info";
function Info(){
    return(
        <div className='flex my-16 mx-32 gap-44'>
            <section className='w-96'>
                <h1 className='text-indigo-950 text-3xl font-extrabold mb-7'>What's different About manage?</h1>
                <p className='text-slate-500'>Manage provides all functionality your team needs, without the complexity. Our software is tailor-mode for modern digital product team.</p>
            </section>
            <section>
                <DetailsInfo number="01" title="Track company-wide progress" body="See how your day-to-day tasks fit into the wider vision." />
                <DetailsInfo number="02" title="Advance build-in reports" body="See how your day-to-day tasks fit into the wider vision." />
                <DetailsInfo number="03" title="Everything you need in one place" body="See how your day-to-day tasks fit into the wider vision." />
            </section>
        </div>
    )
}
export default Info