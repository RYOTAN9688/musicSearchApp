import React from 'react'
import firebase from './config/firebase';
import Button from '@material-ui/core/Button';




const handleSubmit = (e) => {
    e.preventDefault()
}

const MusicSearch = () => {
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    id="text"
                />

                <Button
                    variant="outlined"
                    color="secondary"
                    onSubmit="">Search</Button>
            </form>
            <Button
                variant="outlined"
                onClick={() => firebase.auth().signOut()} >Sign Out</Button>

        </>
    )
}

export default MusicSearch;