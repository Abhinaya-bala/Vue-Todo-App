

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  },
  theme: {},
  variants: {
    opacity: ["responsive", "hover", "focus", "disabled"]
  },
  purge: {
    enabled: process.env.VUE_APP_MODE === "production",
    content: ["./public/**/*.html", "./src/**/*.vue"],
    options: {
      whitelistPatterns: [
        /-(leave|enter|appear)(|-(to|from|active))$/,
        /^(?!(|.*?:)cursor-move).+-move$/,
        /^router-link(|-exact)-active$/,
        /verte/,
        /slider/
      ]
    }
  }
};
