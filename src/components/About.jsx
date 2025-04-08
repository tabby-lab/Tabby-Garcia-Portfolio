import aboutSvg from '../assets/about.svg'
import SectionTitle from './SectionTitle'

import React from 'react'

const About = () => {
  return (
    <section className='bg-white py-20' id='about'>
      <div className='align-element grid md:grid-cols-2 items-center gap-16'>
        <img src={aboutSvg} className='w-full h-64' />
        <article>
          <SectionTitle text='tech and coffee' />
          <p className='text-slate-600 mt-8 leading-loose'>
            Driven by curiosity and a commitment to meaningful impact, I thrive
            in roles where I can blend technical problem-solving with
            human-centered support. I enjoy diving deep into complex systems,
            uncovering root causes, and turning challenges into opportunities
            for learning and improvement. Whether working directly with users,
            collaborating cross-functionally, or shaping implementation
            strategies, I bring empathy, adaptability, and a proactive mindset
            to every interaction—always aiming to deliver solutions that are
            both effective and empowering.
            <br></br>
            <br></br>~ Technical Support, Javascript, React, AWS, Java, Node.js,
            Wordpress, GCP, GKE, Helidon, Spring Boot, PostgreSQL, Google
            Analytics, Google Tag Manager, MySQL, Caspio, MongoDB, Bootstrap,
            HTML, CSS, Git, PHP, JQuery and more! ~
          </p>
        </article>
      </div>
    </section>
  )
}

export default About
