import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        color: {
            white: string,
            black: string,
            whiteGray: string,
            blackGray: string,
            gray: string,
            darkGray: string
        }
    }
}