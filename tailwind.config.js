module.exports = {
    theme: {
      // 👇 this makes Tailwind merge the configuration w/o overriding it.
      extend: {
        height: theme => ({
          "screen/2": "50vh",
          "screen/3": "calc(100vh / 3)",
          "screen/4": "calc(100vh / 4)",
          "screen/5": "calc(100vh / 5)",
          "screen2xl": "calc(100vh * 2.3)"
        }),
      },
    },
    variants: { display: ["responsive", "hover", "focus"] },
    plugins: [],
  };