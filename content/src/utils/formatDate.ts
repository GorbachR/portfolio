export default function formatDate(date: Date) {
  return new Intl.DateTimeFormat("de-AT").format(date);
}
