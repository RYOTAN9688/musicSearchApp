import React, { useContext, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import firebase from "./config/firebase";
import { AuthContext } from './AuthService';
import { makeStyles } from '@material-ui/core';
import Container from '@material-ui/core/Container';



const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(5),
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    form: {
        marginTop: theme.spacing(1)
    },
    submit: {
        margin: theme.spacing(3, 0, 2)
    }

}))


const Login = ({ history }) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const classes = useStyles();

    const handleSubmit = (e) => {
        e.preventDefault()
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => {
                history.push("/")
            })
            .catch((err) => {
                console.log(err)
            })
    }
    const user = useContext(AuthContext)

    if (user) {
        return <Redirect to="/" />
    }

    return (
        <>
            <Container component="main" maxWidth="xs">
                <Typography >LOGIN</Typography>
                <form
                    className={classes.form}
                    onSubmit={handleSubmit}>
                    <div className={classes.paper}>
                        <label htmlFor="Email">Email</label>
                        <TextField
                            id="email"
                            type="email"
                            label="email"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            value={email}
                            onChange={e => {
                                setEmail(e.target.value)
                            }}
                        />
                    </div>
                    <div className={classes.paper}>
                        <label htmlFor="password">PassWord</label>
                        <TextField
                            id="password"
                            type="password"
                            label="password"
                            name="password"
                            value={password}
                            onChange={e => {
                                setPassword(e.target.value)
                            }}
                        />
                    </div>
                    <Button type="submit" >Login</Button>
                    <Link to="/SignUp">signup</Link>
                </form>
            </Container>
        </>
    )
}

export default Login;