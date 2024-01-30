import InstagramIcon from '../components/Icon/InstagramIcon'
import LinkedInIcon from '../components/Icon/LinkedInIcon'
import { ContactSection, ContactType, HomepageMeta, Social } from './dataDef'

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  IdeaCenter: 'ideas',
  Contact: 'contact',
} as const

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Idea Rise',
  description: 'The platform to unite around ideas to make them a reality.',
}

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: "Let's connect!",
  description:
    "If you want to connect with me for new opportunities, collaboration, or just to say hi, I'm always open to new ideas and opportunities.",
  items: [
    {
      type: ContactType.LinkedIn,
      text: 'omar-sanchez-tb1',
      href: 'https://www.linkedin.com/in/omar-sanchez-tb1/',
    },
    {
      type: ContactType.Email,
      text: 'omarleonardosanchez@hotmail.com',
      href: 'mailto:omarleonardosanchez@hotmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Pittsburgh PA, United States',
      href: 'https://maps.app.goo.gl/VnQ5N2yX1Uqxbtef8',
    },
    {
      type: ContactType.Instagram,
      text: '@Omarlsg98',
      href: 'https://www.instagram.com/Omarlsg98/',
    },
  ],
}

/**
 * Social items
 */
export const socialLinks: Social[] = [
  { label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/omar-sanchez-tb1/' },
  { label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/Omarlsg98/' },
]
