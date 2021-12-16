let ans = localStorage.getItem('ans')
try {
  ans = JSON.parse(ans)
} catch (error) {
}
ans = ans || {}
document.querySelectorAll('.exam-subject-box').forEach(blk => {
  let qus = blk.querySelector('.exam-vignette-con').innerText
  let right = blk.querySelector('.rightanswer').innerText.split('：')[1]
  let options = blk.querySelectorAll('h3.lh24')
  ans[qus] = []
  options.forEach(option => {
    if (right.includes(option.innerText[0])) {
      ans[qus].push(option.nextElementSibling.innerText)
    }
  })
})
localStorage.setItem('ans', JSON.stringify(ans))
console.error(Object.keys(ans).length)