import React from 'react';
import { Link, Redirect } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(1),
    },
    title: {
        flexGrow: 1,

    },
}));

export default function MenuBar({ isAuth }) {
    const classes = useStyles();
    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    return (
        <div className={classes.root}>

            <AppBar position="static">
                <Toolbar>

                    <Typography variant="h6" className={classes.title}>
                        <Link to="/"> Polling App</Link>
                    </Typography>

                    {isAuth ? (
                        <div>
                            <IconButton
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                color="inherit"
                            >
                                <Link to="/"> <AccountCircle /></Link>
                            </IconButton>
                        </div>
                    ) : (
                            <div>
                                <IconButton
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    color="inherit"
                                >
                                    <Link to="/login"> <AccountCircle /></Link>
                                </IconButton>
                            </div>
                        )}

                </Toolbar>
            </AppBar>
        </div>
    );
}