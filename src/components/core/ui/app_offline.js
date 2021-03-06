import React from 'react';
import theme from 'core/ui/theme';
import { useTheme } from '@mui/material/styles';

function AppOffline( props ) {
  const { error } = props;
  const theme = useTheme();

  var errorMessage = (error?.networkError?.name === "ServerError") ? "can not connect to server" : error?.message; 
  
  return (
    <div style={{	display: 'flex', justifyContent: 'center', alignItems: 'center', flexOrientation: 'column', zIndex: 9999, width: '100%', height: '100vh', 
    				backgroundColor: theme.palette.primary.main, color: theme.palette.primary.constrastText}}>
          <div>
            <div style={{textAlign: 'center', fontSize: '0.5rem', textTransform: 'lowercase', paddingBottom: '1rem', letterSpacing: '0.3rem'}}>
                hello - hola - bonjour
            </div>
            <div>
              <div style={{fontSize: '0.8rem', textTransform: 'uppercase'}}>
                  {(error) ? error.toString() : ""}
              </div>
            </div>
          </div>
    </div>
    );
}


export default AppOffline;