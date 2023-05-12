import './Content.css';

import Fact from '../FactComponent/Fact'
import About from '../AboutComponent/About';
import Team from '../TeamComponent/Team';

function Content() {

  return (
    <div id="Content" >
         {/* Home Page Start */}
         <About />
         <Fact />
         <Team />
    {/* Home Page End */}
    </div>
  );
}

export default Content;
