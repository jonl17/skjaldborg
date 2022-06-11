import React from 'react'
import { useGetOldHonourGuest } from '../../hooks/useGetOldHonourGest'
import { cleanUpSlug } from '../../utils'
import BlockGrid from '../../reusableComponents/BlockGrid/BlockGrid'

const DocsAndEvents = ({ items }: Queries.PrismicPageDataBodyDocsAndEvents) => {
  const oldGuests = useGetOldHonourGuest()
  console.log(items)
  return (
    <div>
      <section className='h-full relative p-4 lg:p-8'>
        <BlockGrid
          title='2022'
          items={items.map((doc) => ({
            slug: doc.item?.url,
            image: doc.item?.document?.data.featured_image,
            title: doc.item?.document?.data.title.text,
          }))}
          showBackBtn={false}
        />
      </section>
      <section className='h-full relative p-4 lg:p-8'>
        <BlockGrid
          title='2019'
          items={oldGuests.map((guest) => ({
            slug: cleanUpSlug(guest.frontmatter?.title, '/sarpur/'),
            image: {
              gatsbyImageData:
                guest.frontmatter.image.childImageSharp.gatsbyImageData,
            },
            title: guest.frontmatter?.title,
            type: 'Heiðursgestur',
          }))}
          showBackBtn={false}
        />
      </section>
    </div>
  )
}

export default DocsAndEvents
