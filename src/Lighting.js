import BedLight from "./BedLight";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
const Lighting = () => {
    return (
        <Router>
<div className="Lighting">

    <h1>Lighting System</h1>


<a href="/Lighting/BedLight">
    <button>Bedroom</button>
</a>
<button className="Kitchen">Kitchen</button>
<Switch>
      <Route path='/Lighting/BedLight'>
     <BedLight />
      </Route>
    </Switch>
 </div>
</Router>
    );
}

export default Lighting;