import { useState, useEffect, Children, cloneElement } from 'react'
import { ReactComponent as HomeSvg } from '../../resourses/svg/home.svg'
import { ReactComponent as OnpointLogo} from '../../resourses/svg/onpoint.svg'
import './CarouselCustom.css'

const PAGE_WIDTH = 100
const SWIPE_SENSITIVE = 300

export const CarouselCustom = ({ children }) => {
    
    const [pages, setPages] = useState([])
    const [offset, setOffset] = useState(0)
    const [touchStartX, setTouchStartX] = useState(0);
    const [touchEndX, setTouchEndX] = useState(0);
    const [touchStartY, setTouchStartY] = useState(0);
    const [touchEndY, setTouchEndY] = useState(0);        

    //Swipe management

    const handleTouchStart = (e) => {               
        setTouchStartX(e.targetTouches[0].clientX);
        setTouchStartY(e.targetTouches[0].clientY);
    }

    const handleTouchMove = (e) => {
        setTouchEndX(e.targetTouches[0].clientX);
        setTouchEndY(e.targetTouches[0].clientY);
    }

    const newHandleTouchEnd = () => {
        const delta = {
            x: touchEndX - touchStartX,
            y: touchEndY - touchStartY
        }

        if (Math.abs(delta.x) > Math.abs(delta.y)) {    /// check axis of motion

            if ( Math.abs(delta.x) > SWIPE_SENSITIVE) { // check swipe sensivity

                if (delta.x > 0) {                      // if delta X greater than zero, then move to the left             
                    handleLeftScreen()
                }
                else {                                  // else move to the right
                    handleRightScreen()                   
                }
            }
        }          
    }

    // Screen motion function

    const handleLeftScreen = () => {        
        setOffset((currentOffset) => {
            const newOffset = currentOffset + PAGE_WIDTH            
            return Math.min(newOffset, 0)
        })
    }

    const handleRightScreen= () => {        
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
                    mainButtonHandler: () => setOffset(-100),
                    offset: offset,
                })
            })
        )
    }, [offset])

    // RENDER

    return(
        <div className="main-container">
            <header className="header">
                <HomeSvg 
                    className="homeSvg"
                    alt="home icon svg"                                
                    onClick={() => {setOffset(0)}}
                /> 
                <h1 className='header-title'>Project</h1>
            </header> 
            <main className="window">
                <div 
                    className="all-pages-container" 
                    style = {{ transform: `translateX(${offset}vw)` }}                    
                    onTouchMove = { handleTouchMove }
                    onTouchStart = { handleTouchStart }
                    onTouchEnd = { newHandleTouchEnd }                    
                >
                    { pages }

                </div>                            
            </main>

            <footer className="footer" onClick={handleRightScreen}>
                <OnpointLogo height='1.5vh'/>
            </footer>            
        </div>
    )
}