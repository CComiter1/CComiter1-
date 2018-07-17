const camelorm = (word1) => {
  if (!word1) {
    return ''
  }
  const word = word1.split('')
  let counter = 1
  let len = word.length
  const upper = let1 => word[let1] !== ' ' && word[let1] === word[let1].toUpperCase()
  const split1 = (let1, let2) => !upper(let1) && upper(let2)
  const split2 = (let1, let2, let3) => upper(let1) && upper(let2) && !upper(let3)
  while (counter < len - 1) {
    if (split1(counter, counter + 1) || split2(counter - 1, counter, counter + 1)) {
      word[counter + 1] = word[counter + 1].toUpperCase()
      word.splice(counter + 1, 0, ' ')
      len += 1
      counter += 2
    } else {
      counter += 1
    }
  }
  word[0] = word[0].toUpperCase()
  return word.join('')
}

console.log(camelorm('jnksdfD'))