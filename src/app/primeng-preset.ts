import { definePreset } from "@primeuix/themes";
import Aura from "@primeuix/themes/Aura";

export const PrimeNG_Preset = definePreset(Aura, {
  components: {
    menubar: {
      colorScheme: {
        light: {
          root: {
            background: '{surface.0}',
            color: '{surface.700}',
          },
          item: {
            activeBackground: '{surface.300}',
            activeColor: '{surface.900}',
            color: '{surface.700}',
            borderRadius: '5rem',
          },
          baseItem: {
            borderRadius: '5rem',
          },
        },
      },
    },

    tabs: {
      colorScheme: {
        light: {
          tab: {
            borderWidth: '0px',
            focusRing: {
              width: '2px',
              color: '{primary.color}',
              style: 'solid',
            },
          },
          activeBar: {
            height: '3px',
            bottom: '0px',
          },
        },
      },
    },
  },

  semantic: {
    colorScheme: {
      light: {
        surface: {
          0: '#ffffff',
          50: '{zinc.50}',
          100: '{zinc.100}',
          200: '{zinc.200}',
          300: '{zinc.300}',
          400: '{zinc.400}',
          500: '{zinc.500}',
          600: '{zinc.600}',
          700: '{zinc.700}',
          800: '{zinc.800}',
          900: '{zinc.900}',
          950: '{zinc.950}',
        },
        primary: {
          color: '{zinc.950}',
          inverseColor: '#ffffff',
          hoverColor: '{zinc.900}',
          activeColor: '{zinc.800}',
        },
        highlight: {
          background: '{zinc.950}',
          focusBackground: '{zinc.700}',
          color: '#ffffff',
          focusColor: '#ffffff',
        },
        formField: {
          hoverBorderColor: '{primary.color}',
        },
        root: {
          background: '{surface.0}',
          color: '{surface.700}',
        },
        subtitle: {
          color: '{surface.500}',
        },
      },
    },
  },
});
