let ans = localStorage.getItem('ans')
try {
  ans = JSON.parse(ans)
} catch (error) {
}
ans = ans || {}
document.querySelectorAll('[name="li_Question"]').forEach(blk => {
  let qus = blk.querySelector('[style="overflow: auto;"]').innerText
  let ansList = ans[qus]
  if (!ansList) return
  let options = blk.querySelectorAll('li')
  options.forEach((option, index) => {
    let optionText = option.querySelector('.text-normal').innerText
    if (
      ansList.includes(optionText)
    ) {
      blk.querySelectorAll('input')[index].click()
    }
  })
})