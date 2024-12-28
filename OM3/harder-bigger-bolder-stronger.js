export function generateLetters() {
  let size = 11
  
  for (let i = 1; i <= 120; i++) {
    let dd = document.createElement("div")
    document.body.append(dd)
    dd.textContent = alpha()
    dd.style.fontSize = size + "px"
    if (i <= 40) {
      dd.style.fontWeight = '300';  
  } else if (i <= 80) {
      dd.style.fontWeight = '400';  
  } else {
      dd.style.fontWeight = '600'; 
  }
    size++
  }
}
function alpha() {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  return alphabet[Math.floor(Math.random() * alphabet.length)]
}
