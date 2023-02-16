let str = 'good morning'

let op=str.split('').map(value=>{ if('aeiou'.includes(value))
{ return value.toUpperCase()}
else
return value}).join('')

console.log(op);