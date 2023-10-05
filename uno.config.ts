import { defineConfig, presetUno, presetAttributify } from 'unocss'

export default defineConfig({
  theme: {
    colors: {
      'dark-primary': '#303030',
      'dark-secondary': '#FFFFFF99',
      'dark-tertiary': '#fff9',

      'dark-input': '#1e1e1e',
      'dark-btn-hover': '#ffffff1a',
    }
  },
  rules: [
    [/^m-(\d+)$/, match => ({ margin: `${(Number(match[1])) / 4}rem` })],
    [/^p-(\d+)$/, match => ({ padding: `${(Number(match[1])) / 4}rem` })],
    [/^h-(\d+)$/, match => ({ height: `${(Number(match[1])) / 4}rem` })],
    [/^w-(\d+)$/, match => ({ width: `${(Number(match[1])) / 4}rem` })],

    ['text-sm', { 'font-size': '0.75rem' }],

    ['flex-center', {
      'display': 'flex',
      'justify-content': 'center',
      'align-items': 'center'
    }],

    ['flex-center-between', {
      'display': 'flex',
      'justify-content': 'space-between',
      'align-items': 'center'
    }],

    ['absolute-center', {
      'position': 'absolute',
      'top': '50%',
      'left': '50%',
      'transform': 'translate(-50%, -50%)'
    }],

    ['transition-duration', {
      'transition-duration': '300ms'
    }]
  ],
  presets: [
    presetUno(),
    presetAttributify()
  ]
})