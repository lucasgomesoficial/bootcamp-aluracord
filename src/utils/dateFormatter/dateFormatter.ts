export const dateFormatter = (date: string) => {
  const addZero = (number: number | string) => {
    if (number <= 9) return '0' + number
    else return number
  }
  const oldDate = new Date(date)
  let newDate =
    addZero(oldDate.getDate().toString()) +
    '/' +
    addZero(oldDate.getMonth() + 1).toString() +
    '/' +
    oldDate.getFullYear()
  return newDate
}
