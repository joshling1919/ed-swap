import spacing from 'material-ui/styles/spacing';
import { fullWhite } from 'material-ui/styles/colors';
import { fade } from 'material-ui/utils/colorManipulator';

export default {
  spacing: spacing,
  fontFamily: 'Roboto, sans-serif',
  borderRadius: 2,
  palette: {
    primary1Color: "#FF9800",
    primary2Color: "#FF9800",
    primary3Color: "#FF9800",
    accent1Color: "#00BCD4",
    accent2Color: "#00BCD4",
    accent3Color: "#00BCD4",
    textColor: "#FFFFFF",
    secondaryTextColor: "#757575",
    alternateTextColor: '#212121',
    canvasColor: "#FFFFFF",
    borderColor: "#BDBDBD",
    disabledColor: fade(fullWhite, 0.3),
    pickerHeaderColor: fade(fullWhite, 0.12),
    clockCircleColor: fade(fullWhite, 0.12),
  },
};
