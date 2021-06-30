import "../src/service/firebase";
import { AuthProvider } from "../src/providers/AuthProviders";

const MyApp = (props) => {
  return (
    <AuthProvider>
      <props.Component {...props.pageProps} />
    </AuthProvider>
  );
};

export default MyApp;
