/* eslint-disable no-useless-escape */
// input: "example word" => output: "Example Word"
export const capitalizeFirstLetterFromLowercase = (
  string = '',
  separator = ' ',
) => {
  if (!string) {
    return '-'
  }

  return string
    .split(separator) // " " for "EXAMPLE WORD", "_" for "EXAMPLE_WORD", and so on...
    .map((word) => `${word.charAt(0).toUpperCase()}${word.slice(1)}`)
    .join(' ')
}

export function convertToSlug(text = '') {
  return text
    ?.toLowerCase()
    ?.replace(/\s+/g, '-') // Ganti spasi dengan tanda strip
    ?.replace(/[^\w\-]+/g, '') // Hapus karakter non-word dan non-stripped
    ?.replace(/\-\-+/g, '-') // Ganti dua strip atau lebih dengan satu strip
    ?.replace(/^-+/, '') // Hapus strip dari awal teks
    ?.replace(/-+$/, '') // Hapus strip dari akhir teks
}

export function convertSlugToText(slug = '') {
  // Ubah strip menjadi spasi dan ubah teks menjadi huruf kapital setiap kata
  const text = slug
    ?.replace(/-/g, ' ')
    ?.replace(/\b\w/g, (char) => char.toUpperCase())

  return text
}

export function URLEncode(str) {
  return encodeURIComponent(str)?.replace(/[!'()*]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16)
  })
}

export function toRoman(num) {
  const romans = [
    { value: 1000, numeral: 'M' },
    { value: 900, numeral: 'CM' },
    { value: 500, numeral: 'D' },
    { value: 400, numeral: 'CD' },
    { value: 100, numeral: 'C' },
    { value: 90, numeral: 'XC' },
    { value: 50, numeral: 'L' },
    { value: 40, numeral: 'XL' },
    { value: 10, numeral: 'X' },
    { value: 9, numeral: 'IX' },
    { value: 5, numeral: 'V' },
    { value: 4, numeral: 'IV' },
    { value: 1, numeral: 'I' },
  ]

  let roman = ''
  for (let i = 0; i < romans.length; i++) {
    while (num >= romans[i].value) {
      roman += romans[i].numeral
      num -= romans[i].value
    }
  }
  return roman
}

export function getInitials(name) {
  const initials = name
    ?.split(' ')
    ?.map((word) => word.charAt(0))
    ?.join('')
    ?.toUpperCase()
  return initials
}

export function convertToSnakeCase(text) {
  // Convert the text to lowercase
  const lowerCaseText = text?.toLowerCase()

  // Replace spaces with underscores
  const snakeCaseText = lowerCaseText?.replace(/ /g, '_')

  return snakeCaseText
}

export function formatBibliographyName(fullName: string): string {
  // Split the full name by spaces
  const nameParts = fullName?.split(' ')

  // Extract the last name (assuming it's the last part)
  const lastName = nameParts?.pop()

  // Extract the first name and middle names
  const firstName = nameParts?.shift()
  const middleNames = nameParts?.join(' ')

  // Construct the formatted name
  let formattedName = ''
  if (nameParts?.length === 0) {
    formattedName = lastName
  } else {
    formattedName = `${lastName}, ${firstName?.charAt(0)}${
      middleNames
        ? middleNames
            ?.split(' ')
            ?.map((name) => name?.charAt(0))
            ?.join('')
        : ''
    } ${middleNames?.split(' ').pop()}`
  }

  return formattedName
}

export const getDayName = (dayIndex) => {
  const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu']
  return days[dayIndex]
}

// Function to get mood emoji based on value
export const getMoodEmoji = (value: number) => {
  switch (value) {
    case 0:
      return '😡' // Very Bad
    case 1:
      return '😠' // Bad
    case 2:
      return '😐' // Neutral
    case 3:
      return '😊' // Good
    case 4:
      return '😁' // Very Good
    case 5:
      return '🤩' // Excellent
    default:
      return '😊' // Default to Good
  }
}

// Function to get mood emoji based on value
export const getMood = (value: number) => {
  switch (value) {
    case 0:
      return 'Very Bad'
    case 1:
      return 'Bad'
    case 2:
      return 'Neutral'
    case 3:
      return 'Good'
    case 4:
      return 'Very Good'
    case 5:
      return 'Excellent'
    default:
      return 'Good'
  }
}
