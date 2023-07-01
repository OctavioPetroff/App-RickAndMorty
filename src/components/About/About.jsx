import styles from './About.module.css'

export default function About() {
    return(
        <div className= {styles.container}>
            <h1 className= {styles.info}>Creador: Octavio Petroff</h1>
            <h2 className= {styles.info}>Si llegaste hasta acá, te felicito! Porque eso significa que viste este P.I. y aún no moriste del asco, en este mundo 
            necesitamos más gente como vos, gracias por tanto y perdón por tan poco.
            </h2>
            <h3 className= {styles.info}>P.I. "App Rick & Morty"</h3>
        </div>
    )
}