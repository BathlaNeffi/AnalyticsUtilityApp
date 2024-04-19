import React from 'react';
import '@mantine/core/styles.css';
import { createTheme, MantineProvider } from '@mantine/core';
import UtilityApp from './component/utilityApp/utilityApp';

const  App:React.FC=()=> {
  const theme = createTheme({
    /** Put your mantine theme override here */
    fontFamily: 'Montserrat, sans-serif',
    defaultRadius: 'md',
  });

  return (
    <div className="App">
      <MantineProvider theme={theme}>
        <UtilityApp/>
    </MantineProvider>
    </div>
  );
}

export default App;
