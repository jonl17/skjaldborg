import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

import Provider from './src/context/main'
import './src/styles/global.css'
import {
  PrismicPreviewProvider,
  componentResolverFromMap,
} from 'gatsby-plugin-prismic-previews'
import { linkResolver } from './src/cms/linkResolver'
import PageTemplate from './src/templates/Page/Page'
import MovieTemplate from './src/templates/heimildamynd/prismic'
import React from 'react'

const { GATSBY_PRISMIC_REPO_NAME: repoName } = process.env

export const wrapRootElement = ({ element }) => {
  return (
    <>
      <Provider>
        <PrismicPreviewProvider
          repositoryConfigs={[
            {
              repositoryName: repoName,
              linkResolver,
              componentResolver: componentResolverFromMap({
                page: PageTemplate,
                movie: MovieTemplate,
              }),
            },
          ]}
        >
          {element}
        </PrismicPreviewProvider>
      </Provider>
    </>
  )
}
