const slugify = require('slugify')

const linkResolver = (doc) => {
  // URL for a page type
  if (doc.type === 'page') {
    if (doc.lang === 'is') {
      return doc.uid === 'frontpage' ? '/' : `/${doc.uid}`
    } else {
      return doc.uid === 'frontpage' ? '/en' : `/en/${doc.uid}`
    }
  }

  // Backup for all other types
  return '/' + doc.uid
}

module.exports = {
  linkResolver,
}
