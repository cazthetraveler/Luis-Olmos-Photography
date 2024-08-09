import { useLocation } from 'react-router-dom';

import './Project.css';
import { useState } from 'react';
import ImageModal from '../components/Image-Modal';

export default function Project() {
    const location = useLocation();
    const {project} = location.state || {};

    const [modalImage, setModalImage] = useState(null);

    const openModal = (image) => {
        setModalImage(image);
    };

    const closeModal = () => {
        setModalImage(null);
    };

    if (!project) {
        return <h1>Project Not Found!</h1>
    }

    const odds = project.pictures.filter((_, index) => index % 2 !== 0);
    const evens = project.pictures.filter((_, index) => index % 2 === 0);

    return (
        <main className='project-page'>
            <section className='project'>
                <h1>{project.title}</h1>
                <p>{project.description}</p>
                <div className='project-display'>
                    <div className='column'>
                        {evens.map((picture, index) => (
                            <img key={index} src={picture.picture} alt={picture.alt} onClick={() => openModal(picture)} />
                        ))}
                    </div>
                    <div className='column'>
                        {odds.map((picture, index) => (
                                <img key={index} src={picture.picture} alt={picture.alt} onClick={() => openModal(picture)} />
                        ))}
                    </div>
                </div>
            </section>
            {modalImage && <ImageModal modalImage={modalImage.picture} modalOri={modalImage.ori} onClose={closeModal}  />}
        </main>
    )
}