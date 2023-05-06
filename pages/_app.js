import { ThemeContextProvider } from '@/context/themeContext';
import '../assets/styles/globals.css';
import Layout from '@/layout';

export default function App({ Component, pageProps }) {
  return (
    <ThemeContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeContextProvider>
  );
}
