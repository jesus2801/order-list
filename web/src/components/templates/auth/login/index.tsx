import React from 'react';
import Svg from '@atoms/svg';
import {
  Input,
  FormControl,
  InputLabel,
  Button,
} from '@material-ui/core';

import { MainDiv, Cartoon, FormDiv } from '../shared.styles';

const index = () => {
  return (
    <MainDiv>
      <Svg path="/static/auth/login" Styles={Cartoon} />
      <FormDiv>
        <h1>Iniciar sesión</h1>
        <FormControl fullWidth={true}>
          <InputLabel htmlFor="input-user">Ingresa tu usuario</InputLabel>
          <Input id="input-user" autoFocus={true} />
        </FormControl>

        <FormControl fullWidth={true} margin="normal">
          <InputLabel htmlFor="input-pass">
            Ingresa tu contraseña
          </InputLabel>
          <Input id="input-pass" type="password" />
        </FormControl>

        <Button
          className="submit-button"
          variant="contained"
          fullWidth={true}
          color="secondary"
        >
          Ingresar
        </Button>
      </FormDiv>
    </MainDiv>
  );
};

export default index;
