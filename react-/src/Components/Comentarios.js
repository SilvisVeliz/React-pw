import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Alert } from '@material-ui/lab';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import './Comentarios.css';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

/*Función flecha*/
const Comentarios = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState('female');

    const handleChange = (event) => {
        setValue(event.target.value);
    };
    return(
        <div className={classes.root}>
            <div className={"ngh"}>
                <Alert severity="info">Para enviar este comentario debe completar todos los campos.
                    Se requiere de estar suscrito.</Alert>
                <div className={"style-ngh"}>

                    <form className={classes.root} noValidate autoComplete="off">
                        <TextField
                            id="outlined-full-width"
                            label="Correo electrónico"
                            style={{ marginTop: 10 }}
                            placeholder=""
                            helperText=""
                            fullWidth
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="outlined"
                        />
                        <TextField
                            id="outlined-full-width"
                            label="Comentario"
                            style={{ marginTop: 10 }}
                            placeholder=""
                            helperText=""
                            fullWidth
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="outlined"
                        />
                        <FormControl component="fieldset" className={"radio"}>
                            <FormLabel component="legend">Puntuación</FormLabel>
                            <RadioGroup aria-label="puntuacion" name="punt" value={value} onChange={handleChange}>
                                <FormControlLabel value="malo" control={<Radio />} label="Malo. Información muy incompleta" />
                                <FormControlLabel value="regular" control={<Radio />} label="Regular. Hace falta más información" />
                                <FormControlLabel value="bueno" control={<Radio />} label="Buena. Información completa" />
                            </RadioGroup>
                        </FormControl>
                        <Button>
                            Enviar
                        </Button>
                    </form>
                </div>
            </div>

        </div>
    )
};

export default Comentarios;