import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Avatar, Button, Link, TextField, Typography } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import LocationCityIcon from '@mui/icons-material/LocationCity';

const Login = () => {

    const paperStyle = { padding: 20, height: '24vh', width: 280, margin: "19px auto", backgroundColor: '#E6F4F1', borderRadius: '12px', boxShadow: '0px 0px 8px rgba(0, 0, 0, 25)' }
    const btnstyle = { backgroundColor: '#1B6DA1', margin: '12px 0' }


    return (
        <Box >
            <Grid container direction='column' alignItems='center' justifyContent="center" height= '70vh'>

                <Grid item xs={3}>
                    <Paper style={paperStyle}>
                        <Grid align='center'>
                            <h2>Login</h2>
                        </Grid>
                        <TextField id="standard-basic" label="ID" variant="standard" placeholder='Enter Your ID' fullWidth required />
                        <TextField id="standard-basic" label="Password" variant="standard" placeholder='Enter Your Password' type='password' fullWidth required />

                        <Button style={btnstyle} type='submit' color='primary' variant="contained" fullWidth>Login</Button>

                    </Paper>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Login;