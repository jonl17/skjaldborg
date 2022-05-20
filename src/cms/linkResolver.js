const linkResolver = (doc) => {
  // URL for a page type
  if (doc.type === 'page') {
    if (doc.lang === 'is') {
      return doc.uid === 'frontpage' ? '/' : `/${doc.uid}`
    } else {
      return doc.uid === 'frontpage' ? '/en' : `/en/${doc.uid}`
    }
  } else if (doc.type === 'movie') {
    return doc.lang === 'is'
      ? `/heimildamyndir/${doc.uid}`
      : `/en/documentaries/${doc.uid}`
  } else if (doc.type === 'event') {
    return doc.lang === 'is' ? `/vidburdir/${doc.uid}` : `/en/events/${doc.uid}`
  }

  // Backup for all other types
  return '/' + doc.uid
}

module.exports = {
  linkResolver,
}
