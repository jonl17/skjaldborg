import React from 'react'
import BannerMedia from './slices/BannerMedia'
import BannerFrontpage from './slices/BannerFrontpage'
import InfoPages from './slices/InfoPages'

const Slices = {
  banner_media: BannerMedia,
  banner_frontpage: BannerFrontpage,
  info_pages: InfoPages,
}

const propResolver = (slice) => {
  switch (slice.slice_type) {
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
      return null
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