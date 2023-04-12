export type ThemeNameType = 'light' | 'dark'

export interface ThemeType {
  colors: {
    text: string
    background: string
  }
}

export const lightTheme: ThemeType = {
  colors: {
    text: 'black',
    background: '#F0F0F0',
  },
}

export const darkTheme: ThemeType = {
  colors: {
    text: 'white',
    background: '',
  },
}
