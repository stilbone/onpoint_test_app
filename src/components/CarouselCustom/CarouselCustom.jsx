import { useState, useEffect, Children, cloneElement } from 'react'
import { ReactComponent as HomeSvg } from '../../resourses/svg/home.svg'
import { ReactComponent as OnpointLogo} from '../../resourses/svg/onpoint.svg'
import './CarouselCustom.css'

const PAGE_WIDTH = 100
const SWIPE_SENSITIVE = 50

export const CarouselCustom = ({ children }) => {
    const [pages, setPages] = useState([])
    const [offset, setOffset] = useState(0)
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);

    pages.defaultProps = {
        onClick : (() => handleRightScreen)
    }

    //Swipe management

    const handleTouchStart = (e) => {
        setTouchStart(e.targetTouches[0].clientX);
    }

    const handleTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    }

    const handleTouchEnd =() => {
        if (touchStart - touchEnd > SWIPE_SENSITIVE) {            
            handleRightScreen();
        }
        if (touchStart - touchEnd < SWIPE_SENSITIVE) {            
            handleLeftScreen();
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
                })
            })
        )
    }, [])

    // RENDER

    return(
        <div className="main-continer">
            <div className="header">
                <HomeSvg 
                    className="homeSvg"
                    alt="home icon svg"                                
                    onClick={() => {setOffset(0)}}
                /> 
                <h1 className='header-title'>Project</h1>
            </div> 
            <div className="window">
                <div 
                    className="all-pages-container" 
                    style = {{ transform: `translateX(${offset}vw)` }}                    
                    onTouchMove = { handleTouchMove }
                    onTouchStart = { handleTouchStart }
                    onTouchEnd = { handleTouchEnd }                    
                >
                    { pages }

                </div>                            
            </div>

            <div className="footer" onClick={handleRightScreen}>
                <OnpointLogo height='1.3vh'/>
            </div>            
        </div>
    )
}