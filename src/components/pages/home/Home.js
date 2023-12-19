import { Box, Grid, Typography } from "@mui/material";
import React, { useContext, } from "react";
import Header from "../../header/Header";
import { makeStyles } from "@mui/styles";
import effect from '../../assets/images/effect.svg'
import effectw from '../../assets/images/effectw.svg'
import TableOne from "./TableOne";
import Info from "../../info/Info";
import { ColorModeContext } from "../../../store/Index";


const useStyles = makeStyles({
    // root: {
    //     overflowY: 'scroll',
    //     minHeight: '100vh',
    //     '@media(max-width : 1200px)': {
    //         overflowY: 'inherit',
    //         minHeight: 'inherit'
    //     },
    //     "&::-webkit-scrollbar": {
    //         width: '4px',
    //     },
    //     "&::-webkit-scrollbar-track": {
    //         backgroundColor: '#250C05',
    //     },
    //     "&::-webkit-scrollbar-thumb": {
    //         borderRadius: '10px',
    //         background: '-webkit-linear-gradient(45deg, #f97d25, #f9e025 80%)',
    //     },
    // },
    mainDiv: {
        backgroundColor: '#000',
        paddingBottom: '1rem',
        height: '80vh',
        '@media(max-width : 1200px)': {
            height: 'auto'
        }
    },
    infomation: {
        backgroundColor: '#FECDD3',
        padding: '0.8rem 1rem',
        display: 'flex',
        alignItems: 'center',
        margin: '2rem 0rem 1rem 0rem',

        borderRadius: '1rem'
    },
    boxMain: {
        padding: '5rem 1.5rem 2rem 1.5rem',
        '@media(max-width : 1200px)': {
            padding: '2rem 1.5rem 2rem 1.5rem',
        }
    },
    price: {
        textAlign: 'center',
        '@media(max-width : 900px)': {
            textAlign: 'left'
        }
    },
    price2: {
        textAlign: 'center',
        marginTop: '1rem',
        '@media(max-width : 900px)': {
            textAlign: 'left'
        }
    },
    box1: {
        padding: '2rem 0rem 8rem 0rem',
        borderRadius: '1rem',


        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        '@media(max-width : 900px)': {
            backgroundSize: '100%',
            padding: '2rem 0rem 2.5rem 1.5rem',
        }
    },

    box2: {
        padding: '1.5rem',
        backgroundColor: '#151515',
        borderRadius: '1rem',
        display: 'block',
        height: '105px'
    },
    box3: {
        padding: '1rem',
        backgroundColor: '#151515',
        borderRadius: '1rem',
        display: 'block',
        height: '95px'
    },
    box4: {
        padding: '1rem',
        backgroundColor: '#151515',
        borderRadius: '0.5rem',
        display: 'block',
        marginTop: '1.5rem'
    },

    box5: {
        padding: '1rem',
        backgroundColor: '#151515',
        borderRadius: '0.5rem',
        display: 'block',
        marginTop: '0.2rem'
    },

    stake: {
        marginTop: '1rem'
    },
    stats: {
        marginTop: '1rem'
    },
    emissionHding: {
        marginTop: '3rem',
        marginBottom: '1rem'
    },
    revenueBox: {
        backgroundColor: '#fcd3492e',
        borderRadius: '0.5rem',
        padding: '1.5rem',
        marginTop: '1rem'
    }
})
const Home = () => {
    const classes = useStyles();
    const { mode, toggleMode } = useContext(ColorModeContext)
    return (
        <>
            <Box sx={{
                "&::-webkit-scrollbar-track": {
                    backgroundColor: 'Sliderroot.default',
                },
            }}>
                <Box className={classes.mainDiv} sx={{ backgroundColor: 'bg.default' }}>
                    <Header HeaderTitle="Dashboard" />
                    <Box className={classes.boxMain}>
                        <Info />

                        <Box>
                            <Typography variant="h6" color={'text.default'}>Stats</Typography>

                            <Box className={classes.stats}>
                                <Grid container spacing={2}>
                                    <Grid item lg={4} md={4} sm={12} xs={12}>
                                        <Box className={classes.box1} sx={{ backgroundImage: `${mode === 'dark' ? `url(${effect})` : `url(${effectw})`}`, }}>
                                            <Box className={classes.price}>
                                                <Typography fontWeight={700} variant="h4" color={'text.default'}>$0.0241</Typography>
                                                <Typography color={'text.default'}>YDF Price</Typography>
                                            </Box>

                                            <Box className={classes.price2}>
                                                <Typography className={classes.gradientText} variant="h5" color={'text.default'}>495,402,879</Typography>
                                                <Typography color={'text.default'}>Circulating Supply</Typography>

                                            </Box>
                                        </Box>
                                    </Grid>
                                    <Grid item lg={8} md={8} sm={12} xs={12}>
                                        <Box>
                                            <Grid container spacing={2}>
                                                <Grid item lg={6} md={6} sm={12} xs={12}>
                                                    <Box className={classes.box2} sx={{ backgroundColor: 'disBtn.default' }}>
                                                        <Typography fontWeight={700} variant="h4" color={'text.default'}>250,238,699</Typography>
                                                        <Box className={classes.stake}>
                                                            <Typography color={'text.default'} fontWeight={700}>( YDF )</Typography>
                                                            <Typography color={'text.default'}>Total YDF Staked</Typography>
                                                        </Box>
                                                    </Box>
                                                </Grid>

                                                <Grid item lg={6} md={6} sm={12} xs={12}>
                                                    <Box className={classes.box2} sx={{ backgroundColor: 'disBtn.default' }}>
                                                        <Typography fontWeight={700} variant="h4" color={'text.default'}>53,623,67
                                                            <Typography component={'span'} color={'text.default'} fontWeight={700}>( YDF )</Typography>
                                                        </Typography>
                                                        <Box className={classes.stake}>

                                                            <Typography color={'text.default'}>Total Yield Vesting</Typography>
                                                        </Box>
                                                    </Box>
                                                </Grid>

                                                <Grid item lg={6} md={6} sm={12} xs={12}>
                                                    <Box className={classes.box3} sx={{ backgroundColor: 'disBtn.default' }}>
                                                        <Typography fontWeight={700} variant="h4" color={'text.default'}>1,484
                                                            <Typography component={'span'} color={'text.default'} fontWeight={700}>( sYDF )</Typography>
                                                        </Typography>
                                                        <Box className={classes.stake}>

                                                            <Typography color={'text.default'}>Total Single Sided NFTs
                                                            </Typography>
                                                        </Box>
                                                    </Box>
                                                </Grid>

                                                <Grid item lg={6} md={6} sm={12} xs={12}>
                                                    <Box className={classes.box3} sx={{ backgroundColor: 'disBtn.default' }}>
                                                        <Typography fontWeight={700} variant="h4" color={'text.default'}>182
                                                            <Typography component={'span'} color={'text.default'} fontWeight={700}>( slYDF )</Typography>
                                                        </Typography>
                                                        <Box className={classes.stake}>

                                                            <Typography color={'text.default'}>Total LP NFTs</Typography>
                                                        </Box>
                                                    </Box>
                                                </Grid>
                                            </Grid>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>

                        <Box className={classes.emissionHding}>
                            <Typography color={'text.default'} variant="h6">Emissions & Revenue</Typography>
                        </Box>
                        <Box className={classes.revenueBox} sx={{ backgroundColor: 'revenue.default' }}>
                            <Typography fontWeight={700} color={'revenuetext.default'}>Revenue Note:</Typography>
                            <Typography color={'revenuetext.default'}>Revenue shown here includes YDF's utilities, which are currently Futures Trading and the NFT Marketplace. As we release additional utility such as OTC Trading, Lending/Borrowing, etc., revenue generated from these utilities will be added here. Revenue from aftermarket sites, such as OpenSea and LooksRare are not included here.</Typography>
                        </Box>

                        <Box>
                            <Grid container spacing={2}>
                                <Grid item lg={4} md={4} sm={12} xs={12}>
                                    <Box className={classes.box4} sx={{ backgroundColor: 'disBtn.default' }}>
                                        <Typography fontWeight={700} variant="h5" color={'text.default'}>$9,252,695</Typography>
                                        <Typography color={'text.default'}>Annual Yield Emissions</Typography>
                                    </Box>
                                </Grid>

                                <Grid item lg={4} md={4} sm={12} xs={12}>
                                    <Box className={classes.box4} sx={{ backgroundColor: 'disBtn.default' }}>
                                        <Typography fontWeight={700} variant="h5" color={'text.default'}>$-2,323</Typography>
                                        <Typography color={'text.default'}>Daily Avg. Revenue (30 days)</Typography>
                                    </Box>
                                </Grid>

                                <Grid item lg={4} md={4} sm={12} xs={12}>
                                    <Box className={classes.box4} sx={{ backgroundColor: 'disBtn.default' }}>
                                        <Typography fontWeight={700} variant="h5" color={'text.default'}>$-848,067</Typography>
                                        <Typography color={'text.default'}>Annual Normalized Revenue</Typography>
                                    </Box>
                                </Grid>


                            </Grid>
                        </Box>



                        <Box className={classes.emissionHding}>
                            <Typography color={'text.default'} variant="h6">Perpetual Futures Trading</Typography>
                        </Box>

                        <Box>
                            <Grid container spacing={2}>
                                <Grid item lg={6} md={6} sm={12} xs={12}>
                                    <Box className={classes.box5} sx={{ backgroundColor: 'disBtn.default' }}>
                                        <Typography fontWeight={700} variant="h5" color={'text.default'}>$302,718,282</Typography>
                                        <Typography color={'text.default'}>Total Volume (position size, since Sept. 12)</Typography>
                                    </Box>
                                </Grid>

                                <Grid item lg={6} md={6} sm={12} xs={12}>
                                    <Box className={classes.box5} sx={{ backgroundColor: 'disBtn.default' }}>
                                        <Typography fontWeight={700} variant="h5" color={'text.default'}>$3,298,957</Typography>
                                        <Typography color={'text.default'}>24hr Volume (position size)</Typography>
                                    </Box>
                                </Grid>

                                <Grid item lg={6} md={6} sm={12} xs={12}>
                                    <Box className={classes.box5} sx={{ backgroundColor: 'disBtn.default' }}>
                                        <Typography fontWeight={700} variant="h5" color={'text.default'}>$-381,982</Typography>
                                        <Typography color={'text.default'}>Total Platform PNL (since Sept. 12)</Typography>
                                    </Box>
                                </Grid>

                                <Grid item lg={6} md={6} sm={12} xs={12}>
                                    <Box className={classes.box5} sx={{ backgroundColor: 'disBtn.default' }}>
                                        <Typography fontWeight={700} variant="h5" color={'text.default'}>$10,662</Typography>
                                        <Typography color={'text.default'}>24hr Platform PNL</Typography>
                                    </Box>
                                </Grid>

                                <Grid item lg={6} md={6} sm={12} xs={12}>
                                    <Box className={classes.box5} sx={{ backgroundColor: 'disBtn.default' }}>
                                        <Typography fontWeight={700} variant="h5" color={'text.default'}>$-89,092</Typography>
                                        <Typography color={'text.default'}>30d Platform PNL</Typography>
                                    </Box>
                                </Grid>

                                <Grid item lg={6} md={6} sm={12} xs={12}>
                                    <Box className={classes.box5} sx={{ backgroundColor: 'disBtn.default' }}>
                                        <Typography fontWeight={700} variant="h5" color={'text.default'}>$35,545</Typography>
                                        <Typography color={'text.default'}>60d Platform PNL</Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>

                        <Box className={classes.emissionHding}>
                            <Typography color={'text.default'} variant="h6">Open Positions</Typography>
                        </Box>

                        <Box>
                            <Grid container spacing={2}>
                                <Grid item lg={4} md={4} sm={12} xs={12}>
                                    <Box className={classes.box5} sx={{ backgroundColor: 'disBtn.default' }} >
                                        <Typography fontWeight={700} variant="h5" color={'text.default'}>$1,071,278</Typography>
                                        <Typography color={'text.default'}>Open Positions</Typography>
                                    </Box>
                                </Grid>

                                <Grid item lg={4} md={4} sm={12} xs={12}>
                                    <Box className={classes.box5} sx={{ backgroundColor: 'disBtn.default' }}>
                                        <Typography fontWeight={700} variant="h5" color={'text.default'}>$1,059,162</Typography>
                                        <Typography color={'text.default'}>Long Positions</Typography>
                                    </Box>
                                </Grid>

                                <Grid item lg={4} md={4} sm={12} xs={12}>
                                    <Box className={classes.box5} sx={{ backgroundColor: 'disBtn.default' }}>
                                        <Typography fontWeight={700} variant="h5" color={'text.default'}>$12,116</Typography>
                                        <Typography color={'text.default'}>Short Positions</Typography>
                                    </Box>
                                </Grid>

                            </Grid>
                        </Box>


                        <Box className={classes.emissionHding}>
                            <Typography color={'text.default'} variant="h6">Marketplace Stats</Typography>
                        </Box>

                        <Box>
                            <Grid container spacing={2}>
                                <Grid item lg={3} md={3} sm={6} xs={12}>
                                    <Box className={classes.box5} sx={{ backgroundColor: 'disBtn.default' }}>
                                        <Typography fontWeight={700} variant="h5" color={'text.default'}>1666</Typography>
                                        <Typography color={'text.default'}>Total NFTs</Typography>
                                    </Box>
                                </Grid>

                                <Grid item lg={3} md={3} sm={6} xs={12}>
                                    <Box className={classes.box5} sx={{ backgroundColor: 'disBtn.default' }}>
                                        <Typography fontWeight={700} variant="h5" color={'text.default'}>891</Typography>
                                        <Typography color={'text.default'}>Owners</Typography>
                                    </Box>
                                </Grid>

                                <Grid item lg={3} md={3} sm={6} xs={12}>
                                    <Box className={classes.box5} sx={{ backgroundColor: 'disBtn.default' }}>
                                        <Typography fontWeight={700} variant="h5" color={'text.default'}>$387,751</Typography>
                                        <Typography color={'text.default'}>Total Volume</Typography>
                                    </Box>
                                </Grid>

                                <Grid item lg={3} md={3} sm={6} xs={12}>
                                    <Box className={classes.box5} sx={{ backgroundColor: 'disBtn.default' }}>
                                        <Typography fontWeight={700} variant="h5" color={'text.default'}>$19,388</Typography>
                                        <Typography color={'text.default'}>Platform Revenue</Typography>
                                    </Box>
                                </Grid>



                            </Grid>
                        </Box>

                        <Box className={classes.emissionHding}>
                            <Typography color={'text.default'} variant="h6">Stake NFT Breakdown</Typography>
                        </Box>
                        <Box>
                            <TableOne />
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default Home;