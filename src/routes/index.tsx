import React, { useContext } from 'react';
import AuthContext from '../contexts/auth';
import AppRoutes from './auth.routes';
import AuthRoutes from './auth.routes';

const Routes: React.FC = () => {
  const { signed } = useContext(AuthContext);

  return signed ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
