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
  const totalApoiment = ['Apoiment1', 'Apoiment2', 'Apoiment3'];
  const patientList = ['patien 1', 'patien2', 'patien3'];
  const doctorList = ['doctor 1', 'doctor2', 'doctor3'];
  const tratamentList = ['tratament1', 'tratament2', 'tratament3'];
  //datos de todos los formularios

  const [apoiments, setApoiments] = React.useState(
    totalApoiment.map((item, key) => {
      return {
        no: key,
        apoiment: item,
        date: new Date(),
        from: new Date(),
        to: new Date(),
        patien: 0,
        doctor: 0,
        tratament: 0,
        autoShedule: false,
      };
    }),
  );
  //Formulario actual
  const [currents, setCurrents] = React.useState(apoiments[0]);

  //Subir form
  const nextApoiment = () => {
    if (currents.no == apoiments.length - 1) {
      return;
    }
    var updateListApoiment = apoiments;
    updateListApoiment[currents.no] = currents;
    setApoiments(updateListApoiment);
    setCurrents(apoiments[currents.no + 1]);
  };
  //Bajar Form
  const previewsApoiment = () => {
    if (currents.no == 0) {
      return;
    }
    var updateListApoiment = apoiments;
    updateListApoiment[currents.no] = currents;
    setApoiments(updateListApoiment);
    setCurrents(apoiments[currents.no - 1]);
  };
  const handleCreate = () => {
    console.log(apoiments);
    props.getData(apoiments);
    props.handleClose();
  };
  const handleChangeDate = (value) => {
    setCurrents({ ...currents, date: value });
  };
  const handleChangeFrom = (value) => {
    setCurrents({ ...currents, from: value });
  };
  const handleChangeTo = (value) => {
    setCurrents({ ...currents, to: value });
  };
  const handleChangePatien = (e) => {
    const value = e.target.value;
    setCurrents({ ...currents, patien: value });
  };
  const handleChangeDoctor = (e) => {
    const value = e.target.value;
    setCurrents({ ...currents, doctor: value });
  };
  const handleChangeTratament = (e) => {
    const value = e.target.value;
    setCurrents({ ...currents, tratament: value });
  };
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h5" color="initial">
        {currents.apoiment}
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
                      <MenuItem key={key} value={key}>
                        {item}
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
                      <MenuItem key={key} value={key}>
                        {item}
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
                      <MenuItem key={key} value={key}>
                        {item}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <Box display="flex">
                <Checkbox defaultChecked />
                <Typography variant="body1" color="initial">
                  Auto Schedule Appoiments
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={1.5}>
              <Button variant="text" onClick={props.handleClose}>
                Cancel
              </Button>
            </Grid>
            <Grid item xs={1.5}>
              <Button variant="text" onClick={previewsApoiment}>
                Back
              </Button>
            </Grid>
            <Grid item xs={1.5}>
              <Button variant="text" onClick={nextApoiment}>
                Next
              </Button>
            </Grid>
            <Grid item xs={1.5}>
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
  const getData = (data) => {
    var datan = data.map((item, key) => {
      return JSON.stringify(data);
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
