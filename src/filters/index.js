export function account(input) {
  let x = '**** **** **** **** ' + input.substr('-4')
  return x
}

export function amount(input) {
  if(input == undefined){
    return
  }
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

export function billCategory(input) {
  let x = ''
  if(input == 'cashback'){
    x = '返还'
  }else if(input == 'deposit') {
    x = '充值'
  }else if(input == 'withdrawal') {
    x = '取款'
  }else if(input == 'transfer') {
    x = '转账'
  }else if(input == 'promo') {
    x = '促销'
  }else {
    x= '游戏'
  }
  return x
}

export function date(input) {
  return input?input.substr(0,10):null
}
