import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 4,
    color: '#111111',
  },
  subtitle: {
    fontSize: 14,
    color: '#444444',
    marginBottom: 14,
  },
  scroll: {
    maxHeight: 50,
    marginBottom: 14,
  },
  scrollContent: {
    alignItems: 'center',
    paddingRight: 8,
  },
  category: {
    backgroundColor: '#efefef',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 4,
    marginRight: 8,
    borderWidth: 1,
    borderColor: '#d9d9d9',
  },
  categoryText: {
    fontSize: 12,
    color: '#333333',
  },
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  counter: {
    fontSize: 16,
    color: '#222222',
  },
  button: {
    backgroundColor: '#e6e6e6',
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#cccccc',
  },
  buttonText: {
    color: '#111111',
    fontWeight: '600',
  },
  list: {
    paddingBottom: 32,
  },
  item: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 4,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#dddddd',
  },
  itemSelected: {
    borderColor: '#666666',
    backgroundColor: '#f2f2f2',
  },
  itemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111111',
  },
  itemCategory: {
    fontSize: 12,
    color: '#555555',
  },
  itemDesc: {
    fontSize: 14,
    color: '#444444',
  },
});
