import { Visibility, VisibilityOff } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
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
import Link from 'next/link';

import {
  handlerRequestErr,
  validatePass,
} from 'functions/validate.functions';

import useValidateForm from 'hooks/useValidateForm';

import { forms } from 'utils/errors.messages';

import {
  MainDiv,
  Cartoon,
  FormDiv,
  LinksDiv,
  ButtonIcon,
} from '../shared.styles';

import Svg from '@atoms/svg';
import { useMutation } from '@apollo/client';
import { LOGIN_MUTATION } from 'graphql/mutations';
import { useRouter } from 'next/dist/client/router';
import { NavBackground } from '@atoms/nav-background';

const index = () => {
  //satate for show or hide password
  const [showPass, setShowPass] = useState(false);
  //state for open and close the main alert
  const [open, setOpen] = useState(false);
  //state for open and close the loader
  const [loader, setLoader] = useState(false);

  //router hook
  const router = useRouter();

  //functions to change the state of the loader and the alert
  const handleAlert = (state: boolean) => setOpen(state);
  const handleLoader = (state: boolean) => setLoader(state);

  //use the validate hook
  const { onChange, data, onSubmit, err, setErr } = useValidateForm({
    parameters: [
      {
        name: 'user',
        value: '',
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
  const { user, pass } = data;

  const [loginMutation] = useMutation(LOGIN_MUTATION);

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
      const response = await loginMutation({
        variables: {
          input: {
            user,
            pass,
          },
        },
      });

      //hide loader
      handleLoader(false);

      //redirect user
      router.push(
        `${process.env.WEB_APP_URI!}/?token=${response.data.login}`
      );
    } catch (e) {
      handleLoader(false);
      setErr(handlerRequestErr(e));
    }
  };

  return (
    <>
      <Svg path="/static/nav-background" Styles={NavBackground} />
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
            <InputLabel htmlFor="input-user">
              Ingresa tu correo o usuario
            </InputLabel>
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
              type={showPass ? 'text' : 'password'}
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
            <Link href="/signup">
              <p>Registrate</p>
            </Link>
            <Link href="/">
              <p>¿Olvidates tu contraseña?</p>
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
            Ingresar
          </Button>
        </FormDiv>
      </MainDiv>
    </>
  );
};

export default index;
