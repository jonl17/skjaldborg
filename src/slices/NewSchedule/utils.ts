const icelandicDays = [
  'Sunnudagur',
  'Mánudagur',
  'Þriðjudagur',
  'Miðvikudagur',
  'Fimmtudagur',
  'Föstudagur',
  'Laugardagur',
]

const icelandicMonths = [
  'Janúar',
  'Febrúar',
  'Mars',
  'Apríl',
  'Maí',
  'Júní',
  'Júlí',
  'Ágúst',
  'September',
  'Október',
  'Nóvember',
  'Desember',
]

export const handleDate = (date: Date, lang: string) => {
  if (lang === 'is') {
    const day = icelandicDays[date.getDay()]
    const month = icelandicMonths[date.getMonth()]
    return { day, date: `${date.getDate()}. ${month}` }
  }

  return {
    day: date.toLocaleString('en-US', { weekday: 'long' }),
    date: Intl.DateTimeFormat('en-US', {
      day: 'numeric',
      month: 'short',
    }).format(date),
  }
}
