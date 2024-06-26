const ColorConvert = require("color-convert");

class Color {
  constructor(hue, saturation = 100) {
    this.hue = hue;
    this.saturation = saturation;
  }

  rgb(value) {
    return ColorConvert.hsv.rgb(this.hue, this.saturation, value);
  }

  hex(value) {
    return ColorConvert.hsv.hex(this.hue, this.saturation, value);
  }

  // source: http://www.procato.com/rgb+index/

  static Hues = class Hues {
    static RED = 0;
    static SCARLET = 7.5;
    static VERMILION = 15;
    static TANGELO = 22.5;
    static ORANGE = 30;
    static GAMBOGE = 37.5;
    static AMBER = 45;
    static GOLD = 52.5;
    static YELLOW = 60;
    static APPLE_GREEN = 67.5;
    static LIME_GREEN = 75;
    static SPRING_BUD = 82.5;
    static CHARTREUSE_GREEN = 90;
    static PISTACHIO = 97.5;
    static HARLEQUIN = 105;
    static SAP_GREEN = 112.5;
    static GREEN = 120;
    static EMERALD_GREEN = 127.5;
    static MALACHITE_GREEN = 135;
    static SEA_GREEN = 142.5;
    static SPRING_GREEN = 150;
    static AQUAMARINE = 157.5;
    static TURQUOISE = 165;
    static OPAL = 172.5;
    static CYAN = 180;
    static ARCTIC_BLUE = 187.5;
    static CERULEAN = 195;
    static CORNFLOWER_BLUE = 202.5;
    static AZURE = 210;
    static COBALT_BLUE = 217.5;
    static SAPPHIRE_BLUE = 225;
    static PHTHALO_BLUE = 232.5;
    static BLUE = 240;
    static PERSIAN_BLUE = 247.5;
    static INDIGO = 255;
    static BLUE_VIOLET = 262.5;
    static VIOLET = 270;
    static PURPLE = 277.5;
    static MULBERRY = 285;
    static HELIOTROPE = 292.5;
    static MAGENTA = 300;
    static ORCHID = 307.5;
    static FUCHSIA = 315;
    static CERISE = 322.5;
    static ROSE = 330;
    static RASPBERRY = 337.5;
    static CRIMSON = 345;
    static AMARANTH = 352.5;
  };
}

module.exports = Color;
