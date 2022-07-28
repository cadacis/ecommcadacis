import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Dialog from '@mui/material/Dialog';
const Form = (props) => {
  //Totales de apoiment
  const totalApoiment = ['Apoiment1', 'Apoiment2', 'Apoiment3'];
  //Simular lista de pacientes
  const patientList = [
    { id: 0, name: 'Patien1' },
    { id: 1, name: 'Patien2' },
    { id: 2, name: 'Patien3' },
  ];
  //Simular lista de doctores
  const doctorList = [
    { id: 0, name: 'Doctor1' },
    { id: 1, name: 'Doctor2' },
    { id: 2, name: 'Doctor3' },
  ];
  //Simular lista de tratamientos
  const tratamentList = [
    { id: 0, name: 'Tratament1' },
    { id: 1, name: 'Tratament2' },
    { id: 2, name: 'Tratament3' },
  ];
  //Autocomplete apoiment inicial por default
  var initial = {
    no: 0,
    apoiment: totalApoiment[0],
    date: new Date(),
    from: new Date(),
    to: new Date(),
    patien: 0,
    doctor: 0,
    tratament: 0,
  };
  //Modificando apoiment inicial por default si se pasa por props
  if (props.data) {
    initial.date = props.data.date || new Date();
    initial.from = props.data.from || new Date();
    initial.to = props.data.to || new Date();
    initial.patien = props.data.date || 0;
    initial.doctor = props.data.date || 0;
    initial.tratament = props.data.date || 0;
  }

  //Variable de estado para el check
  const [autoShedule, setAutoShedule] = React.useState(true);
  //variable de estado para iniciado con un array de objetos un objeto para cada formulario y el primero viene de props y sino lo toma por default
  const [apoiments, setApoiments] = React.useState(
    totalApoiment.map((item, key) => {
      if (key == 0) {
        return initial;
      }
      return {
        no: key,
        apoiment: item,
        date: new Date(),
        from: new Date(),
        to: new Date(),
        patien: 0,
        doctor: 0,
        tratament: 0,
      };
    }),
  );
  //Este es el objeto perteneciente al formulario que se muestra en pantalla y el valor inicial es el objeto cero de la lista que viene de props o por default
  const [currents, setCurrents] = React.useState(apoiments[0]);

  //Actualiza el objeto correspondiente a currens en la lista de los tres objetos apoiments general y Pasa al siguiente formulario seteando en current el siguiente objeto de la lista
  const nextApoiment = () => {
    if (currents.no == apoiments.length - 1) {
      return;
    }
    var updateListApoiment = apoiments;
    updateListApoiment[currents.no] = currents;
    setApoiments(updateListApoiment);
    setCurrents(apoiments[currents.no + 1]);
  };
  //Identico a nextApoiment pero hacia atras
  const previewsApoiment = () => {
    if (currents.no == 0) {
      return;
    }
    var updateListApoiment = apoiments;
    updateListApoiment[currents.no] = currents;
    setApoiments(updateListApoiment);
    setCurrents(apoiments[currents.no - 1]);
  };
  //Manejador de el boton crear muestra la lista de apoiments por consola y luego la pasa al objeto padre con una funcion que viene de props getData
  const handleCreate = () => {
    //Si autoSchudle disabled envia el array solo con la posicion 0
    if (!autoShedule) {
      const value = [apoiments[0]];
      console.log(value);
      props.getData(value);
      props.handleClose();
      return;
    }
    var updateListApoiment = apoiments;
    updateListApoiment[currents.no] = currents;
    setApoiments(updateListApoiment);
    props.getData(updateListApoiment);
    props.handleClose();
  };
  //manejadores de input
  const handleChangeDate = (value) => {
    setCurrents({ ...currents, date: value });
  };
  //manejadores de input
  const handleChangeFrom = (value) => {
    setCurrents({ ...currents, from: value });
  };
  //manejadores de input
  const handleChangeTo = (value) => {
    setCurrents({ ...currents, to: value });
  };
  //manejadores de input
  const handleChangePatien = (e) => {
    const value = e.target.value;
    setCurrents({ ...currents, patien: value });
  };
  //manejadores de input
  const handleChangeDoctor = (e) => {
    const value = e.target.value;
    setCurrents({ ...currents, doctor: value });
  };
  //manejadores de input
  const handleChangeTratament = (e) => {
    const value = e.target.value;
    setCurrents({ ...currents, tratament: value });
  };
  const handleAutoSchudle = (event) => {
    const value = event.target.checked;
    if (!value) {
      setCurrents(apoiments[0]);
    }
    setAutoShedule(value);
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h5" color="initial">
        {currents.apoiment} {/*de current optiene el nombre del form*/}
      </Typography>
      <Box sx={{ mt: 2 }}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={5}>
              <DesktopDatePicker
                label="Date desktop"
                inputFormat="MM/dd/yyyy"
                value={currents.date}
                fullWidth
                onChange={handleChangeDate}
                renderInput={(params) => (
                  <TextField {...params} size="small" fullWidth />
                )}
              />
            </Grid>
            <Grid item xs={6} sm={3.5}>
              <TimePicker
                label="From"
                value={currents.from}
                onChange={handleChangeFrom}
                renderInput={(params) => (
                  <TextField {...params} size="small" fullWidth />
                )}
              />
            </Grid>
            <Grid item xs={6} sm={3.5}>
              <TimePicker
                label="To"
                value={currents.to}
                onChange={handleChangeTo}
                renderInput={(params) => (
                  <TextField {...params} size="small" fullWidth />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel id={'input-patient-' + currents.no}>
                  Patient
                </InputLabel>
                <Select
                  size="small"
                  labelId={'labelid-patient-' + currents.no}
                  id={'id-patient-' + currents.no}
                  value={currents.patien}
                  label="Patient"
                  onChange={handleChangePatien}>
                  {patientList.map((item, key) => {
                    return (
                      <MenuItem key={key} value={item.id}>
                        {item.name}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel id={'input-doctor-' + currents.no}>
                  Doctor
                </InputLabel>
                <Select
                  size="small"
                  labelId={'labelid-doctor-' + currents.no}
                  id={'id-doctor-' + currents.no}
                  value={currents.doctor}
                  label="Doctor"
                  onChange={handleChangeDoctor}>
                  {doctorList.map((item, key) => {
                    return (
                      <MenuItem key={key} value={item.id}>
                        {item.name}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel id={'input-trat-' + currents.no}>
                  Tratament
                </InputLabel>
                <Select
                  size="small"
                  labelId={'labelid-tratament-' + currents.no}
                  id={'id-tratament-' + currents.no}
                  value={currents.tratament}
                  label="Tratamens"
                  onChange={handleChangeTratament}>
                  {tratamentList.map((item, key) => {
                    return (
                      <MenuItem key={key} value={item.id}>
                        {item.name}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box display="flex">
                <Checkbox checked={autoShedule} onChange={handleAutoSchudle} />
                <Typography variant="body1" color="initial">
                  Auto Schedule Appoiments
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={3} sm={1.5}>
              <Button variant="text" onClick={props.handleClose}>
                Cancel
              </Button>
            </Grid>
            <Grid item xs={3} sm={1.5}>
              <Button
                disabled={!autoShedule}
                variant="text"
                onClick={previewsApoiment}>
                Back
              </Button>
            </Grid>
            <Grid item xs={3} sm={1.5}>
              <Button
                disabled={!autoShedule}
                variant="text"
                onClick={nextApoiment}>
                Next
              </Button>
            </Grid>
            <Grid item xs={3} sm={1.5}>
              <Button variant="text" onClick={handleCreate}>
                Create
              </Button>
            </Grid>
          </Grid>
        </LocalizationProvider>
      </Box>
    </Box>
  );
};

const Index = () => {
  const [open, setOpen] = React.useState(false);
  const [data, setData] = React.useState([]);

  const handleClose = () => {
    setOpen(!open);
  };
  const getData = (externaldata) => {
    console.log(externaldata);
    var datan = externaldata.map((item, key) => {
      return JSON.stringify(item);
    });
    setData(datan.toString());
  };

  return (
    <Box sx={{ mt: 20 }}>
      <Dialog onClose={handleClose} open={open}>
        <Form getData={getData} handleClose={handleClose} />
      </Dialog>
      <Box>
        <Button variant="contained" onClick={handleClose}>
          Create Appoiments
        </Button>
      </Box>
      <Box>{data.length == 0 ? 'No data' : data}</Box>
    </Box>
  );
};

export default Index;
