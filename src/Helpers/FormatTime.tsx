export function FormatTime(s: string) {
  if (s === null || s === undefined) return;

  const date = new Date(parseInt(s));
  const dateFormat = date.toLocaleDateString();
  const timeFormat = date.toLocaleTimeString();
  return dateFormat + " - " + timeFormat;
}
