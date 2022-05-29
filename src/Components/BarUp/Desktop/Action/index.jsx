import React from 'react';
import IsLogged from './logged';
import NotLogged from './notLogged';

const Index = () => {
  //Verificar el estado aqui y devolver logged status
  var isLogged = false;
  if (!isLogged) {
    return <NotLogged />;
  }
  return <IsLogged />;
};

export default Index;
