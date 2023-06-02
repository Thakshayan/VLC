import AuthProvider from "./src/contexts/AuthProvider";
import ThemeProvider from "./src/contexts/ThemeProvider";
import Main from "./src/navigation/index";

export default function App() {
  return (

    <AuthProvider>
      <ThemeProvider>
       <Main />
      </ThemeProvider>
    </AuthProvider>
 
  
  );
}
