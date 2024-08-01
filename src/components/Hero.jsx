import heroImg from '../assets/hero.svg'
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa'

import React from 'react'

const Hero = () => {
  return (
    <div className='bg-emerald-100 py-24'>
      <div className='mx-auto max-w-7xl px-8 grid md:grid-cols-2 items-center gap-8'>
        <article>
          <h1 className='text-7xl fornt-bold tracking-wider'>I'm Tabby</h1>
          <p className='mt-4 text-3xl text-slate-700 capitalize tracking-wide'>
            Full Stack Developer
          </p>
        </article>
      </div>
    </div>
  )
}

export default Hero
