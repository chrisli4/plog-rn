import { Dimensions, StyleSheet } from 'react-native';
import theme from '../../config/theme';

const height = Dimensions.get('window').width / 3;

export default StyleSheet.create({
  card: {
    margin: 16,
    borderRadius: 7,
    backgroundColor: theme.colors.primary,
  },
  text: {
    color: theme.colors.white,
  },
  dateText: {
    color: theme.colors.orange,
  },
  task: {
    flex: 1,
    margin: 16,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    elevation: 2,
    borderRadius: 7,
  },
  touchableTop: {
    flex: 1,
    width: '100%',
    borderTopRightRadius: 7,
  },
  touchableBottom: {
    flex: 1,
    width: '100%',
    borderBottomRightRadius: 7,
  },
  stats: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 32,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  activity: {
    flex: 1,
    height: 60,
    paddingHorizontal: 32,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  photo: {
    flex: 1,
    margin: 1,
  },
  image: {
    height,
    width: '100%',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  placeholder: {
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    margin: 1,
    height,
  },
  icon: {
    marginRight: 16,
  },
  left: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '20%',
    borderTopLeftRadius: 7,
    borderBottomLeftRadius: 7,
    backgroundColor: theme.colors.oasis,
  },
  right: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});
