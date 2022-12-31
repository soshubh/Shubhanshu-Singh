import '../styles/globals.css'
import { ThemeProvider } from 'next-themes'
// import { motion } from "framer-motion";
export default function App({ Component, pageProps }) {
  return(
     <ThemeProvider attribute='class'>
      <Component {...pageProps} />  
      </ThemeProvider>
      
    )

}
