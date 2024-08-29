import ColorConvert from "color-convert";

export class Color {
  constructor(
    private readonly hue: number,
    private readonly saturation: number = 100
  ) {
    if (hue < 0 || hue > 360) {
      throw new Error("Color hue must be between 0 and 360.");
    }

    if (saturation < 0 || saturation > 100) {
      throw new Error("Color saturation must be between 0 and 100.");
    }

    if (hue === 360) {
      this.hue = 0;
    }
  }

  public rgb(value: number): [number, number, number] {
    if (value < 0 || value > 100) {
      throw new Error("Color value must be between 0 and 100.");
    }

    return ColorConvert.hsv.rgb(this.hue, this.saturation, value);
  }

  public hex(value: number): string {
    if (value < 0 || value > 100) {
      throw new Error("Color value must be between 0 and 100.");
    }

    const hex: string = ColorConvert.hsv.hex(this.hue, this.saturation, value);

    return `#${hex}`;
  }

  // source: http://www.procato.com/rgb+index/

  public static Hues = class Hues {
    public static RED = 0;
    public static SCARLET = 7.5;
    public static VERMILION = 15;
    public static TANGELO = 22.5;
    public static ORANGE = 30;
    public static GAMBOGE = 37.5;
    public static AMBER = 45;
    public static GOLD = 52.5;
    public static YELLOW = 60;
    public static APPLE_GREEN = 67.5;
    public static LIME_GREEN = 75;
    public static SPRING_BUD = 82.5;
    public static CHARTREUSE_GREEN = 90;
    public static PISTACHIO = 97.5;
    public static HARLEQUIN = 105;
    public static SAP_GREEN = 112.5;
    public static GREEN = 120;
    public static EMERALD_GREEN = 127.5;
    public static MALACHITE_GREEN = 135;
    public static SEA_GREEN = 142.5;
    public static SPRING_GREEN = 150;
    public static AQUAMARINE = 157.5;
    public static TURQUOISE = 165;
    public static OPAL = 172.5;
    public static CYAN = 180;
    public static ARCTIC_BLUE = 187.5;
    public static CERULEAN = 195;
    public static CORNFLOWER_BLUE = 202.5;
    public static AZURE = 210;
    public static COBALT_BLUE = 217.5;
    public static SAPPHIRE_BLUE = 225;
    public static PHTHALO_BLUE = 232.5;
    public static BLUE = 240;
    public static PERSIAN_BLUE = 247.5;
    public static INDIGO = 255;
    public static BLUE_VIOLET = 262.5;
    public static VIOLET = 270;
    public static PURPLE = 277.5;
    public static MULBERRY = 285;
    public static HELIOTROPE = 292.5;
    public static MAGENTA = 300;
    public static ORCHID = 307.5;
    public static FUCHSIA = 315;
    public static CERISE = 322.5;
    public static ROSE = 330;
    public static RASPBERRY = 337.5;
    public static CRIMSON = 345;
    public static AMARANTH = 352.5;
  };
}
