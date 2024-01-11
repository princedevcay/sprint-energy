import React from 'react';
import { Box, Heading, Text, Button, VStack } from '@chakra-ui/react';

const HeroSection = () => {
  return (
    <Box id="hero" w="full" h="80vh" textAlign="center" position="relative" overflow="hidden">
      {/* Local Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          top: '0',
          left: '0',
          objectFit: 'cover',
          zIndex: -1,
        }}
      >
        <source src="solorpanel.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay to ensure text is readable */}
      <Box
        position="absolute"
        top={0}
        left={0}
        w="full"
        h="full"
        bg="blackAlpha.600"
        zIndex={0}
      />

      {/* Content */}
      <VStack zIndex={1} position="relative" spacing={4} justify="center" h="full">
        <Heading as="h1" size="2xl" color="white" mt="20vh">
          Powering the Future with Solar Energy
        </Heading>
        <Text color="gray.300" my={4}>
          Innovative and Sustainable Solar Solutions for Your Home and Business
        </Text>
        <Button colorScheme="white" variant="outline">
          Learn More
        </Button>
      </VStack>
    </Box>
  );
};

export default HeroSection;
