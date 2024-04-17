// import Demo from "./component/demo";
import '@mantine/core/styles.css';
import { createTheme, MantineProvider } from '@mantine/core';
import ErrorBoundary from './ErrorBoundary';
import UtilityApp from './components/utilityApp/utilityApp';


const  App:React.FC=()=> {

  const theme = createTheme({
    /** Put your mantine theme override here */
    fontFamily: 'Montserrat, sans-serif',
    defaultRadius: 'md',
  });


  return (
    <ErrorBoundary>
      <MantineProvider theme={theme}>
        <UtilityApp/>
    </MantineProvider>
    </ErrorBoundary>

  );
}

export default App;
