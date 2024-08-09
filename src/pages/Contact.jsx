import { Link } from 'react-router-dom';
import './Contact.css';

export default function Contact() {
    return(
        <main className='contact-page'>
            <section className='contact'>
                <h1>Contact Me!</h1>
                <h2>I am currently located at Del Rio, Texas</h2>
                <div className='social-media'>
                    <Link to='https://www.unsplash.com/@lost_order' target='_blank'><i className='fa-brands fa-unsplash'></i></Link>
                    <Link to='https://www.instagram.com/olmos.luisd' target='_blank'><i className='fa-brands fa-instagram'></i></Link>
                </div>
                <div className='contact-info'>
                    <Link href='mailto:olmos.luisd@outlook.com'>Send me an Email!</Link>
                    <Link to='http://olmos-luis-portfolio.netlify.app/' target='_blank'>Check out my website!</Link>
                </div>
            </section>
        </main>
    )
}