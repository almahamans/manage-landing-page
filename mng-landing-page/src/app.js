import Header from './header/header.js';
import Introduction from './intro/introduction.js';
import Info from './info/info.js';
import PrevUsers from './prev_users/prevUsers.js';
import GetStart from './get_start/getStart.js';
import Footer from './footer/footer.js';

function App(){
    return(
        <div>
    <Header />
    <Introduction />
    <Info/>
    <PrevUsers/>
    <GetStart/>
    <Footer/>
        </div>
    )
}
export default App