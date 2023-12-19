import { Box, Button, List, Typography } from "@mui/material";
import React, { useContext, } from "react";
import logo from '../assets/images/logo.png'
import { makeStyles } from "@mui/styles";
import ethstroke from '../assets/images/ethstroke.svg'
import ethstrokeb from '../assets/images/ethstrokeb.svg'
import ethfilled from '../assets/images/ethfilled.svg'
import walletIcon from '../assets/images/walletIcon.svg'
import walletIconb from '../assets/images/walletIconb.svg'
import {
    useConnectModal,
    useAccountModal,
    useChainModal,
} from '@rainbow-me/rainbowkit';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { Link } from "react-router-dom";
import { useAccount, useBalance } from "wagmi";
import { ColorModeContext } from "../../store/Index";
import ConnectBtn from './ConnectBtn'


const useStyles = makeStyles({
    btn: {
        border: '1px solid #8e8e8eb3 !important',
        padding: '0.5rem 1rem !important',
        borderRadius: '3rem !important'
    },
    btn2: {
        border: '1px solid #8e8e8eb3 !important',
        color: '#fff !important',
        padding: '0.5rem 1rem 0.2rem 1rem !important',
        borderRadius: '3rem !important'
    },
    hdrBox: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxShadow: '12px 2px 12px -7px #535353',
        padding: '0.5rem 1.5rem',
        position: 'fixed',
        backgroundColor: '#000',
        top: 0,
        width: '63.3%',
        zIndex: '1000'
    },
    headerList: {
        display: 'flex',
        '@media(max-width : 900px)': {
            display: 'none'
        }
    },
    headerList2: {
        display: 'none',
        '@media(max-width : 900px)': {
            display: 'block'
        }
    },
    walletbtn: {
        background: 'linear-gradient(45deg, #ffa500 10%, #ff8e53 90%)',
        padding: '0.5rem 1rem !important',
        borderRadius: '3rem !important',
        color: '#fff !important',
    },
    listitem: {
        marginLeft: '1rem'
    },
    Diswalletbtn: {
        padding: '0.5rem 1rem !important',
        borderRadius: '3rem !important',

    }
})



const Navbar = () => {
    const classes = useStyles();
    const accountStatus = useAccount()
    const { openConnectModal } = useConnectModal();
    const { openAccountModal } = useAccountModal();
    const { openChainModal } = useChainModal();

    const { data } = useBalance({
        address: `${accountStatus.address}`
    })

    const { mode, toggleMode } = useContext(ColorModeContext)

    return (
        <>

            <Box>
                <List className={classes.headerList}>
                    <Box className={classes.listitem}>
                        <Button className={classes.btn} sx={{ color: 'text.default', }} variant="outlined" startIcon={<Typography component={'img'} src={logo} width={20} />}>
                            $0.0286
                        </Button>
                    </Box>

                    <Box className={classes.listitem}>
                        <Button className={classes.btn} sx={{ color: 'text.default', }} variant="outlined" startIcon={<Typography component={'img'} src={`${mode === 'dark' ? ethstroke : ethstrokeb}`} width={24} />}>
                            {accountStatus.isConnected ? <Typography>${data?.formatted} {data?.symbol}</Typography> : <Typography color={'text.default'}>$0.00</Typography>}
                        </Button>

                    </Box>

                    {accountStatus.isConnected ?
                        <Box className={classes.listitem}>
                            <Button sx={{ color: 'text.default', }} href={`https://bscscan.com/address/${accountStatus.address.substring(0, 5) + "...." + accountStatus.address.substring(accountStatus.address.length - 4)}`} target={'_blank'} className={classes.btn} variant="outlined" startIcon={<Typography component={'img'} src={`${mode === 'dark' ? walletIcon : walletIconb}`} width={24} />}>
                                {accountStatus.isConnected && `${accountStatus.address.substring(0, 5) + "...." + accountStatus.address.substring(accountStatus.address.length - 4)}`}

                            </Button>
                        </Box>
                        :
                        null
                    }



                  
                        <ConnectBtn />
                     

                    <Box className={classes.listitem}>

                        {openConnectModal && (
                            <Button onClick={openConnectModal} className={classes.walletbtn} variant="contained">
                                Connect Wallet
                            </Button>

                        )}

                        {openAccountModal && (
                            <Button onClick={openAccountModal} sx={{
                                backgroundColor: 'disBtn.default', color: 'text.default', '&:hover': {
                                    backgroundColor: 'disBtn.default'
                                }
                            }} className={classes.Diswalletbtn} variant="contained">
                                DisConnect Wallet
                            </Button>
                        )}



                    </Box>
                </List>

                <List className={classes.headerList2}>
                    <Box className={classes.listitem}>

                        {openConnectModal && (
                            <Button onClick={openConnectModal} className={classes.walletbtn} variant="contained">
                                Connect Wallet
                            </Button>

                        )}

                        {openAccountModal && (
                            <Button onClick={openAccountModal} sx={{ backgroundColor: 'disBtn.default', color: 'text.default', '&:hover': { backgroundColor: 'disBtn.default' } }} className={classes.Diswalletbtn} variant="contained">
                                DisConnect Wallet
                            </Button>
                        )}



                    </Box>
                </List>
            </Box>

        </>
    )
}

export default Navbar;