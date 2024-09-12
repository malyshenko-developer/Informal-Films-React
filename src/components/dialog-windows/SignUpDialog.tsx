import { Button, ButtonGroup, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from "@mui/material";
import { useState } from "react";
import { TEXTS } from "../../constants";

interface SignUpProps {
    seen: boolean;
    changeSeen: () => void;
    changeSignInSeen: () => void;
}

const SignUpDialog = ({ seen, changeSeen, changeSignInSeen }: SignUpProps) => {
    const [ email, setEmail ] = useState('');

    const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        const currentEmail = event.currentTarget.value;

        setEmail(currentEmail);
    }

    const handleSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        setEmail('');
        changeSeen();
        changeSignInSeen();
    }

    const handleSkip = () => {
        changeSeen();
        changeSignInSeen();
    }

    return (
        <Dialog
            open={seen}
            onClose={changeSeen}
            PaperProps={{
                component: 'form',
                onSubmit: handleSubmitForm
            }}
            fullWidth
        >
            <DialogTitle>{TEXTS.REGISTRATION}</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    { TEXTS.REGISTRATION_REQUIREMENT_EMAIL }
                </DialogContentText>
                <TextField
                    fullWidth
                    type='email'
                    variant='standard'
                    autoFocus
                    required
                    value={email}
                    onChange={handleChangeEmail}
                />
            </DialogContent>
            <DialogActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Button onClick={handleSkip}>
                    { TEXTS.REGISTRATION_BUTTONS.SKIP }
                </Button>
                <ButtonGroup variant='contained'>
                    <Button onClick={changeSeen}>
                        { TEXTS.REGISTRATION_BUTTONS.CANCELED }
                    </Button>
                    <Button type='submit'>
                        { TEXTS.REGISTRATION_BUTTONS.SEND }
                    </Button>
                </ButtonGroup>
            </DialogActions>
        </Dialog>  
    );
}

export default SignUpDialog;