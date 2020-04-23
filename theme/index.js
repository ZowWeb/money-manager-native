import {StyleSheet} from 'react-native';
import constants from './constants';

export default StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: constants.PADDING,
  },
  col4: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  highlight: {
    fontWeight: constants.FONT_WEIGHT_LIGHT,
    fontSize: constants.FONT_SIZE_LARGE,
  },
  section: {
    marginTop: constants.MARGIN * 3,
  },
  sectionTitle: {
    fontSize: constants.FONT_SIZE_LARGE,
    fontWeight: constants.FONT_WEIGHT_MEDIUM,
    color: '#000',
    paddingBottom: constants.PADDING,
    marginVertical: constants.MARGIN * 2,
    borderWidth: 0,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  sectionDescription: {
    marginTop: 8,
    marginLeft: 0,
    paddingLeft: 0,
    fontSize: constants.FONT_SIZE_MEDIUM,
    fontWeight: constants.FONT_WEIGHT_LIGHT,
    color: '#000',
  },
});
