export const pageResolver = (node) => ({
  url: node.url,
  uid: node.uid,
  id: node.id,
  prismicId: node.prismicId,
  title: node.data.title.text,
  body: node.data.body,
  featuredImage: node.data.featured_image,
})
