import aboutSvg from '../assets/about.svg'
import SectionTitle from './SectionTitle'

import React from 'react'

const About = () => {
  return (
    <section className='bg-white py-20' id='about'>
      <div className='align-element grid md:grid-cols-2 items-center gap-16'>
        <img src={aboutSvg} className='w-full h-64' />
        <article>
          <SectionTitle text='code and coffee' />
          <p className='text-slate-600 mt-8 leading-loose'>
            As a dedicated Full Stack Developer, I am fueled by a passion for
            creating visually captivating applications that prioritize
            user-centric experiences. A collaborative team player with a proven
            track record in complex problem-solving and a strong work ethic, I
            lead with empathy and purpose, aiming to create inclusive spaces and
            meaningful interactions for all. With proficiency in both front-end
            and back-end technologies, I thrive on collaborating with diverse
            teams to bring impactful web applications and software to life.
            <br></br><br></br>
             ~
            Javascript, React, AWS, Java, Node.js, Wordpress, GCP, GKE, Helidon,
            Spring Boot, PostgreSQL, Google Analytics, Google Tag Manager,
            MySQL, Caspio, MongoDB, Bootstrap, HTML, CSS, Git, PHP, JQuery
            Technical Support and more! ~
          </p>
        </article>
      </div>
    </section>
  )
}

export default About
