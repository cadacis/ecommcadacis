import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import CircularProgress from '@mui/material/CircularProgress';

//Simular listas
const pl = [
  { id: 1, name: 'patien1' },
  { id: 2, name: 'patien2' },
  { id: 3, name: 'patien3' },
  { id: 4, name: 'patien4' },
];
const dl = [
  { id: 1, name: 'doctor1' },
  { id: 2, name: 'doctor2' },
  { id: 3, name: 'doctor3' },
  { id: 4, name: 'doctor4' },
];
const tl = [
  { id: 1, name: 'tratament1' },
  { id: 2, name: 'tratament2' },
  { id: 3, name: 'tratament3' },
  { id: 4, name: 'tratament4' },
];

// Data inicial espera esta estructura
/*   {
        title: "New Appointment",
        id: "example id",
        date: "Wed Jul 27 2022 14:05:20 GMT-0500 (Central Daylight Time)",
        startTime: "Wed Jul 27 2022 14:05:20 GMT-0500 (Central Daylight Time)",
        endTime: "Wed Jul 27 2022 14:05:20 GMT-0500 (Central Daylight Time)",
        patient: "Carmen",
        doctor: "Dr. Lopez",
        treatment: "Coffee for your heart",
        autoSchedule: "on",
    },
*/

const Form = ({ dataInitial, handleClose, handleResult }) => {
  const minHrs = 'Wed Jul 27 2022 08:00:00 GMT-0500 (Central Daylight Time)';
  const maxHrs = 'Wed Jul 27 2022 18:01:10 GMT-0500 (Central Daylight Time)';
  const [visited, setVisited] = React.useState(1);
  const [patienList, setPatienList] = React.useState([]);
  const [doctorList, setDoctorList] = React.useState([]);
  const [tratamentList, setTratamentList] = React.useState([]);

  const [appoiments, setAppoiments] = React.useState(dataInitial);
  const [countSteep, setCountSteep] = React.useState(1);
  const [currentAppoiment, setCurrentAppoiment] = React.useState(
    dataInitial[0],
  );

  const [auto, setAuto] = React.useState(true);

  const getList = async () => {
    //Obtener listas desde el server asyncronicas
    setPatienList(pl);
    setDoctorList(dl);
    setTratamentList(tl);
  };
  const handleCreate = () => {
    const index = appoiments.findIndex(
      (item) => item.id == currentAppoiment.id,
    );
    var appoimentsArr = appoiments;
    appoimentsArr[index] = currentAppoiment;
    setAppoiments(appoimentsArr);

    if (!auto) {
      handleResult([appoiments[0]]);
    } else {
      handleResult(appoiments);
    }

    handleClose();
  };
  const handleDay = (data) => {
    setCurrentAppoiment({ ...currentAppoiment, date: data });
  };
  const handleFrom = (data) => {
    var d1 = new Date(data);
    d1 = d1.getTime();
    var d2 = new Date(currentAppoiment.endTime);
    d2 = d2.getTime();
    if (d1 > d2) {
      setCurrentAppoiment({
        ...currentAppoiment,
        startTime: data,
        endTime: data,
      });
      return;
    }
    setCurrentAppoiment({ ...currentAppoiment, startTime: data });
  };
  const handleTo = (data) => {
    setCurrentAppoiment({ ...currentAppoiment, endTime: data });
  };
  const handleAuto = (value) => {
    var value_ = value.target.checked;

    if (!value_) {
      setVisited(4);
    } else {
      setVisited(1);
    }

    const index = appoiments.findIndex(
      (item) => item.id == currentAppoiment.id,
    );

    var appoimentsArr = appoiments;
    appoimentsArr[index] = currentAppoiment;
    setAppoiments(appoimentsArr);
    setCurrentAppoiment(appoiments[0]);
    setCountSteep(1);
    setAuto(value_);
  };
  const handleNext = (value) => {
    if (countSteep == appoiments.length) {
      return;
    }
    if (
      !validateField(
        currentAppoiment.date,
        currentAppoiment.startTime,
        currentAppoiment.endTime,
      )
    ) {
      return;
    }
    setVisited(visited + 1);
    const index = appoiments.findIndex(
      (item) => item.id == currentAppoiment.id,
    );
    var appoimentsArr = appoiments;
    appoimentsArr[index] = currentAppoiment;
    setAppoiments(appoimentsArr);
    setCountSteep(countSteep + 1);
    setCurrentAppoiment(appoiments[index + 1]);
  };
  const handleBack = (value) => {
    if (countSteep == 1) {
      return;
    }
    if (
      !validateField(
        currentAppoiment.date,
        currentAppoiment.startTime,
        currentAppoiment.endTime,
      )
    ) {
      return;
    }

    const index = appoiments.findIndex(
      (item) => item.id == currentAppoiment.id,
    );
    var appoimentsArr = appoiments;
    appoimentsArr[index] = currentAppoiment;
    setCountSteep(countSteep - 1);
    setAppoiments(appoimentsArr);
    setCurrentAppoiment(appoiments[index - 1]);
  };
  const disableWeekend = (date) => {
    return date.getDay() === 0 || date.getDay() === 6;
  };
  const handlePatient = (v) => {
    var data = v.target.value;
    setCurrentAppoiment({ ...currentAppoiment, patient: data });
  };
  const handleDoctor = (v) => {
    var data = v.target.value;
    setCurrentAppoiment({ ...currentAppoiment, doctor: data });
  };
  const handleTratament = (v) => {
    var data = v.target.value;
    setCurrentAppoiment({ ...currentAppoiment, treatment: data });
  };
  const validateField = (day, startHrs, endHrs) => {
    var shrs = new Date(startHrs).getDate();
    var ehrs = new Date(endHrs).getDate();
    var dayVal = new Date(day);

    if (dayVal.getDay() === 0 || dayVal.getDay() === 6) {
      console.log('error day');
      return false;
    }
    if (shrs > ehrs) {
      console.log('Inicio Mayor');
      return false;
    }
    if (!compareHours(startHrs, endHrs)) {
      return false;
    }
    if (!compareHours(endHrs, maxHrs)) {
      return false;
    }
    if (!compareHours(minHrs, startHrs)) {
      return false;
    }
    if (!compareHours(startHrs, maxHrs)) {
      return false;
    }
    if (!compareHours(minHrs, endHrs)) {
      return false;
    }
    return true;
  };
  const compareHours = (start, end) => {
    var sHrs = new Date(start);
    var eHrs = new Date(end);
    sHrs = {
      hrs: sHrs.getHours(),
      min: sHrs.getMinutes(),
      sec: sHrs.getSeconds(),
    };
    eHrs = {
      hrs: eHrs.getHours(),
      min: eHrs.getMinutes(),
      sec: eHrs.getSeconds(),
    };

    sHrs = parseInt(sHrs.hrs * 3600 + sHrs.min * 60 + sHrs.sec);
    eHrs = parseInt(eHrs.hrs * 3600 + eHrs.min * 60 + eHrs.sec);
    if (sHrs <= eHrs) {
      return true;
    }
    return false;
  };

  const closeForm = () => {
    handleClose();
  };

  React.useEffect(() => {
    getList();
    return () => {
      console.log('clear');
    };
  }, []);

  if (patienList.length == 0) {
    return (
      <Box>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <CircularProgress />
        </Box>
        <Box>Esperando lista de pacientes</Box>
      </Box>
    );
  }
  if (doctorList.length == 0) {
    return (
      <Box>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <CircularProgress />
        </Box>
        <Box>Esperando lista de doctores</Box>
      </Box>
    );
  }
  if (tratamentList.length == 0) {
    return (
      <Box>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <CircularProgress />
        </Box>
        <Box>Esperando lista de tratamientos</Box>
      </Box>
    );
  }

  return (
    <Box sx={{ p: 2 }}>
      <Box sx={{ mb: 2 }}>
        <Typography textAlign={'center'} variant="h5" color="initial">
          {currentAppoiment.title}
        </Typography>
      </Box>
      <Box>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={5}>
              <DesktopDatePicker
                label="Day"
                inputFormat="MM/dd/yyyy"
                shouldDisableDate={disableWeekend}
                value={new Date(currentAppoiment.date || new Date())}
                onChange={handleDay}
                renderInput={(params) => (
                  <TextField fullWidth size="small" {...params} />
                )}
              />
            </Grid>
            <Grid item xs={6} sm={3.5}>
              <TimePicker
                label="From"
                minTime={new Date(minHrs)}
                value={new Date(currentAppoiment.startTime || new Date())}
                onChange={handleFrom}
                renderInput={(params) => (
                  <TextField fullWidth size="small" {...params} />
                )}
              />
            </Grid>
            <Grid item xs={6} sm={3.5}>
              <TimePicker
                label="To"
                minTime={new Date(currentAppoiment.startTime)}
                maxTime={new Date(maxHrs)}
                value={new Date(currentAppoiment.endTime || new Date())}
                onChange={handleTo}
                InputProps={{ readOnly: true }}
                renderInput={(params) => (
                  <TextField disabled fullWidth size="small" {...params} />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl size="small" fullWidth>
                <InputLabel id="patien">Patien</InputLabel>
                <Select
                  labelId="patien"
                  id="patien"
                  value={currentAppoiment.patient}
                  label="Patien"
                  onChange={handlePatient}>
                  {patienList.map((item, key) => {
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
              <FormControl size="small" fullWidth>
                <InputLabel id="doctor">Doctor</InputLabel>
                <Select
                  labelId="doctor"
                  id="doctor"
                  value={currentAppoiment.doctor}
                  label="Doctor"
                  onChange={handleDoctor}>
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
              <FormControl size="small" fullWidth>
                <InputLabel id="tratament">Tratament</InputLabel>
                <Select
                  labelId="tratament"
                  id="tratament"
                  value={currentAppoiment.treatment}
                  label="Tratament"
                  onChange={handleTratament}>
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
            <Grid item xs={12} sm={4}>
              <Box display="flex" sx={{ justifyContent: 'center' }}>
                <Box>
                  <Checkbox size="small" checked={auto} onChange={handleAuto} />
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                  }}>
                  Automate Schudle
                </Box>
              </Box>
            </Grid>
            <Grid item xs={3} sm={2}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}>
                <Button onClick={closeForm} variant="text" color="primary">
                  Cancel
                </Button>
              </Box>
            </Grid>
            <Grid item xs={3} sm={2}>
              <Button
                onClick={handleBack}
                disabled={!auto || countSteep == 1 ? true : false}
                variant="text"
                color="primary">
                Back
              </Button>
            </Grid>
            <Grid item xs={3} sm={2}>
              <Button
                onClick={handleNext}
                disabled={
                  !auto || countSteep == appoiments.length ? true : false
                }
                variant="text"
                color="primary">
                Next
              </Button>
            </Grid>
            <Grid item xs={3} sm={2}>
              <Button
                disabled={visited >= appoiments.length ? false : true}
                onClick={handleCreate}
                variant="text"
                color="primary">
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

  //Simular data inicial

  const calendar = [
    {
      title: 'New Appointment',
      id: 1,
      date: 'Wed Jul 27 2022 14:05:20 GMT-0500 (Central Daylight Time)',
      startTime: 'Wed Jul 27 2022 15:05:20 GMT-0500 (Central Daylight Time)',
      endTime: 'Wed Jul 27 2022 15:05:20 GMT-0500 (Central Daylight Time)',
      patient: 1,
      doctor: 1,
      treatment: 1,
      autoSchedule: 'on',
    },
    {
      title: 'First',
      id: 2,
      date: 'Wed Jul 28 2022 14:05:20 GMT-0500 (Central Daylight Time)',
      startTime: 'Wed Jul 28 2022 16:05:20 GMT-0500 (Central Daylight Time)',
      endTime: 'Wed Jul 28 2022 16:05:20 GMT-0500 (Central Daylight Time)',
      patient: 2,
      doctor: 2,
      treatment: 2,
      autoSchedule: 'on',
    },
    {
      title: 'Second',
      id: 3,
      date: 'Wed Jul 29 2022 14:05:20 GMT-0500 (Central Daylight Time)',
      startTime: 'Wed Jul 27 2022 17 :05:20 GMT-0500 (Central Daylight Time)',
      endTime: 'Wed Jul 27 2022 17:05:20 GMT-0500 (Central Daylight Time)',
      patient: 3,
      doctor: 3,
      treatment: 3,
      autoSchedule: 'on',
    },
    {
      title: 'Third',
      id: 4,
      date: 'Wed Jul 30 2022 14:05:20 GMT-0500 (Central Daylight Time)',
      startTime: 'Wed Jul 27 2022 18:05:20 GMT-0500 (Central Daylight Time)',
      endTime: 'Wed Jul 27 2022 18:05:20 GMT-0500 (Central Daylight Time)',
      patient: 4,
      doctor: 4,
      treatment: 4,
      autoSchedule: 'on',
    },
  ];
  const handleResult = (data) => {
    console.log(data.length);

    setData(data);
  };
  return (
    <Box>
      <Dialog onClose={handleClose} open={open}>
        <Form
          handleResult={handleResult}
          handleClose={handleClose}
          dataInitial={calendar}
        />
      </Dialog>
      <Button variant="contained" color="primary" onClick={handleClose}>
        Create Appoiment
      </Button>
      <Box sx={{ mt: 3 }}>
        {data.length == 0
          ? 'No data'
          : data.map((item, key) => {
              return (
                <div key={key}>
                  <pre>{JSON.stringify(item, null, 2)}</pre>
                </div>
              );
            })}
      </Box>
    </Box>
  );
};
export default Index;
