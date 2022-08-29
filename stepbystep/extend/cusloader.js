module.exports = function (source, options) {
  console.log('>>>>>>>\n', source)
  return source.replace('aaaaa', 'bbbbbb')
}