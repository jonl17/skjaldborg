import { IGatsbyImageData } from 'gatsby-plugin-image'

export interface IScheduleItem {
  date: Date
  title: string
  description: {
    html: string
  }
  image: {
    url: string
    alt: string
    gatsbyImageData: IGatsbyImageData
  }
  url: string
  excerpt: {
    html: string
  }
  sameSlotSort: number
  type?: string
}
