import { StyleSheet } from 'react-native';
import theme from '../../config/theme';

export default StyleSheet.create({
  container: {
    backgroundColor: theme.colors.primary,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    borderTopRightRadius: 7,
    borderTopLeftRadius: 7,
  },
  title: {
    color: theme.colors.white,
  },
});
