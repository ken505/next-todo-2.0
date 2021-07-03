import "../src/service/firebase";
import "tailwindcss/tailwind.css";
import { AuthProvider } from "../src/providers/AuthProviders";

const MyApp = (props) => {
  return (
    <AuthProvider>
      <Head>
        <meta name="theme-color" content="#ffffff" />
        <link rel="manifest" href="/manifest.webmanifest" />
        <link rel="apple-touch-icon" href="/icon-192x192.png" />
      </Head>
      <props.Component {...props.pageProps} />
    </AuthProvider>
  );
};

export default MyApp;
