export function calculateReadTime(text: string): number {
  const averageReadingSpeed = 200 // avarage read words per minute
  const words = text.split(' ')
  const wordCount = words.length
  const readTime = Math.round(wordCount / averageReadingSpeed)

  return readTime
}
