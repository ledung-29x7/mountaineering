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
import Types_Of_Shelters from './page/knowledge/overview/detail/Types_Of_Shelters';
import Dangerous_Lead from './page/knowledge/overview/detail/Dangerous_Lead';
import Dangerous_Thing from './page/knowledge/overview/detail/Dangerous_Thing';
import Climbing_Is_Fin_Dangerous from './page/knowledge/overview/detail/Climbing_Is_Fin_Dangerous';

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
import Shelter_For_The_Storm from './page/knowledge/techniques/detail/Shelter_For_The_Storm';

// training
import Train_for_Rock from './page/knowledge/training/detail/Train_for_Rock';
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
import VitaminD from './page/knowledge/nutrition/detail/VitaminD';
import Lightweight from './page/knowledge/nutrition/detail/lightweight';
import TheKetoDiet from './page/knowledge/nutrition/detail/TheKetoDiet';
import Vegan from './page/knowledge/nutrition/detail/Vegan';
import Vitamins_Harmful from './page/knowledge/nutrition/detail/Vitamins_Harmful';

// gear
import Indispensable from './page/gear/detail/Indispensable_tool';
import Camping_tents from './page/gear/detail/camping_tents';
import Stakes from './page/gear/detail/stakes';
import Outdoorshoes from './page/gear/detail/outdoorshoes';
import Backpack from './page/gear/detail/climbing_backpack';
import Carabiners from './page/gear/detail/carabiners';
import Inflatable_Pod_sleeping from './page/gear/detail/Inflatable_Pod_sleeping';

// media
  //videos
  import Chris_Sharmas from './page/media/videos/detail/Chris_Sharmas_Sleeping_Lion_Project';
  import Mallorca from './page/media/videos/detail/Chris-Sharmas-First-Ascent-of-Es-Pontas-Mallorca';
  import Weekend_Whipper_01 from './page/media/videos/detail/Weekend_Whipper_01';
  import Weekend_Whipper_02 from './page/media/videos/detail/Weekend_Whipper_02';
  import Weekend_Whipper_03 from './page/media/videos/detail/Weekend_Whipper_03';
  import Weekend_Whipper_04 from './page/media/videos/detail/Weekend_Whipper_04';
  import Weekend_Whipper_05 from './page/media/videos/detail/Weekend_Whipper_05';
  import Weekend_Whipper_06 from './page/media/videos/detail/Weekend_Whipper_06';
  import Weekend_Whipper_07 from './page/media/videos/detail/Weekend_Whipper_07';
  import Weekend_Whipper_08 from './page/media/videos/detail/Weekend_Whipper_08';

  //photos
  import Hhen from './page/media/photos/detail/hhen';
  import AffinityIceClimbingClinic from './page/media/photos/detail/AffinityIceClimbingClinic';
  import ClimbingHolds from './page/media/photos/detail/ClimbingHolds';
  import France from './page/media/photos/detail/France';
  import GreatestClimbing from './page/media/photos/detail/GreatestClimbing';
  import StoneNudes from './page/media/photos/detail/StoneNudes';


  //location
  import SonDoongCave from './page/location/detail/SonDoongCave';
  import EverestMount from './page/location/detail/EverestMount';
  import Mont_Blanc from './page/location/detail/Mont_Blanc';
  import Himalayan from './page/location/detail/himalayan';
  
  
  //  clubs
  import AAC from './page/Clubs/detail/AmericanAlpineClub';
  import TheAlpineClub from './page/Clubs/detail/TheAlpineClub';
  import TheHimalayanClub from './page/Clubs/detail/TheHimalayanClub';
  import TheNewZealandAlpineClub from './page/Clubs/detail/TheNewZealandAlpineClub';

  // news
  import NEOM_Beach_Games from './page/News/detail/NEOM_Beach_Games';
  import Rare_Upgrade from './page/News/detail/Rare_Upgrade';
  import Jesse_Grupper from './page/News/detail/Jesse_Grupper';
  import Kai_Lightner from './page/News/detail/Kai_Lightner';
  import Groundfall from './page/News/detail/Groundfall';
  import Experienced_Guide from './page/News/detail/Experienced_Guide';
  import American_Trio_Blazes from './page/News/detail/American_Trio_Blazes';

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
        <Route path='/Types-Of-Shelters' element={<Types_Of_Shelters/>}></Route>
        <Route path='/The-World’s-Most-Dangerous-Lead' element={<Dangerous_Lead/>}></Route>
        <Route path='/The-Most-Dangerous-Thing' element={<Dangerous_Thing/>}></Route>
        <Route path='/Climbing-Is-F’in-Dangerous' element={<Climbing_Is_Fin_Dangerous/>}></Route>
        

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
        <Route path='/Shelter_For_The_Storm' element={<Shelter_For_The_Storm/>}></Route>

        {/* training */}
        <Route path='/Train-for-Rock-Climbing' element={<Train_for_Rock/>}></Route>
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
        <Route path='/Why-You-Should-Probably-Supplement-Vitamin-D' element={<VitaminD/>}></Route>
        <Route path='/Good-To-Go-Meals-a-lightweight-climbing-food' element={<Lightweight/>}></Route>
        <Route path='/Why-The-Keto-Diet-Will-Hurt-Your-Climbing' element={<TheKetoDiet/>}></Route>
        <Route path='/Can-Going-Vegan' element={<Vegan/>}></Route>
        <Route path='/Are-Vitamins-Harmful?' element={<Vitamins_Harmful/>}></Route>


        {/* gear */}
        <Route path='/indispensable-tool' element={<Indispensable/>}></Route>
        <Route path='/camping-tents' element={<Camping_tents/>}></Route>
        <Route path='/stakes' element={<Stakes/>}></Route>
        <Route path='/backpack' element={<Backpack/>}></Route>
        <Route path='/carabiners' element={<Carabiners/>}></Route>
        <Route path='/outdoorshoes' element={<Outdoorshoes/>}></Route>
        <Route path='/Inflatable_Pod_sleeping' element={<Inflatable_Pod_sleeping/>}></Route>


        {/* videos */}
        <Route path='/Chris-Sharmas-Sleeping-Lion-Project' element={<Chris_Sharmas/>}></Route>
        <Route path='/Chris-Sharmas-First-Ascent-of-Es-Pontas-Mallorca' element={<Mallorca/>}></Route>
        <Route path='/Weekend-Whipper-Too-Pumped-to-Clip' element={<Weekend_Whipper_01/>}></Route>
        <Route path='/Weekend-Whipper-A-Reminder-to-Make-Your-Friends-Hang-Draws' element={<Weekend_Whipper_02/>}></Route>
        <Route path='/Weekend-Whipper-A-Reminder-to-Not-Let-the-Rope-Get-Behind-Your-Leg' element={<Weekend_Whipper_03/>}></Route>
        <Route path='/Weekend-Whipper-Stacking-It-On-the-Worlds-Most-Famous-Boulder' element={<Weekend_Whipper_04/>}></Route>
        <Route path='/Weekend-Whipper-Ice-Climber-Falls-With-Rope-Between-Legs—Mid-Figure-Four' element={<Weekend_Whipper_05/>}></Route>
        <Route path='/Weekend-Whipper-Have-You-Ever-Forgotten-You-Were-on-Lead' element={<Weekend_Whipper_06/>}></Route>
        <Route path='/Weekend-Whipper-Why-Belayers-Should-Always-Wear-a-Helmet' element={<Weekend_Whipper_07/>}></Route>
        <Route path='/Weekend-Whipper-Huge-Air-Time-in-El-Salto-Mexico' element={<Weekend_Whipper_08/>}></Route>


        {/* photos */}
        <Route path='/Miss-HHen-Nie-and-her-journey-to-explore-Son-Doong-cave' element={<Hhen/>}></Route>
        <Route path='/How-the-Affinity-Ice-Climbing-Clinic-is-Welcoming-BIPO-Ice-Climbers' element={<AffinityIceClimbingClinic/>}></Route>
        <Route path='/How-Climbing-Holds-are-Made' element={<ClimbingHolds/>}></Route>
        <Route path='/France-Land-of-Wine-Cheese-and-Beautiful-Rarely-Visited-Crags' element={<France/>}></Route>
        <Route path='/Greatest-Climbing-Photos-of-2021' element={<GreatestClimbing/>}></Route>
        <Route path='/Stone-Nudes-Are-Coming-Back-Dean-Fidelman-Reveals-All' element={<StoneNudes/>}></Route>



        {/* location */}
        <Route path='/SonDoongCave' element={<SonDoongCave/>}></Route>
        <Route path='/Complete-Guide-to-Mount-Everest' element={<EverestMount/>}></Route>
        <Route path='/Mont-Blanc-is-the-highest-peak-in-the-Western-Alps' element={<Mont_Blanc/>}></Route>
        <Route path='/9-Himalayan-peaks-that-are-perfect-for-beginners-to-mountaineering' element={<Himalayan/>}></Route>

        {/* clubs */}

        <Route path='/American-Alpine-Club' element={<AAC/>}></Route>
        <Route path='/The-Alpine-Club' element={<TheAlpineClub/>}></Route>
        <Route path='/The-Himalayan-Club' element={<TheHimalayanClub/>}></Route>
        <Route path='/The-New-Zealand-Alpine-Club' element={<TheNewZealandAlpineClub/>}></Route>

        {/* News */}

        <Route path='/Letter-to-IFSC-Cites-Disappointment-Over-NEOM-Beach-Games' element={<NEOM_Beach_Games/>}></Route>
        <Route path='/Jakob-Schubert-Offers-a-Rare-Upgrade' element={<Rare_Upgrade/>}></Route>
        <Route path='/Jesse-Grupper-on-Winning-Golds' element={<Jesse_Grupper/>}></Route>
        <Route path='/Kai-Lightner-Just-Did-His-Hardest-Route-in-Eight-Years' element={<Kai_Lightner/>}></Route>
        <Route path='/Sling-Jams-Micro-Traxion' element={<Groundfall/>}></Route>
        <Route path='/Experienced-Guide-Dies-on-Cerro-Marmolejo' element={<Experienced_Guide/>}></Route>
        <Route path='/American-Trio-Blazes' element={<American_Trio_Blazes/>}></Route>

      </Routes>
    </BrowserRouter>
  );
}
export default App;