import client from 'webpack-theme-color-replacer/client'

export function changeColor () {
  const options = {
    newColors: ['#9acd32'],
  }

  client.changer.changeColor(options, Promise).then(() => {
    console.log('Theme colors changed')
  })
}