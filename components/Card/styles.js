import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  card: {
    margin: 16,
  },
  task: {
    flex: 1,
    margin: 16,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    elevation: 2,
    borderRadius: 3,
  },
  stats: { flex: 1, paddingHorizontal: 32, paddingVertical: 8, width: '100%', flexDirection: 'row', justifyContent: 'space-between' },
});
