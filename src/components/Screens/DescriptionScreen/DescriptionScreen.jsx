import s from './DescriptionScreen.module.css'
import Bottle from '../../../resourses/png/bottle.png'
import Cutlery from '../../../resourses/png/cutlery.png'
import Calendar from '../../../resourses/png/calendar.png'
import Bubble1 from '../../../resourses/png/bubble1.png'
import Bubble2 from '../../../resourses/png/bubble2.png'
import Bubble3 from '../../../resourses/png/bubble3.png'
import Bubble4 from '../../../resourses/png/bubble4.png'
import { ModuleWindow } from './ModuleWindow/ModuleWindow'


export const DescriptionScreen = () => {

    return( 
        <div className={s.main}>
            <div className={s.content}>
                <img className={s.bottle} src={Bottle} alt="bottle img" />
                <h3 className={s.keywords}>Ключевое сообщение</h3>
                <h2 className={s.brandname}>Brend<span>XY</span></h2>
                <div className={s.features}>                    
                    <p className={s.features1}>
                        <img className={s.featiresIcon} src={Cutlery} alt="cutlery icon" />
                        Ehicula ipsum a arcu cursus vitae. Eu non diam phasellus vestibulum lorem sed risus ultricies
                    </p>
                    <div className={s.rightSide}>
                        <p className={s.features2}>
                            <img className={s.featiresIcon} src={Calendar} alt="calendar icon" />
                            A arcu cursus vitae                        
                        </p>                        
                        <ModuleWindow />
                    </div>                                      
                </div>                
                <div className={s.bubbles}>
                    <img className={s.bubble1} src={Bubble1} alt='bubble1' />
                    <img className={s.bubble2} src={Bubble2} alt='bubble2' />
                    <img className={s.bubble3} src={Bubble3} alt='bubble3' />
                    <img className={s.bubble4} src={Bubble3} alt='bubble4' />
                    <img className={s.bubble5} src={Bubble2} alt='bubble5' />
                    <img className={s.bubble6} src={Bubble4} alt='bubble6' />
                    <img className={s.bubble7} src={Bubble3} alt='bubble7' />
                    <img className={s.bubble8} src={Bubble3} alt='bubble8' />
                </div>
            </div>
            
        </div>
    )
}