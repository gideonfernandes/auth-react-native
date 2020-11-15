import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import {useAuth} from '../contexts/auth';
import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';

const Routes: React.FC = () => {
  const { signed, loading } = useAuth();

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
    alignItems: 'center',
  },
});

export default Routes;
