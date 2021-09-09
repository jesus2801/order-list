import React from 'react';

import MyCourses from '@organisms/my-courses';

import { SectionTitle } from './styles';

const index = () => {
  return (
    <>
      <MyCourses />
      <SectionTitle>Más cursos</SectionTitle>
    </>
  );
};

export default index;
