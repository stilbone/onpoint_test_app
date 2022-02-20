import s from './MainScreen.module.css'
import Arrow from '../../../resourses/png/arrow.png'
import Thing1 from '../../../resourses/png/thing1.png'
import Thing2 from '../../../resourses/png/thing2.png'
import Thing3 from '../../../resourses/png/thing3.png'
import Thing4 from '../../../resourses/png/thing4.png'
import Thing5 from '../../../resourses/png/thing5.png'
import Animated_thing1 from '../../../resourses/png/animated_thing1.png'
import Animated_thing2 from '../../../resourses/png/animated_thing2.png'
import Animated_thing3 from '../../../resourses/png/animated_thing3.png'
import Animated_thing4 from '../../../resourses/png/animated_thing4.png'


export const MainScreen = props => {
    return( 
        <div className={s.main}>
            <div className={s.wrapper}>
                <h3 className={s.hello}>Привет,</h3>
                <div  className={s.section}>
                    <h2 className={s.title}>это <span>не</span> коммерческое  задание </h2>
                    <button onClick={props.mainButtonHandler}>
                        <img src={Arrow} className={s.buttonArrow} alt="arrow pic"/>
                        Что дальше?
                    </button>                
                </div>
                <div className={s.patterns}>                    
                        <img src={Thing1} className={s.thing1} alt="thing1" />                    
                        <img src={Thing2} className={s.thing2} alt="thing1" />                   
                        <img src={Thing3} className={s.thing3} alt="thing1" />                    
                        <img src={Thing4} className={s.thing4} alt="thing1" />                    
                        <img src={Thing5} className={s.thing5} alt="thing1" />                    
                        <img src={Animated_thing1} className={s.animated_thing1} alt="animated_thing1"/>                   
                        <img src={Animated_thing2} className={s.animated_thing2} alt="animated_thing2"/>                   
                        <img src={Animated_thing3} className={s.animated_thing3} alt="animated_thing3"/>                    
                        <img src={Animated_thing4} className={s.animated_thing4} alt="animated_thing4"/>                    
                </div> 
            </div>
            

        </div>
    )
}