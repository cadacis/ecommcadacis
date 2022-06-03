import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import BarUp from '../BarUp';
export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Actualiza el estado para que el siguiente renderizado muestre la interfaz de repuesto
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // También puedes registrar el error en un servicio de reporte de errores
  }

  render() {
    if (this.state.hasError) {
      // Puedes renderizar cualquier interfaz de repuesto

      return (
        <Box>
          <Box display={'flex'} justifyContent="center">
            <Box
              sx={{
                p: 1,
                minHeight: '100vh',
                width: { xs: '90vw', sm: '400px' },
              }}
              flexDirection="column"
              display="flex"
              justifyContent="center"
              alignContent={'center'}>
              <Box
                alignContent={'center'}
                alignItems="center"
                textAlign={'center'}
                sx={{ p: 1 }}>
                <Box
                  sx={{
                    border: '1px solid rgb(0,0,0,0.4)',
                    borderRadius: 2,
                    p: 2,
                    boxShadow: '0px 0px 15px rgb(0,0,0,0.2) ',
                  }}>
                  <Typography variant="h6" sx={{ color: '#000000' }}>
                    An error has occurred in this application, we are working to
                    solve it, please come back later
                  </Typography>
                  <Box sx={{ mt: 2 }}>
                    <a href="/" style={{ textDecoration: 'none' }}>
                      <Button variant="contained" color="secondary">
                        Go Home
                      </Button>
                    </a>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      );
    }

    return this.props.children;
  }
}
