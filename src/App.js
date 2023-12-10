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
import Videos from './page/media/videos/videos';
import Photos from './page/media/photos/photos';
// import Support from './components/support';

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
import CrevasseRescue from './page/knowledge/techniques/detail/Crevasse_Rescue';
import CrackClimbing from './page/knowledge/techniques/detail/Crack_Climbing';
import BuildAnchors from './page/knowledge/techniques/detail/Build_Anchors';
import Avalanche from './page/knowledge/techniques/detail/Avalanche';
import Belay from './page/knowledge/techniques/detail/Belay';

// training
import Train_for_Rock from './page/knowledge/training/detail/Train_for_Rock'

//nutrition

// gear
import Indispensable from './page/gear/detail/Indispensable_tool';
import Camping_tents from './page/gear/detail/camping_tents';
import Stakes from './page/gear/detail/stakes';
import Outdoorshoes from './page/gear/detail/outdoorshoes';
import Backpack from './page/gear/detail/climbing_backpack';
import Carabiners from './page/gear/detail/carabiners';

// media
  //videos
  import Chris_Sharmas from './page/media/videos/detail/Chris_Sharmas_Sleeping_Lion_Project';
  import Mallorca from './page/media/videos/detail/Chris-Sharmas-First-Ascent-of-Es-Pontas-Mallorca';

  //photos
  import Hhen from './page/media/photos/detail/hhen';


  //location
  import SonDoongCave from './page/location/detail/SonDoongCave';
  import EverestMount from './page/location/detail/EverestMount';

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
        <Route path='/videos' element={<Videos/>}></Route>
        <Route path='/photos' element={<Photos/>}></Route>
        {/* <Route path='/support' element={<Support/>}></Route> */}

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
        <Route path='/Crevasse-Rescue-Skills' element={<CrevasseRescue/>}></Route>
        <Route path='/Getting-Started-Crack-Climbing' element={<CrackClimbing/>}></Route>
        <Route path='/How-to-Build-Anchors-for-Climbing' element={<BuildAnchors/>}></Route>
        <Route path='/How-to-Belay' element={<Belay/>}></Route>
        <Route path='/Avalanche-Rescue-Overview' element={<Avalanche/>}></Route>

        {/* training */}
        <Route path='/Train-for-Rock-Climbing' element={<Train_for_Rock/>}></Route>

        {/* nutrition */}

        {/* gear */}
        <Route path='/indispensable-tool' element={<Indispensable/>}></Route>
        <Route path='/camping-tents' element={<Camping_tents/>}></Route>
        <Route path='/stakes' element={<Stakes/>}></Route>
        <Route path='/backpack' element={<Backpack/>}></Route>
        <Route path='/carabiners' element={<Carabiners/>}></Route>
        <Route path='/outdoorshoes' element={<Outdoorshoes/>}></Route>


        {/* videos */}
        <Route path='/Chris-Sharmas-Sleeping-Lion-Project' element={<Chris_Sharmas/>}></Route>
        <Route path='/Chris-Sharmas-First-Ascent-of-Es-Pontas-Mallorca' element={<Mallorca/>}></Route>

        {/* photos */}
        <Route path='/Miss-HHen-Nie-and-her-journey-to-explore-Son-Doong-cave' element={<Hhen/>}></Route>

        {/* location */}
        <Route path='/SonDoongCave' element={<SonDoongCave/>}></Route>
        <Route path='/Complete-Guide-to-Mount-Everest' element={<EverestMount/>}></Route>


      </Routes>
    </BrowserRouter>
  );
}
export default App;