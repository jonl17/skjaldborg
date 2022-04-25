export const handleCloudinaryImage = (movie, year) => {
  const imageCrop = 'c_scale,q_auto,w_960'

  const baseUrl = `https://res.cloudinary.com/dynkhs6v9/image/upload/${imageCrop}/v1586423368`

  if (movie.image && movie.image.filename !== '') {
    return `${baseUrl}/sarpur/${year}/${movie.image.filename}.jpg`
  } else return ''
}
