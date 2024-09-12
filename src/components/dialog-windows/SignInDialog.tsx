import { Button, ButtonGroup, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from "@mui/material";
import { useState } from "react";
import { TEXTS } from "../../constants";

interface SignInProps {
    seen: boolean;
    changeSeen: () => void;
    changeSignUpSeen: () => void;
    handleAuthorized: (token: string) => void;
}

const SignInDialog = ({ seen, changeSeen, changeSignUpSeen, handleAuthorized }: SignInProps) => {
    const [ tokenInput, setTokenInput ] = useState('');

    const handlePrevious = () => {
        changeSeen();
        changeSignUpSeen();
    }

    const handleChangeToken = (event: React.ChangeEvent<HTMLInputElement>) => {
        const currentToken = event.currentTarget.value;

        setTokenInput(currentToken);
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        changeSeen();
        handleAuthorized(tokenInput);
    }   

    return (
        <Dialog
            open={seen}
            onClose={handlePrevious}
            PaperProps={{
                component: 'form',
                onSubmit: handleSubmit
            }}
            fullWidth
        >
            <DialogTitle>{TEXTS.LOGIN}</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    { TEXTS.LOGIN_REQUIREMENT_TOKEN }
                </DialogContentText>
                <TextField
                    fullWidth
                    type='text'
                    variant='standard'
                    autoFocus
                    required
                    value={tokenInput}
                    onChange={handleChangeToken}
                />
            </DialogContent>
            <DialogActions>
                <ButtonGroup variant='contained'>
                    <Button onClick={handlePrevious}>
                        { TEXTS.LOGIN_BUTTONS.PREVIOUS }
                    </Button>
                    <Button type='submit'>
                        { TEXTS.LOGIN_BUTTONS.LOGIN }
                    </Button>
                </ButtonGroup>
            </DialogActions>
        </Dialog>  
    );
}

export default SignInDialog;