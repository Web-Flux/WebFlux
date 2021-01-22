import {
  ChakraProvider,
  CSSReset
} from "@chakra-ui/react";
import SEOState from "../context/SEO/SEOState";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <CSSReset />
      <SEOState>
        <Component {...pageProps} />
      </SEOState>
    </ChakraProvider>
  );
}

export default MyApp;