import React from 'react';
import { Grid, Box, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';

import './Navbar.css';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        menu:{
            alignItems: 'flex-end',
            textAlign: 'right'
        },
        items:{
            paddingLeft:10
        }
    },
}));

/*Función flecha*/
const NabvarX = () => {
    const classes = useStyles;
    return(
        <Grid container spacing={1}>
            <Grid item xs={3} className={classes.menu}></Grid>
            <Grid item xs={9} className={classes.menu}>
                <box p={2}>
                    <Hidden smUP>
                        <Box>MENU</Box>
                    </Hidden>
                    <Hidden xsDown>
                        <Link
                            className={classes.item}
                            to="/"
                            component="button"
                            variant="body2"
                            underline="none"
                            onClick={() => {
                                console.info("I'm a button.");
                            }}
                        >
                            Inicio |
                        </Link>
                        <Link
                            className={classes.item}
                            to="/enf"
                            component="button"
                            variant="body2"
                            underline="none"
                            onClick={() => {
                                console.info("I'm a button.");
                            }}
                        >
                            Enfermedades |
                        </Link>
                        <Link
                            className={classes.item}
                            to="/ojo"
                            component="button"
                            variant="body2"
                            underline="none"
                            onClick={() => {
                                console.info("I'm a button.");
                            }}
                        >
                            El ojo |
                        </Link>
                        <Link
                            className={classes.item}
                            to="/soc"
                            component="button"
                            variant="body2"
                            underline="none"
                            onClick={() => {
                                console.log('click');
                            }}
                        >
                            Social |
                        </Link>
                        <Link
                            className={classes.item}
                            to="/com"
                            component="button"
                            variant="body2"
                            underline="none"
                            onClick={() => {
                                console.log('click');
                            }}
                        >
                            Comentarios
                        </Link>
                    </Hidden>
                </box>
            </Grid>
        </Grid>
    );
}

export default NabvarX;