import { FC, ForwardRefExoticComponent, SVGProps } from 'react'
import { IconProps } from '../components/Icon/Icon'

export interface HomepageMeta {
  title: string
  description: string
  ogImageUrl?: string
  twitterCardType?: 'summary' | 'summary_large'
  twitterTitle?: string
  twitterSite?: string
  twitterCreator?: string
  twitterDomain?: string
  twitterUrl?: string
  twitterDescription?: string
  twitterImageUrl?: string
}

/**
 * Social items
 */
export interface Social {
  label: string
  Icon: FC<IconProps>
  href: string
}

/**
 * Contact section
 */
export interface ContactSection {
  headerText?: string
  description: string
  items: ContactItem[]
}

export const ContactType = {
  Email: 'Email',
  Phone: 'Phone',
  Location: 'Location',
  LinkedIn: 'LinkedIn',
  Twitter: 'Twitter',
  Instagram: 'Instagram',
} as const

export type ContactType = (typeof ContactType)[keyof typeof ContactType]

export interface ContactItem {
  type: ContactType
  text: string
  href?: string
}

export interface ContactValue {
  Icon: FC<IconProps> | ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, 'ref'>>
  srLabel: string
}
