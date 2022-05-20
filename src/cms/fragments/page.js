import { graphql } from 'gatsby'

export const fragment = graphql`
  fragment pageFragment on PrismicPage {
    uid
    url
    id
    prismicId
    lang
    data {
      title {
        text
      }
      featured_image {
        alt
        url
        gatsbyImageData
      }
      link_a_page {
        url
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
        ... on PrismicPageDataBodyRichText {
          ...richTextSlice
        }
        ... on PrismicPageDataBodySarpur {
          ...sarpurSlice
        }
        ... on PrismicPageDataBodyDocumentaries {
          id
          slice_type
        }
        ... on PrismicPageDataBodyEvents {
          id
          slice_type
        }
        ... on PrismicPageDataBodySchedule {
          id
          slice_type
        }
      }
    }
  }

  fragment sarpurSlice on PrismicPageDataBodySarpur {
    id
    slice_type
  }

  fragment richTextSlice on PrismicPageDataBodyRichText {
    id
    slice_type
    primary {
      text {
        html
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
      second_link {
        url
      }
      second_link_label
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
