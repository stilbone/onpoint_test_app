import s from './DescriptionScreen.module.css'
import Bottle from '../../../resourses/png/bottle.png'
import Plus from '../../../resourses/png/plusPic.png'
import Cutlery from '../../../resourses/png/cutlery.png'
import Calendar from '../../../resourses/png/calendar.png'
import Bubble1 from '../../../resourses/png/bubble1.png'
import Bubble2 from '../../../resourses/png/bubble2.png'
import Bubble3 from '../../../resourses/png/bubble3.png'
import Bubble4 from '../../../resourses/png/bubble4.png'
import Bubble5 from '../../../resourses/png/bubble5.png'
import Bubble6 from '../../../resourses/png/bubble6.png'
import Bubble7 from '../../../resourses/png/bubble7.png'
import Bubble8 from '../../../resourses/png/bubble8.png'
import Cross from '../../../resourses/png/btn_close.png'
import { useRef } from 'react'


export const DescriptionScreen = () => {
        const moduleWindow = useRef(0)
    
       const handleModule = () => {
            if (moduleWindow.current.style.display == 'none')
                moduleWindow.current.style.display ='flex'
            else moduleWindow.current.style.display ='none'
       }
    


    return( 
        <div className={s.main}>
            <div className={s.content}>
                <img className={s.bottle} src={Bottle} alt="bottle img" />
                <h3 className={s.keywords}>Ключевое сообщение</h3>
                <h2 className={s.brandname}>Brend<span>XY</span></h2>
                <div className={s.features}>                    
                    <p className={s.features1}>
                        <img className={s.featiresIcon} src={Cutlery} alt="cutlery icon" />
                        Ehicula ipsum a arcu 
                        cursus vitae. Eu non 
                        diam phasellus 
                        vestibulum lorem sed 
                        risus ultricies
                    </p>
                    <div className={s.rightSide}>
                        <p className={s.features2}>
                            <img className={s.featiresIcon} src={Calendar} alt="calendar icon" />
                            A arcu cursus vitae                        
                        </p>  
                        <button className={s.moreButton} onClick={handleModule}>
                            <img src={Plus} alt="plus pic" />
                            Подробнее
                        </button>
                    </div>                                      
                </div>

                <div 
                    ref={moduleWindow} className={s.moduleWindow} style={{display: 'none',}}
                >
                    <div className={s.moduleView}>
                        <img src={Cross} alt="button close" onClick={handleModule} className={s.moduleClsBtn}/>
                        <div className={s.moduleContent}>
                            <h3 className={s.keywords}>Преимущества</h3>
                            <h2 className={s.brandname}>Brend<span>XY</span></h2>                            
                            <ul className={s.list}>
                                <li className={s.listPoint}>
                                    01 
                                    <p className={s.listText}>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit
                                    </p>
                                </li >
                                <li className={s.listPoint}>
                                    02 
                                    <p className={s.listText}>
                                    Faucibus pulvinar elementum integer enim
                                    </p>
                                </li > 
                                <li className={s.listPoint}>
                                    03 
                                    <p className={s.listText}>
                                    Faucibus pulvinar elementum integer enim
                                    </p>
                                </li>
                            </ul>
                        </div>
                        
                    </div>
                </div>

                <div className={s.bubbles}>
                    <img className={s.bubble1} src={Bubble1}></img>
                    <img className={s.bubble2} src={Bubble2}></img>
                    <img className={s.bubble3} src={Bubble3}></img>
                    <img className={s.bubble4} src={Bubble4}></img>
                    <img className={s.bubble5} src={Bubble5}></img>
                    <img className={s.bubble6} src={Bubble6}></img>
                    <img className={s.bubble7} src={Bubble7}></img>
                    <img className={s.bubble8} src={Bubble8}></img>
                </div>
            </div>
            
        </div>
    )
}