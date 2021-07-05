import React, { useState } from 'react'
import firebase from './config/firebase'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Container from '@material-ui/core/Container';



const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(5),
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    button: {

        marginTop: theme.spacing(5),
        display: "flex",
        flexDirection: "column",
        alignItems: "center"

    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },

}))





const SignUp = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const classes = useStyles();


    const handleSubmit = (e) => {
        e.preventDefault()
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then()
            .catch((error) => {

                console.log(error)
            })
    }



    return (
        <>
            <Container component="main" maxWidth="xs">
                <Typography>SignUp</Typography>
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
                    <Button
                        variant="outlined"
                        color="inherit"
                        className={classes.submit}
                        type="submit"
                    >
                        SignUp
                    </Button>
                    <Link to="Login">Login</Link>
                </form>
            </Container>
        </>
    )
}

export default SignUp;