import './App.css';
import { CarouselCustom } from './components/CarouselCustom/CarouselCustom';
import { MainScreen } from './components/Screens/MainScreen/MainScreen'
import { AboutScreen } from './components/Screens/AboutScreen/AboutScreen'
import { DescriptionScreen } from './components/Screens/DescriptionScreen/DescriptionScreen'

function App() {
  return (
    <div className="App">
        <CarouselCustom>          
            <MainScreen />          
            <AboutScreen />          
            <DescriptionScreen />          
        </CarouselCustom>
    </div>
  );
}

export default App;
