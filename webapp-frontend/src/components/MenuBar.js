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
    title: {
        flexGrow: 1,
    },
    name: {
        fontSize: '18px',
        marginRight: theme.spacing(1),
        marginBottom: theme.spacing(0.4)
    },
    profile: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
}));

export default function MenuBar({ authUser }) {
    const classes = useStyles();
    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const {isAuth, user} = authUser

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
                                className={classes.profile}
                            >
                                <p className={classes.name}>{user.username}</p>
                                <Link to="/profile"> <AccountCircle /></Link>
                            </IconButton>
                        </div>
                    ) : (
                            <div>
                                <IconButton
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    color="inherit"
                                    className={classes.profile}
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