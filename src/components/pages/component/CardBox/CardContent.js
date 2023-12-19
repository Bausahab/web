import { Box, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles({
    para: {
        fontSize: '12px !important'
    },
    mainBox: {
        backgroundColor: '#fff',
        padding: '2.5rem 1rem',
        '@media(max-width : 1200px)': {
            padding: '1rem 1rem'
        }
    }
})


const CardContent = ({ CardTitle, CardPara, CardTitle2, CardPara2 }) => {
    const classes = useStyles();
    return (
        <>
            <Box className={classes.mainBox}>

                <Grid container spacing={1} className="card-gap">
                    <Grid item lg={CardTitle2 == "" && CardPara2 == '' ? 12 : 6} md={CardTitle2 == "" && CardPara2 == '' ? 12 : 6} sm={CardTitle2 == "" && CardPara2 == '' ? 12 : 12} xs={12} className="card-value-cls">
                        <Typography variant="h4" fontWeight={700} color={'#676a6c'}>{CardTitle}</Typography>
                        <Typography className={classes.para} color={'#11511a'}>{CardPara}</Typography>
                    </Grid>
                    {CardTitle2 == "" && CardPara2 == '' ? "" : <Grid item lg={6} md={6} sm={12} xs={12} className="card-value-cls">
                        <Typography variant="h4" fontWeight={700} color={'#676a6c'}>{CardTitle2}</Typography>
                        <Typography className={classes.para} color={'#11511a'}>{CardPara2}</Typography>
                    </Grid>}

                </Grid>
            </Box>
        </>
    )
}

export default CardContent;