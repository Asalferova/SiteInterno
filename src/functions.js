export function formatedDate(date) {
  let formatDate = new Date(date);
  let year = formatDate.getFullYear();
  let month = ("0" + (formatDate.getMonth() + 1)).slice(-2);
  let day = ("0" + formatDate.getDate()).slice(-2);
  return `${year}-${month}-${day}`;
}
