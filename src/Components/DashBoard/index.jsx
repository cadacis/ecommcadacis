import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Icon } from '@iconify/react';
import Drawer from '@mui/material/Drawer';
/*Componentes Propios*/
import Datos from './DatosGenerales';
import Filter from './Filter';
import Inversiones from './InversionRetornos';
import Ordenes from './Ordenes';
import Ventas from './Ventas';
import Welcome from './Welcome';
import Button from '@mui/material/Button';
import LeftMenu from './LeftMenu';
/*Style*/

const style = {
  principalViews: { backgroundColor: '#F0F0F0', minHeight: '100vh', p: 2 },
  items: { backgroundColor: '#ffffff', borderRadius: 2, p: 1 },
};

const Index = () => {
  const [openMenu, setOpenMenu] = React.useState(false);
  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <Box sx={style.principalViews}>
      {/* Menu Desplegable*/}
      <Drawer
        anchor={'left'}
        open={openMenu}
        onClose={() => setOpenMenu(false)}>
        <LeftMenu handleMenu={handleMenu} />
      </Drawer>
      {/*Button Actve Menu Desplegable*/}
      <Box
        display="flex"
        justifyContent={'end'}
        sx={{ mb: 1, backgroundColor: '#ffffff', borderRadius: 2 }}>
        <Button onClick={handleMenu} variant="text" color="default">
          <Icon icon="gg:menu-round" color="#003" width="40" height="40" />
        </Button>
      </Box>
      {/*Cabezera y resto de componentes*/}
      <Grid container spacing={1}>
        {/*Cabezera*/}
        <Grid item xs={12}>
          <Box sx={style.items}>
            <Grid container spacing={1}>
              <Grid
                display="flex"
                flexDirection={'column'}
                justifyContent="center"
                item
                xs={12}
                sm={4}
                md={4}>
                <Box>
                  <Welcome />
                </Box>
              </Grid>
              <Grid item xs={12} sm={8} md={8}>
                <Box>
                  <Filter />
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>

        {/*Ordenes*/}
        <Grid item xs={12} sm={4} md={6}>
          <Box sx={style.items}>
            <Ordenes />
          </Box>
        </Grid>
        {/*Ventas*/}
        <Grid item xs={12} sm={4} md={3}>
          <Box sx={style.items}>
            <Ventas />
          </Box>
        </Grid>
        {/*Inversion*/}
        <Grid item xs={12} sm={4} md={3}>
          <Box sx={style.items}>
            <Inversiones />
          </Box>
        </Grid>
        {/*Datos Generales*/}
        <Grid item xs={12}>
          <Box sx={style.items}>
            <Datos />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Index;
