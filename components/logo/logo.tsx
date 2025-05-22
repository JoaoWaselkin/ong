import { Image, StyleSheet, ImageStyle } from 'react-native';

const Logo = () => {
  return (
    <Image
      source={require('../../assets/images/logoNew.png')}
      style={styles.logo}
    />
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 200,
    height: 200,
    marginLeft: 'auto',
    marginRight: 'auto',
  } as ImageStyle,
});

export default Logo;
