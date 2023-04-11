import logo from './logo.svg';
import './App.css';
import CustomButtonComponent from './components/CustomButtonComponent'
import Head from './components/Head';
import Page from './components/Page'
import { ThemeProvider } from "@material-tailwind/react";

function App() {
  return (    
    <div >
      <ThemeProvider> 
        {/* <h1>Hello</h1>   */}
      {/* <CustomButtonComponent/> */}
      <Head/>
      <Page/>
      </ThemeProvider>
    </div>
  );
}
export default App;
