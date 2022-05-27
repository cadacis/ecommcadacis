import {createTheme} from "@mui/material"
import {blueGrey, teal} from  '@mui/material/colors';
const themeOne = createTheme({
    palette: {
       primary: {
          easy:blueGrey[200],
          main:blueGrey[500],
          strong:blueGrey[700],
          super:blueGrey[900],
        },
        secondary: {
          easy:teal[200],
          main:teal[500],
          strong:teal[700],
          super:teal[900],
        },
        white: {
          main: "#ffffff",
        },
        black: {
            main: "#000000",
          },
      },
})

export  {themeOne}