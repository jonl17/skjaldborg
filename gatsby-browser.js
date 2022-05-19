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

export const wrapRootElement = ({ element }) => (
  <Provider>
    <PrismicPreviewProvider
      repositoryConfigs={[
        {
          repositoryName: process.env.GATSBY_PRISMIC_REPO_NAME,
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
)
