import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/pic1.jpg'
import IMG2 from '../../assets/pic7.jpg'
import IMG3 from '../../assets/pic9.jpg'
import IMG4 from '../../assets/pic4.jpg'
import IMG5 from '../../assets/pic5.jpg'
import IMG6 from '../../assets/pic6.jpg'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
      <article className='portfolio__item'>
      <div className="portfolio__item-image">
      <img src={IMG1} alt="" />
      </div>
      <h3>Translator</h3>
      <div className="portfolio__item-cta">
      <a href="https://github.com/KirilPetkov" className='btn' target='_blank'>GitHub</a>
      <a href="https://www.linkedin.com/in/kiril-petkov-5079611bb/" className='btn btn-primary' target='_blank'>Live Demo</a>
      </div>
      </article>
      <article className='portfolio__item'>
      <div className="portfolio__item-image">
      <img src={IMG2} alt="" />
      </div>
      <h3>Cooking Recipes</h3>
      <div className="portfolio__item-cta">
      <a href="https://github.com/KirilPetkov" className='btn' target='_blank'>GitHub</a>
      <a href="https://www.linkedin.com/in/kiril-petkov-5079611bb/" className='btn btn-primary' target='_blank'>Live Demo</a>
      </div>
      </article>
      <article className='portfolio__item'>
      <div className="portfolio__item-image">
      <img src={IMG3} alt="" />
      </div>
      <h3>Blog</h3>
      <div className="portfolio__item-cta">
      <a href="https://github.com/KirilPetkov" className='btn' target='_blank'>GitHub</a>
      <a href="https://www.linkedin.com/in/kiril-petkov-5079611bb/" className='btn btn-primary' target='_blank'>Live Demo</a>
      </div>
      </article>
      <article className='portfolio__item'>
      <div className="portfolio__item-image">
      <img src={IMG4} alt="" />
      </div>
      <h3>Music Player</h3>
      <div className="portfolio__item-cta">
      <a href="https://github.com/KirilPetkov" className='btn' target='_blank'>GitHub</a>
      <a href="https://www.linkedin.com/in/kiril-petkov-5079611bb/" className='btn btn-primary' target='_blank'>Live Demo</a>
      </div>
      </article>
      <article className='portfolio__item'>
      <div className="portfolio__item-image">
      <img src={IMG5} alt="" />
      </div>
      <h3>Pet Tracker</h3>
      <div className="portfolio__item-cta">
      <a href="https://github.com/KirilPetkov" className='btn' target='_blank'>GitHub</a>
      <a href="https://www.linkedin.com/in/kiril-petkov-5079611bb/" className='btn btn-primary' target='_blank'>Live Demo</a>
      </div>
      </article>
      <article className='portfolio__item'>
      <div className="portfolio__item-image">
      <img src={IMG6} alt="" />
      </div>
      <h3>Shopping Helper</h3>
      <div className="portfolio__item-cta">
      <a href="https://github.com/KirilPetkov" className='btn' target='_blank'>GitHub</a>
      <a href="https://www.linkedin.com/in/kiril-petkov-5079611bb/" className='btn btn-primary' target='_blank'>Live Demo</a>
      </div>
      </article>
      </div>
    </section>
  )
}

export default Portfolio