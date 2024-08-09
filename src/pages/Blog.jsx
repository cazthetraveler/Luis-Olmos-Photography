import { useState } from 'react';
import './Blog.css';
import ImageModal from '../components/Image-Modal';

export default function Blog() {
    const [modalImage, setModalImage] = useState(null);

    const openModal = (image) => {
        setModalImage(image);
    };

    const closeModal = () => {
        setModalImage(null);
    };

    return(
        <main className='blog-page'>
            <section className='about-me'>
                <h1>About Me</h1>
                <img loading='lazy' className='image-me' src='https://images.unsplash.com/photo-1721106109360-4844d504d44d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
                <h2>How It Started</h2>
                <p>Hello, my name is Luis Olmos and I am an aspiring photographer. It all started when I was little and had a fascination with video and our family&apos;s camcorder. From there, I got my first digital camera on my 10th birthday. I used to take both video and pictures whenever I could. I had a creative mind and interest when I was younger and wanted to be able to express it through storytelling.</p>
                <p>When I got my first smartphone on my 12th birthday, I had access to Instagram and wanted to post as many pictures as I can. I think this is where my first interest for photography started. I wasn&apos;t really keen to taking pictures of myself, but I loved taking photos of random objects. Then it turned into taking pictures of flowers and then the world around me. Eventually I started to take pictures of myself and start to see myself in a way where I should love myself and the way I look.</p>
                <h2>My Experience</h2>
                <p>During college, I bought my first DSLR camera, which was the Canon Rebel T100. It was my first big purchase ever and I was so excited to use it! I was taking photography classes and learned how to use Manual Mode and then I started to learn more about photo editing. In 2022, I graduated with an Associate&apos;s of Applied Science in Digital Media Design. Ever since then, I&apos;ve been trying my best to capture as many great photos as I can. I tried my hand in taking landscape photos, to product photography and now I&apos;m taking my hand into portraits.</p>
                <h2>More Things About Myself</h2>
                <p>Whenever I can, I love taking new photos when I go out on trips. A lot of the landscape photos I&apos;ve been taking are solely from trips. So far, I&apos;ve been to Colorado, Hawaii, New Mexico, Arizona and California. I love traveling and seeing what each place has to offer. One day, I hope to travel outside the United States.</p>
                <h2>My Favorite Photos</h2>
                <div className='gallery'>
                    <div className='column'>
                        <img onClick={() => openModal('https://images.unsplash.com/photo-1721264256227-0600860b216d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')} loading='lazy' title='Western Tanager, taken at Manitou Incline' src='https://images.unsplash.com/photo-1721264256227-0600860b216d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='western tanager' />
                        <img onClick={() => openModal('https://images.unsplash.com/photo-1712617733726-dd4b6c1ad9f4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')} loading='lazy' title='Eclipse, taken at Del Rio TX' src='https://images.unsplash.com/photo-1712617733726-dd4b6c1ad9f4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='solar eclipse' />
                        <img onClick={() => openModal('https://images.unsplash.com/photo-1691547800783-d725eafdd897?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')} loading='lazy' title='Hot Air Balloon, taken at Steamboat Springs CO' src='https://images.unsplash.com/photo-1691547800783-d725eafdd897?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='hot air balloon' />
                        <img onClick={() => openModal('https://images.unsplash.com/photo-1722214286806-153783e6ce90?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')} loading='lazy' title='Glass Coffee Mug, taken at The Spin Coffee & Vinyl at San Antonio TX' src='https://images.unsplash.com/photo-1722214286806-153783e6ce90?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='glass coffee mug' />
                    </div>
                    <div className='column'>
                        <img onClick={() => openModal('https://images.unsplash.com/photo-1721427192168-4aa2f7955394?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')} loading='lazy' title='Pond, taken at Cripple Creek CO' src='https://images.unsplash.com/photo-1721427192168-4aa2f7955394?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='hilly area with small pond' />
                        <img onClick={() => openModal('https://images.unsplash.com/photo-1721363472738-a1060b35345f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')} loading='lazy' title='Taken at the Garden of the Gods' src='https://images.unsplash.com/photo-1721363472738-a1060b35345f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='rock formations' />
                        <img onClick={() => openModal('https://images.unsplash.com/photo-1721781060617-2c451646fee7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')} loading='lazy' title='Finney' src='https://images.unsplash.com/photo-1721781060617-2c451646fee7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='my shih tzu puppy, Finney' />
                    </div>
                </div>
            </section>
            {modalImage && <ImageModal modalImage={modalImage} onClose={closeModal} />}
        </main>
    )
}