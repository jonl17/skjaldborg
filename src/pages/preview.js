import React from 'react'
import { withPrismicPreviewResolver } from 'gatsby-plugin-prismic-previews'
import { linkResolver } from '../cms/linkResolver'

const PreviewPage = () => {
  return (
    <div>
      <p>Andartak...</p>
    </div>
  )
}

export default withPrismicPreviewResolver(PreviewPage, [
  {
    repositoryName: process.env.GATSBY_PRISMIC_REPO_NAME ?? '',
    linkResolver: linkResolver,
  },
])
