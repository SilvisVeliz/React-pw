import React from 'react';
import Grid from '@material-ui/core/Grid'

/*Función flecha*/
const Contacto = () => {
    return(
        <div>
            <Grid container spacing={1}>
                <Grid item xs={1}>
                    <img width={"50"} src={"/img/facebook.ico"}/>
                </Grid>
                <Grid item xs={1}>
                    <img width={"50"} src={"/img/twitter.ico"}/>
                </Grid>
            </Grid>
        </div>

    )
};

export default Contacto;