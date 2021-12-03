import React from 'react';
import theme from 'core/ui/theme';
import { useTheme } from '@mui/material/styles';

function PageLoading( props ) {
  const theme = useTheme();
  return (
    <div style={{	display: 'flex', justifyContent: 'center', alignItems: 'center', flexOrientation: 'column', zIndex: 9999, width: '100%', height: '100vh',  
    				backgroundColor: theme.palette.primary.main, color: theme.palette.primary.constrastText}}>
          <div>
            <div style={{textAlign: 'center', fontSize: '0.5rem', textTransform: 'lowercase', paddingBottom: '1rem', letterSpacing: '0.3rem'}}>
                hello - hola - bonjour
            </div>
            <div>
              <div style={{fontSize: '1.8rem', fontWeight: 'bold', textTransform: 'uppercase', float: 'left'}}>
                  loading
              </div>
            </div>
          </div>
    </div>
    );
}


export default PageLoading;