import css from './HomePage.module.scss'
import { Footer } from '../footer/Footer'

type HeaderProps = {
    title: string;
    description: string
}

export const HomePage = ({ title,  description }: HeaderProps) => {

    return (
        <div className={css.homePage} >
            <br />
            <br />
            <div className={css.tAd}>
                <h1 className={css.title}>{title}</h1>
                <p className={css.description}><br />!האתר האולטימטיבי למסעדות כשרות<br />
                    .אתר זה נועד במיוחד בשבילך על מנת להקל את תהליך חיפוש אחר מסעדות כשרות בדרום<br />
                    .תוכלו למצוא לחפש מאפיינים מסויימים ולקבל את המענה הרצוי<br />
                    </p>
            </div>
                
            <br /><br /><Footer /><br /><br /><br /><br /><br /><br /><br /><br />
            
        </div>
    )
}