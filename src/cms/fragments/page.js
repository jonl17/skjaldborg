import { graphql } from 'gatsby'

export const fragment = graphql`
  fragment pageFragment on PrismicPage {
    uid
    url
    id
    prismicId
    data {
      title {
        text
      }
      featured_image {
        alt
        url
        gatsbyImageData
      }
      body {
        ... on PrismicPageDataBodyBannerMedia {
          ...bannerMediaSlice
        }
        ... on PrismicPageDataBodyBannerFrontpage {
          ...bannerFrontpageSlice
        }
        ... on PrismicPageDataBodyInfoPages {
          ...bannerInfoPages
        }
        ... on PrismicPageDataBodySponsors {
          ...sponsorsSlice
        }
      }
    }
  }

  fragment sponsorsSlice on PrismicPageDataBodySponsors {
    slice_type
    id
  }

  fragment bannerInfoPages on PrismicPageDataBodyInfoPages {
    slice_type
    id
  }

  fragment bannerFrontpageSlice on PrismicPageDataBodyBannerFrontpage {
    slice_type
    id
    primary {
      image {
        url
        alt
        gatsbyImageData
      }
      link {
        url
      }
      link_label
    }
  }

  fragment bannerMediaSlice on PrismicPageDataBodyBannerMedia {
    slice_type
    id
    primary {
      image {
        url
        alt
        gatsbyImageData
      }
      video {
        url
      }
    }
  }
`
