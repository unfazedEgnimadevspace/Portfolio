import React from 'react'
import './Portifolio.css'


import IMG2 from '../../assets/mockup-of-a-woman-working-on-a-macbook-2316-el1 (2).png'
import IMG3 from '../../assets/mockup-of-a-woman-working-on-a-macbook-2316-el1 (1).png'
import IMG4 from '../../assets/mockup-of-a-macbook-pro-placed-on-a-modern-working-desk-2442-el1.png'
import IMG5 from '../../assets/mockup-featuring-a-macbook-placed-on-a-desk-at-an-office-2441-el1.png'
import IMG6 from '../../assets/mockup-of-a-woman-working-on-a-macbook-2316-el1.png';


const data = [
   {
      id: 1,
      img: IMG2,
      title: 'Movie db',
      github: 'https://github.com/unfazedEgnimadevspace/Movie-DB',
      demo: 'https://daniel-movie-db.netlify.app/'
   },
   {
      id: 2,
      img: IMG3,
      title: 'Chicken City',
      github: 'https://github.com/unfazedEgnimadevspace/Restaurant-app',
      demo: 'https://chicken-city-react-website.netlify.app/'
   },
   
   {
      id: 3,
      img: IMG4,
      title: 'Covid-19 Tracker',
      github: 'https://github.com/unfazedEgnimadevspace/Covid-19-tacker-app',
      demo: 'https://daniel-covid-19-tracker.netlify.app/',
   },
   {
      id: 4,
      img: IMG5,
      title: 'Furniture Website',
      github: 'https://github.com/unfazedEgnimadevspace/Furniture-websites',
      demo: 'https://daniels-furniture-website.netlify.app/',
   },
   {
      id: 5,
      img: IMG6,
      title: 'Spotify Clone',
      github: 'https://github.com/unfazedEgnimadevspace/Spotify-Clone',
      demo: 'https://daniel-spotify-clone-app.netlify.app/',
   }
   
]


const Portifolio = () => {
   
  return (
    <section id='portifolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
         {data && data.map((item) => (
             <article className='portfolio' key={item?.id}>
             <div className="portfolio__item-image">
                <img src={item?.img} alt={item?.img}  />
             </div>
             <h3>
               {item?.title}
             </h3>
             
             <div className="portfolio__item-cta">
             <a href={item?.github} rel='noreferrer' className='btn' target={'_blank'}>Github Repo</a>
             <a href={item?.demo} className='btn btn-primary' target={'_blank'} rel='noreferrer'>Live demo</a>
             </div>
       </article>
       
         ))}
       
      </div>
    </section>
    
  )
}

export default Portifolio