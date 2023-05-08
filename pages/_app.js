import '../styles/globals.css'
import Head from "next/head";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
  <div>
    <Head>
      <link href='https://fonts.googleapis.com/css?family=Konkhmer Sleokchher' rel='stylesheet'/>
      <link href='https://fonts.googleapis.com/css?family=Space Mono' rel='stylesheet'/>
      
    </Head>
    
    <Component {...pageProps} />
  </div>
   )
}

export default MyApp
