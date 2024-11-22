import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from 'expo-router/drawer';
import { MaterialCommunityIcons } from '@expo/vector-icons'; // Importando os ícones
import { StyleSheet } from "react-native"; // Certificando-se de que o StyleSheet esteja importado

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={styles.gestureContainer}> 
      <Drawer
        screenOptions={({ route }) => ({
          drawerStyle: styles.drawerStyle,
          drawerContentStyle: styles.drawerContentStyle,
          drawerActiveTintColor: '#fff',
          drawerInactiveTintColor: '#aaa',
          drawerActiveBackgroundColor: '#264653',
          headerStyle: styles.headerStyle,
          headerTintColor: '#264653',
          drawerIcon: ({ focused, size }) => {
            let iconName;
            switch (route.name) {
              case 'index':
                iconName = 'currency-usd';
                break;
              case 'eur':
                iconName = 'currency-eur';
                break;
              case 'iene':
                iconName = 'currency-jpy';
                break;
              case 'btc':
                iconName = 'bitcoin';
                break;
              case 'cad':
                iconName = 'currency-usd'; // Usando 'currency-cny' como uma alternativa
                break;
              default:
                iconName = 'currency-usd';
            }
            return (
              <MaterialCommunityIcons
                name={iconName}
                size={size}
                color={focused ? '#2a9d8f' : '#aaa'}
              />
            );
          }
        })} >
        <Drawer.Screen 
          name="index"
          options={{ title: 'Dólar Americano' }} 
        />
        <Drawer.Screen 
          name="eur"
          options={{ title: 'Euro' }} 
        />
        <Drawer.Screen 
          name="iene"
          options={{ title: 'Iene Japonês' }} 
        />
        <Drawer.Screen 
          name="btc"
          options={{ title: 'Bitcoin' }} 
        />
        <Drawer.Screen 
          name="cad"
          options={{ title: 'Dólar Canadense' }} 
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  gestureContainer: {
    flex: 1,
  },
  drawerStyle: {
    backgroundColor: '#0b1c2d', // Fundo do Drawer
    width: 240, // Largura do Drawer
  },
  drawerContentStyle: {
    backgroundColor: '#0b1c2d', // Fundo dos itens no Drawer
  },
  headerStyle: {
    backgroundColor: '#c0e864', // Cor do Header
  },
});
