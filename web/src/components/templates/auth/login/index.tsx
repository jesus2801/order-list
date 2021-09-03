import React, { useEffect, useState } from 'react';
import Svg from '@atoms/svg';
import {
  Input,
  FormControl,
  InputLabel,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Backdrop,
  CircularProgress,
} from '@material-ui/core';

import {
  MainDiv,
  Cartoon,
  FormDiv,
  LinksDiv,
  ButtonIcon,
} from '../shared.styles';

import useValidateForm from 'hooks/useValidateForm';
import { validatePass, validateUser } from 'functions/validate.functions';
import { forms } from 'utils/errors.messages';
import Link from 'next/link';

const index = () => {
  const [open, setOpen] = useState(false);
  const [loader, setLoader] = useState(false);
  const handleAlert = (state: boolean) => setOpen(state);
  const handleLoader = (state: boolean) => setLoader(state);

  const { onChange, data, onSubmit, err } = useValidateForm({
    parameters: [
      {
        name: 'user',
        value: '',
        validation: validateUser,
        errorMsg: forms.invalidUser,
      },
      {
        name: 'pass',
        value: '',
        validation: validatePass,
        errorMsg: forms.invalidPass,
      },
    ],
  });

  const { user, pass } = data;

  useEffect(() => {
    if (err) {
      handleAlert(true);
    } else {
      handleAlert(false);
    }
  }, [err]);

  const handleSubmit = () => {
    const value = onSubmit();
    if (!value) {
      handleAlert(true);
      return;
    }

    handleLoader(true);

    //TODO: continue with the rest
  };

  return (
    <MainDiv>
      <Svg path="/static/auth/login" Styles={Cartoon} />
      <FormDiv>
        <Dialog open={open} onClose={() => handleAlert(false)}>
          <DialogTitle>Error</DialogTitle>
          <DialogContent>
            <DialogContentText>{err}</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button color="primary" onClick={() => handleAlert(false)}>
              OK
            </Button>
          </DialogActions>
        </Dialog>

        <Backdrop className="main-loader" open={loader}>
          <CircularProgress color="primary" />
        </Backdrop>

        <h1>Iniciar sesión</h1>
        <FormControl fullWidth={true}>
          <InputLabel htmlFor="input-user">Ingresa tu usuario</InputLabel>
          <Input
            id="input-user"
            value={user}
            name="user"
            autoFocus={true}
            onChange={onChange}
          />
        </FormControl>

        <FormControl fullWidth={true} margin="normal">
          <InputLabel htmlFor="input-pass">
            Ingresa tu contraseña
          </InputLabel>
          <Input
            id="input-pass"
            value={pass}
            name="pass"
            type="password"
            onChange={onChange}
          />
        </FormControl>

        <LinksDiv>
          <Link href="/signup">
            <p>Registrate</p>
          </Link>
          <Link href="/">
            <p>¿Olvidates tu contraseña?</p>
          </Link>
        </LinksDiv>

        <Button
          startIcon={<ButtonIcon src="/static/auth/google.png" />}
          className="submit-button"
          variant="outlined"
          fullWidth={true}
          color="primary"
        >
          Continuar con Google
        </Button>

        <Button
          startIcon={<ButtonIcon src="/static/auth/facebook.png" />}
          className="submit-button"
          variant="outlined"
          fullWidth={true}
          color="primary"
        >
          Continuar con Facebook
        </Button>

        <Button
          className="submit-button"
          variant="contained"
          fullWidth={true}
          color="secondary"
          onClick={handleSubmit}
        >
          Ingresar
        </Button>
      </FormDiv>
    </MainDiv>
  );
};

export default index;
