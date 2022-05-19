import React from 'react'
import BannerMedia from './slices/BannerMedia'
import BannerFrontpage from './slices/BannerFrontpage'
import InfoPages from './slices/InfoPages'
import Sponsors from './slices/Sponsors'
import RichText from './slices/RichText/RichText'
import Sarpur from './slices/NewSarpur'
import Documentaries from './slices/Documentaries'
import Events from './slices/Events'

const Slices = {
  banner_media: BannerMedia,
  banner_frontpage: BannerFrontpage,
  info_pages: InfoPages,
  sponsors: Sponsors,
  rich_text: RichText,
  sarpur: Sarpur,
  documentaries: Documentaries,
  events: Events,
}

const propResolver = (slice) => {
  switch (slice.slice_type) {
    case 'rich_text': {
      return {
        html: slice.primary.text.html,
      }
    }
    case 'banner_media': {
      return {
        image: slice.primary.image,
        video: slice.primary.video,
      }
    }
    case 'banner_frontpage': {
      return {
        image: slice.primary.image,
        link: {
          url: slice.primary.link.url,
          label: slice.primary.link_label,
        },
        secondLink: {
          url: slice.primary.second_link.url,
          label: slice.primary.second_link_label,
        },
      }
    }
    default: {
      return {}
    }
  }
}

const SliceMapper = ({ slice }) => {
  const Cmp = Slices[slice.slice_type]
  const props = propResolver(slice)

  if (!Cmp) {
    console.error(slice.slice_type, ' not found')
  }

  return <Cmp {...props} />
}

export default SliceMapper
