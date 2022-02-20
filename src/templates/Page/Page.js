import React from 'react'
import { graphql } from 'gatsby'
import '../../cms/fragments/page'
import SliceMapper from '../../sliceMapper'
import { pageResolver } from '../../cms/resolvers'

const Page = ({ data }) => {
  const page = pageResolver(data.prismicPage)

  console.log(page)
  return (
    <div className='page'>
      <article>
        {page.body.map((slice, key) => (
          <SliceMapper slice={slice} key={key} />
        ))}
      </article>
    </div>
  )
}

export default Page

export const query = graphql`
  query PageQuery($id: String) {
    prismicPage(id: { eq: $id }) {
      ...pageFragment
    }
  }
`
