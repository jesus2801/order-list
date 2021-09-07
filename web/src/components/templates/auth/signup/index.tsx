import { Visibility, VisibilityOff } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
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
  InputAdornment,
  IconButton,
} from '@material-ui/core';
import v from 'validator';

import {
  handlerRequestErr,
  validatePass,
} from 'functions/validate.functions';

import useValidateForm from 'hooks/useValidateForm';

import { forms } from 'utils/errors.messages';

import Svg from '@atoms/svg';

import {
  MainDiv,
  Cartoon,
  FormDiv,
  LinksDiv,
  ButtonIcon,
} from '../shared.styles';
import { useMutation } from '@apollo/client';
import { SIGNUP_MUTATION } from 'graphql/mutations';
import { useRouter } from 'next/dist/client/router';

const index = () => {
  //satate for show or hide password
  const [showPass, setShowPass] = useState(false);
  //state for open and close the main alert
  const [open, setOpen] = useState(false);
  //state for open and close the loader
  const [loader, setLoader] = useState(false);

  //functions to change the state of the loader and the alert
  const handleAlert = (state: boolean) => setOpen(state);
  const handleLoader = (state: boolean) => setLoader(state);

  //router hook
  const router = useRouter();

  //use the validate hook
  const { onChange, data, onSubmit, err, setErr } = useValidateForm({
    parameters: [
      {
        name: 'mail',
        value: '',
        validation: v.isEmail,
        errorMsg: forms.invalidMail,
      },
      {
        name: 'pass',
        value: '',
        validation: validatePass,
        errorMsg: forms.invalidPass,
      },
    ],
  });

  //destructuring the data of the validate hook
  const { mail, pass } = data;

  const [signupMutation] = useMutation(SIGNUP_MUTATION);

  //for handle the alert when there is an error
  useEffect(() => {
    if (err) {
      handleAlert(true);
    } else {
      handleAlert(false);
    }
  }, [err]);

  //for handle the submit button
  const handleSubmit = async () => {
    const value = onSubmit();
    //validate if there is any error
    if (!value) {
      handleAlert(true);
      return;
    }

    try {
      //show loader
      handleLoader(true);

      //send petition
      const response = await signupMutation({
        variables: {
          input: {
            mail,
            pass,
          },
        },
      });

      //hide loader
      handleLoader(false);

      //redirect user
      router.push(`/home?token=${response.data.signup}`);
    } catch (e) {
      handleLoader(false);
      setErr(handlerRequestErr(e));
    }
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

        <h1>Registrarse</h1>
        <FormControl fullWidth={true}>
          <InputLabel htmlFor="input-mail">Ingresa tu correo</InputLabel>
          <Input
            id="input-mail"
            value={mail}
            name="mail"
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
            type={showPass ? 'text' : 'password'}
            value={pass}
            name="pass"
            onChange={onChange}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => setShowPass(!showPass)}
                  onMouseDown={() => setShowPass(!showPass)}
                >
                  {showPass ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>

        <LinksDiv>
          <Link href="/login">
            <p>Iniciar sesión</p>
          </Link>
        </LinksDiv>

        <Link href={`${process.env.SERVER_URI!}/auth/google`}>
          <Button
            startIcon={<ButtonIcon src="/static/auth/google.png" />}
            className="submit-button"
            variant="outlined"
            fullWidth={true}
            color="primary"
          >
            Continuar con Google
          </Button>
        </Link>

        <Link href={`${process.env.SERVER_URI!}/auth/facebook`}>
          <Button
            startIcon={<ButtonIcon src="/static/auth/facebook.png" />}
            className="submit-button"
            variant="outlined"
            fullWidth={true}
            color="primary"
          >
            Continuar con Facebook
          </Button>
        </Link>

        <Button
          className="submit-button"
          variant="contained"
          fullWidth={true}
          color="secondary"
          onClick={handleSubmit}
        >
          ¡Comencemos!
        </Button>
      </FormDiv>
    </MainDiv>
  );
};

export default index;
