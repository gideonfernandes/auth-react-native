import React, { useContext } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import AuthContext from '../contexts/auth';
import AppRoutes from './auth.routes';
import AuthRoutes from './auth.routes';

const Routes: React.FC = () => {
  const { signed, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#555" />
      </View>
    );
  };

  return signed ? <AppRoutes /> : <AuthRoutes />;
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItens: 'center',
  },
});

export default Routes;
