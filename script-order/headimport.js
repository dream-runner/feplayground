const deps = [
  // './1.js',
  './2.js',
  // './3.js'
]
deps.forEach(dep => {
  const script = document.createElement('script')
  script.src = dep
  script.async = false
  document.head.appendChild(script)
})