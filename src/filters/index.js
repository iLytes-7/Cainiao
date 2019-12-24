export function account(input) {
  let x = '**** **** **** **** ' + input.substr('-4')
  return x
}

export function amount(input) {
  let parts = input.toString().split('.')
  if(parts.length === 1) {
    parts[1] = '00'
  }
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  return parts.join('.')
}

export function bankName(input) {
  let x = input.substr(6)
  x = JSON.parse(x)
  return x[2]
}
