import React from 'react'
import { graphql } from 'gatsby'
import '../../cms/fragments/page'
import SliceMapper from '../../sliceMapper'
import { pageResolver } from '../../cms/resolvers'
import { withPrismicPreview } from 'gatsby-plugin-prismic-previews'

const Page = ({ data }) => {
  const page = pageResolver(data.prismicPage)

  return (
    <div className='page bg-white'>
      <article>
        {page.body.map((slice, key) => (
          <SliceMapper slice={slice} key={key} />
        ))}
      </article>
    </div>
  )
}

export default withPrismicPreview(Page)

export const query = graphql`
  query PageQuery($id: String) {
    prismicPage(id: { eq: $id }) {
      _previewable
      ...pageFragment
    }
  }
`
