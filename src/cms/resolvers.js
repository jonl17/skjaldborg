export const pageResolver = (node) => ({
  url: node.url,
  uid: node.uid,
  id: node.id,
  prismicId: node.prismicId,
  title: node.data.title.text,
  body: node.data.body,
  featuredImage: node.data.featured_image,
})

export const movieResolver = (node) => ({
  lang: node.lang,
  url: node.url,
  uid: node.uid,
  title: node.data.title.text,
  description: node.data.description,
  image: node.data.featured_image,
  director: node.data.director,
  type: node.data.type,
  scheduled: node.data.scheduled,
  otherRoles: node.data.other_roles,
  excerpt: node.data.excerpt,
  sameSlotSort: node.data.same_slot_sort ?? 0,
})

export const eventResolver = (node) => ({
  lang: node.lang,
  url: node.url,
  uid: node.uid,
  title: node.data.title.text,
  description: node.data.rich_text,
  image: node.data.featured_image,
  type: node.data.type,
  scheduled: node.data.scheduled,
  excerpt: node.data.excerpt,
  sameSlotSort: node.data.same_slot_sort ?? 0,
})
