import React from 'react'
import BannerMedia from './slices/BannerMedia'
import BannerFrontpage from './slices/BannerFrontpage'
import InfoPages from './slices/InfoPages'
import Sponsors from './slices/Sponsors'
import RichText from './slices/RichText/RichText'

const Slices = {
  banner_media: BannerMedia,
  banner_frontpage: BannerFrontpage,
  info_pages: InfoPages,
  sponsors: Sponsors,
  rich_text: RichText,
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
      }
    }
    // todo case 'info_pages'
    default: {
      return {}
    }
  }
}

const SliceMapper = ({ slice }) => {
  const Cmp = Slices[slice.slice_type]
  const props = propResolver(slice)

  console.log(slice)

  if (!Cmp) {
    console.error(slice.slice_type, ' not found')
  }

  return <Cmp {...props} />
}

export default SliceMapper
