import { ChakraProvider } from "@chakra-ui/react";
import { DefaultLayout } from "../components/Layout/Layout";
import { customTheme } from "../themes/index";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={customTheme}>
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </ChakraProvider>
  );
}

export default MyApp;
