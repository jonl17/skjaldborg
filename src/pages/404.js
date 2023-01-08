import React from 'react'
import {
  withPrismicUnpublishedPreview,
  componentResolverFromMap,
} from 'gatsby-plugin-prismic-previews'
import { linkResolver } from '../cms/linkResolver'
import PageTemplate from '../templates/Page/Page'
import MovieTemplate from '../templates/heimildamynd/prismic'
import EventTemplate from '../templates/Event/Event'

const PageNotFound = () => {
  return <p className='text-center'>404 | þessi síða fannst ekki</p>
}

export default withPrismicUnpublishedPreview(PageNotFound, [
  {
    repositoryName: process.env.GATSBY_PRISMIC_REPO_NAME || '',
    linkResolver,
    componentResolver: componentResolverFromMap({
      page: PageTemplate,
      movie: MovieTemplate,
      event: EventTemplate,
    }),
  },
])
