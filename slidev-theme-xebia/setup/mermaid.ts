import { defineMermaidSetup } from '@slidev/types'

export default defineMermaidSetup(() => {
  return {
    theme: 'default',
    themeVariables: {
      fontFamily: 'Proxima Nova, sans-serif',
      fontSize: '1.2rem',
    }
  }
})