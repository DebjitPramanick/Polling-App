import React from 'react';
import { Link, Redirect } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';


const useStyles = makeStyles((theme) => ({
    name: {
        fontSize: '18px',
        marginRight: theme.spacing(1),
        color: 'white'
    },
    profile: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }
}));

export default function MenuBar({ authUser }) {
    const classes = useStyles();

    const { isAuth, user } = authUser

    return (
        <div className="nav-bar">
            <div className="nav-container">

                <Link to="/"> <h3>Polling App</h3></Link>

                {isAuth ? (
                    <div>
                        <IconButton
                            className={classes.profile}
                        >
                            <p className={classes.name}>{user.username}</p>
                            <Link to="/profile"><AccountCircle className="icon"/></Link>
                        </IconButton>
                    </div>
                ) : (
                        <div>
                            <IconButton
                                className={classes.profile}
                            >
                                <Link to="/login"><AccountCircle className="icon"/></Link>
                            </IconButton>
                        </div>
                    )}

            </div>
        </div>
    );
}