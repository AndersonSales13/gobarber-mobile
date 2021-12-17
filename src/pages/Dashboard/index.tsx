import React from 'react';
import { View, Button } from 'react-native';

// import { Container } from './styles';
import { useAuth } from '../../hooks/AuthContext';

const Dashboard: React.FC = () => {
  const { signOut } = useAuth();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Sair" onPress={signOut} />
    </View>
  );
};

export default Dashboard;
