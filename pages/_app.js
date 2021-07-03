import "../src/service/firebase";
import "tailwindcss/tailwind.css";
import { AuthProvider } from "../src/providers/AuthProviders";

const MyApp = (props) => {
  return (
    <AuthProvider>
      <props.Component {...props.pageProps} />
    </AuthProvider>
  );
};

export default MyApp;
