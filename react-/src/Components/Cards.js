import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
});

/*Función flecha*/
const Cards = () => {
    const classes = useStyles();
    return (
        <Grid container spacing={1}>
            <Grid item xs={4}>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="Sinestesia"
                            height="140"
                            src="/img/sinest.jpg"
                            title="Sinestesia"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Sinestesia
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Es la capacidad de percibir las cosas con varios sentidos a un mismo tiempo.
                                Por ejemplo, ver un sonido, oír un color o notar un sabor cuando tocas una textura.
                                Una fusión de sentidos ante los estímulos.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
            <Grid  item xs={4}>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="Daltonismo"
                            height="140"
                            src="/img/sind.jpg"
                            title="Daltonismo"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Daltonismo
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                El daltonismo es la incapacidad para ver algunos colores en la forma normal.
                                Las personas con una visión del color normal mezclan los tres colores espectrales rojo,
                                verde y azul para crear otros colores.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
            <Grid  item xs={4}>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="Síndrome Alicia"
                            height="140"
                            src="/img/dalt.png"
                            title="Alicia en el país de las maravillas"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Síndrome de Alicia en el país de las maravillas
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Se trata de un trastorno neurológico muy raro en el que la percepción visual queda alterada,
                                viéndose las cosas de un tamaño que no se corresponde con la realidad.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>

        </Grid>

    )
};

export default Cards;