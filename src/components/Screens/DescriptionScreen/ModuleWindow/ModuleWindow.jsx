import s from './ModuleWindow.module.css'
import Cross from '../../../../resourses/png/btn_close.png'
import Plus from '../../../../resourses/png/plusPic.png'
import { MiniCarousel } from '../MiniCarousel/MiniCarousel'
import { useRef } from 'react'


export const ModuleWindow = () => {
    const moduleWindowRef = useRef(0)      

    const handleModuleWindow = () => {           
        moduleWindowRef.current.style.display === 'none' ?
        moduleWindowRef.current.style.display ='flex' :
        moduleWindowRef.current.style.display ='none'
    }
    
    return (
        <aside>
            <button className={s.moreButton} onClick={ handleModuleWindow } >
                <img src={Plus} alt="plus pic" /> Подробнее
            </button>
            <div ref={ moduleWindowRef } 
                 className={ s.moduleWindow } 
                 style={{ display: 'none' }}
            >                                        
                <div className={s.moduleView}>
                    <img src={Cross} alt="button close" onClick={handleModuleWindow} className={s.moduleClsBtn}/>
                    <div className={s.moduleContent}>
                        <h3 className={s.keywords}>Преимущества</h3>
                        <h2 className={s.brandname}>Brend<span>XY</span></h2> 
                        <MiniCarousel >
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
                            <ul className={s.list}>
                                <li className={s.listPoint}>
                                    04 
                                    <p className={s.listText}>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit
                                    </p>
                                </li >
                                <li className={s.listPoint}>
                                    05 
                                    <p className={s.listText}>
                                    Faucibus pulvinar elementum integer enim
                                    </p>
                                </li > 
                                <li className={s.listPoint}>
                                    06 
                                    <p className={s.listText}>
                                    Faucibus pulvinar elementum integer enim
                                    </p>
                                </li>
                            </ul>                                
                        </MiniCarousel>                        
                    </div>
                    
                                          
                </div>
            </div>
        </aside>
        
    )
}