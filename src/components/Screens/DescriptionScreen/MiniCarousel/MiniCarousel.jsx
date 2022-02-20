import s from './MiniCarousel.module.css'
import { useState, useEffect, Children, cloneElement } from 'react'

const PAGE_WIDTH = 100;

export const  MiniCarousel = ({ children }) => {
    
    const [pages, setPages] = useState([])
    const [offset, setOffset] = useState(0)
    
    let classNamePoint1 = `${s.point} ${s.point1} ${s.pointFill}`
    let classNamePoint2 = `${s.point} ${s.point2} `
    
    if (offset === -100) {
        classNamePoint1 = `${s.point} ${s.point1} `
        classNamePoint2 = `${s.point} ${s.point2} ${s.pointFill}`
    }

    // Screen motion function    

    const handleLeftScreen = () => { 
                
        setOffset((currentOffset) => {
            const newOffset = currentOffset + PAGE_WIDTH                   
            return Math.min(newOffset, 0)
        })
    }

    const handleRightScreen = () => {        
        setOffset((currentOffset) => {
            const newOffset = currentOffset - PAGE_WIDTH            
            const maxOffset = -(PAGE_WIDTH * (pages.length - 1))            
            return Math.max(newOffset, maxOffset) 
        })
    }
    
    // Сloning children for screen detection and save to state

    useEffect(() => {
        setPages(
            Children.map(children, (child) => {
                return cloneElement(child, {
                    style: {
                        height: '100%',
                        minWidth: `${PAGE_WIDTH}vw`,
                        maxWidth: `${PAGE_WIDTH}vw`,
                    },                       
                })
            })
        )
    }, [])

    // RENDER

    return(
        <div className={s.mainContainer}>            
            <div className={s.window}>
                <div 
                    className={s.allPagesContainer} 
                    style = {{ transform: `translateX(${offset}vw)` }}              
                >
                    { pages }

                </div> 
                <div className={s.navPanel}>
                        <i className={s.leftArrow} onClick={ handleLeftScreen }/>
                        <i className={classNamePoint1} onClick={ handleLeftScreen } />
                        <i className={classNamePoint2} onClick={ handleRightScreen } />
                        <i className={s.rightArrow} onClick={ handleRightScreen}/>
                    </div>                       
            </div>

                    
        </div>
    )
}