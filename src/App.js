import './App.css';
import { CarouselCustom } from './components/CarouselCustom/CarouselCustom';
import { MainScreen } from './components/Screens/MainScreen/MainScreen'
import { AboutScreen } from './components/Screens/AboutScreen/AboutScreen'
import { DescriptionScreen } from './components/Screens/DescriptionScreen/DescriptionScreen'

function App() {
  return (
    <div className="App">
        <CarouselCustom>
          <div className='item'>
            <MainScreen />
          </div>
          <div className='item'>
            <AboutScreen />
          </div>
          <div className='item'>
            <DescriptionScreen />
          </div>
        </CarouselCustom>
    </div>
  );
}

export default App;
