import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    black: '#000000',
    gold: '#9D814E',
    white: '#ffffff', // Added for better contrast on black background
    // Add other colors that contrast well with black
  },
  styles: {
    global: {
      body: {
        bg: 'black',
        color: 'white', // Light text color for dark backgrounds
      },
      // You might want to add styles for headings, links, and other elements here
      a: {
        color: 'gold', // Gold color for links
        _hover: {
          textDecoration: 'underline',
        },
      },
      // Add custom styles for buttons, input fields etc. if necessary
    },
  },
  // Other customizations like fonts and breakpoints...
});

export default theme;
