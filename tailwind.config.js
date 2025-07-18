/** @type {import('tailwindcss').Config} */
    export default {
      darkMode: ["class"],
      content: [
        './pages/**/*.{js,jsx}',
        './components/**/*.{js,jsx}',
        './app/**/*.{js,jsx}',
        './src/**/*.{js,jsx}',
      ],
      theme: {
        container: {
          center: true,
          padding: "2rem",
          screens: {
            "2xl": "1400px",
          },
        },
        extend: {
          colors: {
            border: "hsl(var(--border))",
            input: "hsl(var(--input))",
            ring: "hsl(var(--ring))",
            background: "hsl(var(--background))",
            foreground: "hsl(var(--foreground))",
            primary: {
              DEFAULT: "hsl(var(--primary))",
              foreground: "hsl(var(--primary-foreground))",
            },
            secondary: {
              DEFAULT: "hsl(var(--secondary))",
              foreground: "hsl(var(--secondary-foreground))",
            },
            destructive: {
              DEFAULT: "hsl(var(--destructive))",
              foreground: "hsl(var(--destructive-foreground))",
            },
            muted: {
              DEFAULT: "hsl(var(--muted))",
              foreground: "hsl(var(--muted-foreground))",
            },
            accent: {
              DEFAULT: "hsl(var(--accent))",
              foreground: "hsl(var(--accent-foreground))",
            },
            popover: {
              DEFAULT: "hsl(var(--popover))",
              foreground: "hsl(var(--popover-foreground))",
            },
            card: {
              DEFAULT: "hsl(var(--card))",
              foreground: "hsl(var(--card-foreground))",
            },
            // KeroLuxe New Professional Palette
            "keroluxe-black": "hsl(var(--keroluxe-black))", // #000000
            "keroluxe-white": "hsl(var(--keroluxe-white))", // #FFFFFF
            "keroluxe-gold": "hsl(var(--keroluxe-gold))",   // #F5BD02
            "keroluxe-off-white": "hsl(var(--keroluxe-off-white))", // #F5F5F5
            "keroluxe-grey": "hsl(var(--keroluxe-grey))",     // #808080
            "keroluxe-dark-gold": "hsl(var(--keroluxe-dark-gold))", // #D4A506 (for smaller text if needed)
          },
          borderRadius: {
            lg: "var(--radius)",
            md: "calc(var(--radius) - 2px)",
            sm: "calc(var(--radius) - 4px)",
          },
          keyframes: {
            "accordion-down": {
              from: { height: "0" },
              to: { height: "var(--radix-accordion-content-height)" },
            },
            "accordion-up": {
              from: { height: "var(--radix-accordion-content-height)" },
              to: { height: "0" },
            },
            "celebrate-wiggle": {
              "0%, 100%": { transform: "rotate(-3deg)" },
              "50%": { transform: "rotate(3deg)" },
            }
          },
          animation: {
            "accordion-down": "accordion-down 0.2s ease-out",
            "accordion-up": "accordion-up 0.2s ease-out",
            "celebrate-wiggle": "celebrate-wiggle 0.5s ease-in-out infinite",
          },
          fontFamily: {
            sans: ['Lato', 'sans-serif'],
            serif: ['Playfair Display', 'serif'],
          },
        },
      },
      plugins: [import("tailwindcss-animate")],
    }