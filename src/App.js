import React from 'react';
import { BrowserRouter ,Route,Routes} from "react-router-dom";
import './App.css';
import Navbarmenu from './page/layout/Navbarmenu';
import Home from './page/home/Home'
import Overview from './page/knowledge/overview/overview';
import Techniques from './page/knowledge/techniques/Climbing_techniques';
import Training from './page/knowledge/training/training';
import Nutrition from './page/knowledge/nutrition/nutrition';
import Location from './page/location/location';
import Gear from './page/gear/gear';
import News from './page/News/News';
import Clubs from './page/Clubs/clubs';

// overview detail
import Types from './page/knowledge/overview/detail/types'
import History from './page/knowledge/overview/detail/history_techniques'
import Communication from './page/knowledge/overview/detail/communication'
import Terrain from './page/knowledge/overview/detail/terrain'
import Rating from './page/knowledge/overview/detail/rating'
import Mountaineering from './page/knowledge/overview/detail/mountaineering';

// techniques
import Finger_crack from './page/knowledge/techniques/detail/finger_cracks';
import Snow_Anchors from './page/knowledge/techniques/detail/snow_anchors'
import SnowTechniques from './page/knowledge/techniques/detail/Snow Techniques';
import UseCrampons from './page/knowledge/techniques/detail/UseCrampons';
import UseIceAxe from './page/knowledge/techniques/detail/Use_an_Ice_Axe';
import Tradclimbing from './page/knowledge/techniques/detail/tradclimbing';
import RouteFinding from './page/knowledge/techniques/detail/RouteFinding';
import GlacierandRoped from './page/knowledge/techniques/detail/Glacier_and_Roped';

// training
import Train_Everywhere from './page/knowledge/training/detail/Train_Everywhere';
import Non_Climbing from './page/knowledge/training/detail/Non_Climbing';
import Dynamic_Climbing from './page/knowledge/training/detail/Dynamic_Climbing';
import Keep_Training from './page/knowledge/training/detail/Keep_Training';
import Training_Around from './page/knowledge/training/detail/Training_Around';
import Training_Worth from './page/knowledge/training/detail/Training_Worth';
import Collagen_Protein from './page/knowledge/training/detail/Collagen_Protein';
import Improve_Climbing from './page/knowledge/training/detail/Improve_Climbing';
import Circuit_Workout from './page/knowledge/training/detail/Circuit_Workout';
import Climbing_Performance from './page/knowledge/training/detail/Climbing_Performance';
import Overgripping from './page/knowledge/training/detail/Overgripping';

//nutrition

// gear
import Indispensable from './page/gear/detail/Indispensable_tool';
import Camping_tents from './page/gear/detail/camping_tents';
import Stakes from './page/gear/detail/stakes';
import Outdoorshoes from './page/gear/detail/outdoorshoes';
import Backpack from './page/gear/detail/climbing_backpack';
import Carabiners from './page/gear/detail/carabiners';

function App() {
  return (
    <BrowserRouter basename='/'>
      <Navbarmenu/>
      <Routes>
        <Route exact  path='/' element={<Home/>}></Route>
        <Route path='/overview' element={<Overview/>}></Route>
        <Route path='/techniques' element={<Techniques/>}></Route>
        <Route path='/training' element={<Training/>}></Route>
        <Route path='/nutrition' element={<Nutrition/>}></Route>
        <Route path='/Location' element={<Location/>}></Route>
        <Route path='/gear' element={<Gear/>}></Route>
        <Route path='/News' element={<News/>}></Route>
        <Route path='/clubs' element={<Clubs/>}></Route>
        {/* overview detail */}
        <Route path='/types' element={<Types/>}></Route>
        <Route path='/history' element={<History/>}></Route>
        <Route path='/communication' element={<Communication/>}></Route>
        <Route path='/terrain' element={<Terrain/>}></Route>
        <Route path='/rating' element={<Rating/>}></Route>
        <Route path='/mountaineering' element={<Mountaineering/>}></Route>
        {/* techniques */}
        <Route path='/finger-cracks' element={<Finger_crack/>}></Route>
        <Route path='/Snow-Anchors-for-Mountaineering' element={<Snow_Anchors/>}></Route>
        <Route path='/Snow-Travel-Techniques-for-Mountaineering' element={<SnowTechniques/>}></Route>
        <Route path='/How-to-Use-Crampons' element={<UseCrampons/>}></Route>
        <Route path='/How-to-Use-an-Ice-Axe-for-Mountaineering' element={<UseIceAxe/>}></Route>
        <Route path='/Trad-Climbing-Basics' element={<Tradclimbing/>}></Route>
        <Route path='/Route-Finding-and-Navigation-for-Mountaineering' element={<RouteFinding/>}></Route>
        <Route path='/Glacier-and-Roped-Travel-for-Mountaineering' element={<GlacierandRoped/>}></Route>

        {/* training */}
        <Route path='/How-to-Train-Everywhere-and-Anywhere' element={<Train_Everywhere/>}></Route>
        <Route path='/How-to-Train-for-Climbing-in-a-Non-Climbing-Gym' element={<Non_Climbing/>}></Route>
        <Route path='/How-Climber-Should-Train-for-Dynamic-Movement' element={<Dynamic_Climbing/>}></Route>
        <Route path='/How-To-Know-When-To-Keep-Training-And-When-To-Quit' element={<Keep_Training/>}></Route>
        <Route path='/Build-Your-Training-Around-Your-Life' element={<Training_Around/>}></Route>
        <Route path='/Is-Training-Worth-Your-Time?' element={<Training_Worth/>}></Route>
        <Route path='/Is-Collagen-Protein-Worth-the-Hype?' element={<Collagen_Protein/>}></Route>
        <Route path='/Jonathan-Siegrist:Easy-Sends-Don’t-Improve-Your-Climbing' element={<Improve_Climbing/>}></Route>
        <Route path='/Try-This-45-minute-Circuit-Workout' element={<Circuit_Workout/>}></Route>
        <Route path='/Optimize-Your-Climbing-Performance' element={<Climbing_Performance/>}></Route>
        <Route path='/Stop-Overgripping!-Here’s-How' element={<Overgripping/>}></Route>

        {/* nutrition */}

        {/* gear */}
        <Route path='/indispensable-tool' element={<Indispensable/>}></Route>
        <Route path='/camping-tents' element={<Camping_tents/>}></Route>
        <Route path='/stakes' element={<Stakes/>}></Route>
        <Route path='/backpack' element={<Backpack/>}></Route>
        <Route path='/carabiners' element={<Carabiners/>}></Route>
        <Route path='/outdoorshoes' element={<Outdoorshoes/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;