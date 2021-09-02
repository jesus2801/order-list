import React from 'react';

import Layout from '@templates/layout';
import LoginComponent from '@templates/auth/login';

const login = () => {
  return (
    <Layout title="Iniciar sesión">
      <LoginComponent />
    </Layout>
  );
};

export default login;
