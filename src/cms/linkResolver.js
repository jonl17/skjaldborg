const slugify = require('slugify')

const linkResolver = (doc) => {
  // URL for a page type
  if (doc.type === 'page') {
    return doc.uid === 'frontpage' ? '/' : `/${doc.uid}`
  }

  // Backup for all other types
  return '/' + doc.uid
}

module.exports = {
  linkResolver,
}