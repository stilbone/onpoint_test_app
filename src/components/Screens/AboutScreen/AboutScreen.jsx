import s from './AboutScreen.module.css'
import Tozoids from '../../../resourses/png/tozoids.png'

export const AboutScreen = () => {
    return( 
        <div className={s.main}>
            <h2 className={s.title}>Текст сообщения</h2>
            <p className={s.text}><span>Lorem ipsum dolor sit amet,</span> consectetur 
                adipisicing elit. Cupiditate eligendi accusamus debitis enim magnam quam molestiae, 
                voluptates ipsa ad optio nemo neque esse impedit. Velit, sunt cum! Ex error ipsa 
                nihil quidem earum ab eveniet libero nisi corrupti molestiae tempora laudantium 
                placeat rem facilis quibusdam voluptas deserunt fuga possimus tempore cupiditate, 
                reprehenderit dolor est magni dolorem. Labore quos beatae consequatur earum qui neque 
                minus eum consequuntur facilis ipsum nostrum numquam deleniti possimus iure veniam quas 
                rerum sit alias reprehenderit repellat fugit laborum, fuga ab magnam. Veritatis, 
                praesentium minus sunt iure in ipsa nisi similique quisquam aliquam. Adipisci, consectetur? 
                Velit est voluptates nihil voluptas facere dolorum incidunt non recusandae, nulla corporis ea 
                placeat sint eum explicabo, iusto tempore error totam quis suscipit laboriosam architecto! 
                Et illum aspernatur minus saepe architecto neque, alias facilis nisi hic, repellendus, nihil 
                placeat deleniti odio veniam aperiam. Libero, asperiores dicta voluptatibus nam dolorum temporibus 
                nostrum in maxime nesciunt ratione incidunt minus consequuntur, est repellat id autem velit! 
                Tempore, sint quo exercitationem architecto minus ullam labore culpa perferendis totam, saepe 
                dolorem quasi molestias placeat mollitia perspiciatis soluta maxime ipsam excepturi. Officia magni 
                praesentium consequuntur veritatis ipsa repudiandae cumque minima totam, sit architecto dolores, 
                veniam consectetur culpa doloribus!
            </p>
            <div className={s.tozoids}>
                <img src={Tozoids} alt="tozoids image" />
            </div>
        </div>
    )
}