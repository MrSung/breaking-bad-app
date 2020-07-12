const shuffle = ([...arr]): any[] => {
  let m = arr.length
  while (m !== 0) {
    const i = Math.floor(Math.random() * m--)
    ;[arr[m], arr[i]] = [arr[i], arr[m]]
  }
  return arr
}

export default shuffle
