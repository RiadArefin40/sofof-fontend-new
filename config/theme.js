// Colors
import colors from 'vuetify/lib/util/colors';

const palette = {
  fresh: {
    primary: colors.lightBlue.base, // primary main
    primarylight: colors.lightBlue.lighten4, // primary light
    primarydark: colors.lightBlue.darken4, // primary dark
    secondary: colors.green.base, // secondary main
    secondarylight: colors.green.lighten4, // secondary light
    secondarydark: colors.green.darken4, // secondary dark
    accent: colors.pink.base, // accent main
    accentlight: colors.pink.lighten4, // accent light
    accentdark: colors.pink.darken3, // accent dark
    anchor: colors.blue.base // link
  },
};

const theme = {
  ...palette.fresh,
};

export default theme;
