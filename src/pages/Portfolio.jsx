import { useState } from 'react';
import { Link } from "react-router-dom";

import gallery from '../gallery';
import './Portfolio.css';


export default function Portfolio() {
    const [cat, setCat] = useState('all');
    const changeCat = (category) => {
        setCat(category);
    };

    const filterGallery = gallery.filter((project) => cat === 'all' || project.cat === cat);

    return(
        <main className='portfolio-page'>
            <section className='portfolio'>
                <h1>Portfolio</h1>
                <div>
                    <span><button className={cat === 'all' ? 'active' : ''} onClick={() => changeCat('all')}>ALL</button> | <button className={cat === 'product' ? 'active' : ''} onClick={() => changeCat('product')}>PRODUCT</button> | <button className={cat === 'portrait' ? 'active' : ''} onClick={() => changeCat('portrait')}>PORTRAIT</button></span>
                </div>
                <section className='port-gallery'>
                    {filterGallery.map((project) => {
                        return(
                            <figure key={project.id} title={project.title}>
                                <Link to={`/${project.cat}/${project.id}`} state={{project}}>
                                    <img title={project.title} src={project.pictures[0].picture} alt={project.description} loading='lazy' />
                                </Link>
                            </figure>
                        )
                    })}
                </section>
            </section>
        </main>
    )
}