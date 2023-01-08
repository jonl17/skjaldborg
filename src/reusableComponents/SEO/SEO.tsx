import React from 'react'

type SEOProps = {
  title: string
  description: string
  image?: {
    url: string
  }
}

const SEO = ({
  title = 'Skjaldborg',
  description = 'Hátíð íslenskra heimildamynda',
  image,
}: SEOProps) => {
  return (
    <>
      <meta charSet='utf-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />

      <title>{title}</title>

      <meta property='description' name='description' content={description} />
      {image && (
        <meta property='og:image' name='og:image' content={image.url} />
      )}
      <meta
        property='og:description'
        name='og:description'
        content={description}
      />
      <meta name='twitter:description' content={description} />
      {image && <meta name='twitter:image' content={image.url} />}
      <meta name='twitter:card' content='summary_large_image' />
    </>
  )
}

export default SEO
