/* eslint-disable no-unused-vars */
import React from 'react';
import {
  Flex, Box, Link, Image, IconButton,
  Stack, Icon, useDisclosure,
  Drawer, DrawerOverlay, DrawerContent,
  DrawerHeader, DrawerBody, VStack, HStack, Button, Text
} from '@chakra-ui/react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const scrollToSection = (sectionId) => {
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <Flex
      as="header"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="full"
      px={6}
      bg="black"
      color="white"
    >
      {/* Logo Column */}
      <Box flexBasis={{ base: '50%', md: '33.333%' }}>
        <Link href="/" display="inline-block">
          <Image src="logo.png" alt="Sprint Energy" width={{ base: '50%', md: '33.333%' }} />
        </Link>
      </Box>

      {/* Navigation Links Column - Hidden on mobile */}
      <Stack
        direction="row"
        display={{ base: 'none', md: 'flex' }}
        width={{ md: '33.333%' }}
        justifyContent="center"
        alignItems="center"
        _hover={"gold"}
      >
        <Link onClick={() => scrollToSection('#about')} p={2} color="white" textTransform="uppercase" _hover={{ color: "gold", textDecoration: "none" }} >
          About
        </Link>
        <Link onClick={() => scrollToSection('#benefits')} p={2} color="white" textTransform="uppercase" _hover={{ color: "gold", textDecoration: "none" }}>
          Benefits
        </Link>
        <Link onClick={() => scrollToSection('#plans')} p={2} color="white" textTransform="uppercase" _hover={{ color: "gold", textDecoration: "none" }}>
          Plans
        </Link>
        <Link onClick={() => scrollToSection('#testimonials')} p={2} color="white" textTransform="uppercase" _hover={{ color: "gold", textDecoration: "none" }}>
          Testimonials
        </Link>
        <Link onClick={() => scrollToSection('#contact')} p={2} color="white"  textTransform="uppercase" _hover={{ color: "gold", textDecoration: "none" }}>
          Contact
        </Link>
      </Stack>

      {/* Social Links Column - Hidden on mobile */}
      <Stack
        direction="row"
        spacing={4}
        display={{ base: 'none', md: 'flex' }}
        alignItems="center"
        justifyContent="flex-end"
        flexBasis={{ md: '33.333%' }}
      >
        <Link href="https://facebook.com" isExternal><Icon as={FaFacebookF} color={"gold"} w={5} h={5} /></Link>
        <Link href="https://twitter.com" isExternal><Icon as={FaTwitter} w={5} h={5} color={"gold"} /></Link>
        <Link href="https://instagram.com" isExternal><Icon as={FaInstagram} w={5} h={5} color={"gold"} /></Link>
        <Link href="https://linkedin.com" isExternal><Icon as={FaLinkedinIn} w={5} h={5} color={"gold"} /></Link>
      </Stack>

      {/* Mobile Menu Icon */}
      <Box display={{ base: 'block', md: 'none' }} flexBasis="50%" textAlign="right">
        <IconButton
          icon={<HamburgerIcon />}
          variant="outline"
          aria-label="Open Menu"
          onClick={onOpen}
          bgColor={"gold"}
          border={"none"}
          colorScheme='gold'
        />
      </Box>

      {/* Mobile Menu Drawer */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px" bg={"gold"}>
            <IconButton
              icon={<CloseIcon />}
              variant="outline"
              aria-label="Close Menu"
              onClick={onClose}
            />
          </DrawerHeader>
          <DrawerBody color={"white"} bg={"black"}>
            <VStack>
            <Link onClick={() => { scrollToSection('#about'); onClose(); }} textTransform="uppercase" p={2}  _hover={{ color: "gold", textDecoration: "none" }}>About</Link>
            <Link onClick={() => { scrollToSection('#services'); onClose(); }} textTransform="uppercase" p={2}  _hover={{ color: "gold", textDecoration: "none" }}>Services</Link>
            <Link onClick={() => { scrollToSection('#contact'); onClose(); }} textTransform="uppercase" p={2}  _hover={{ color: "gold", textDecoration: "none" }}>Contact</Link>
            {/* Add other links as needed */}
            <HStack><Button color="gold" variant="outline" width={"150px"} > Contact</Button></HStack>
            </VStack>
            {/* Contact Info */}
          <VStack spacing={2} mt={20}>
            <Text fontSize="lg" color="white">Call Us: +233244596131</Text>
            <Text fontSize="lg" color="white">lquartey@sprintenergygh.com</Text>
            <HStack mt={4}>
        <Link href="https://facebook.com" isExternal><Icon as={FaFacebookF} w={5} h={5} color={"gold"} /></Link>
        <Link href="https://twitter.com" isExternal><Icon as={FaTwitter} w={5} h={5} color={"gold"} /></Link>
        <Link href="https://instagram.com" isExternal><Icon as={FaInstagram} w={5} h={5} color={"gold"} /></Link>
        <Link href="https://linkedin.com" isExternal><Icon as={FaLinkedinIn} w={5} h={5} color={"gold"} /></Link>
      </HStack>
          </VStack>
         
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};

export default Header;
