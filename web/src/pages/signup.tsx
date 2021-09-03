import React from 'react';

import Layout from '@templates/layout';
import Signup from '@templates/auth/signup';

const signup = () => {
  return (
    <Layout title="Registrarse">
      <Signup />
    </Layout>
  );
};

export default signup;
