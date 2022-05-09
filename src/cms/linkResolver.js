const slugify = require('slugify')

const linkResolver = (doc) => {
  // URL for a page type
  if (doc.type === 'page') {
    if (doc.lang === 'is') {
      if (doc.type === 'movie') {
        return `/heimildamyndir/${doc.uid}`
      }
      return doc.uid === 'frontpage' ? '/' : `/${doc.uid}`
    } else {
      if (doc.type === 'movie') {
        return `/documentaries/${doc.uid}`
      }
      return doc.uid === 'frontpage' ? '/en' : `/en/${doc.uid}`
    }
  }

  // Backup for all other types
  return '/' + doc.uid
}

module.exports = {
  linkResolver,
}
