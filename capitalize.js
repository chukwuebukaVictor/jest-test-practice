const capitalize = (string) => {
    return string.split('')[0].toUpperCase()+ string.slice(1)
  }

  module.exports = capitalize;