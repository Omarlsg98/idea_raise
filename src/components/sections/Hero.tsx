import classNames from 'classnames'
import Image from 'next/image'
import { FC, memo } from 'react'

import { SectionId } from '../../data/data'
import Section from '../layouts/Section'
import Socials from '../Socials'

import imageSrc from '../../images/hero_idea_raise_x2.png'

const Hero: FC = memo(() => {
  return (
    <Section noPadding sectionId={SectionId.Hero}>
      <div className='relative flex h-screen w-full items-center justify-center'>
        <Image
          alt='Logo of Idea Raise'
          className='absolute z-0 h-full w-full object-cover'
          placeholder='blur'
          priority
          src={imageSrc}
        />
        <div className='z-10  max-w-screen-lg px-4 lg:px-0'>
          <div className='flex flex-col items-center gap-y-6 rounded-xl bg-gray-800/40 p-6 text-center shadow-lg backdrop-blur-sm'>
            <h1 className='text-4xl font-bold text-white sm:text-5xl lg:text-7xl'>
              Welcome to Idea Raise!
            </h1>
            <span className='text-xl text-neutral-300'>
              Idea Raise is a platform to gather together around common needs to collectively define
              them, refine them, and raise the funds to make them a reality. <br />
              Come here to find people with similar needs to you, so you can work together to make
              your ideas a reality!
            </span>
            <div className='flex gap-x-4 text-neutral-100'>
              <Socials />
            </div>
            <div className='flex w-full justify-center gap-x-4'>
              <a
                className={classNames(
                  'flex gap-x-2 rounded-full border-2 bg-none px-4 py-2 text-sm font-medium text-white ring-offset-gray-700/80 hover:bg-gray-700/80 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:text-base',
                  'border-teal-500 ring-teal-500',
                )}
                href={`/#${SectionId.IdeaCenter}`}
                key={'Idea Center'}
              >
                'Go to Idea Center!'
              </a>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
})

Hero.displayName = 'Hero'
export default Hero
