export function formatDate(isoString: string) {
  const formatter = Intl.DateTimeFormat('en-GB', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format
  const date = new Date(isoString);
  return formatter(date)
}
