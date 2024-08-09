import './Image-Modal.css';

export default function ImageModal({modalImage, modalOri, onClose}) {
    return(
        <section className='image-modal'>
            <div>
                <button onClick={onClose} className='material-symbols-outlined'>close</button>
                <img src={modalImage} className={modalOri === 'landscape' ? 'landscape' : 'portrait'} />
            </div>
        </section>
    )
}