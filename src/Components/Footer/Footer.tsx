import { Box, Container, Stack, Text, useColorModeValue, Link, IconButton } from '@chakra-ui/react';
import { SiDevDotTo, SiGithub, SiLinkedin } from 'react-icons/si';
  
export default function Footer() {
  return (
    <Box >
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}>
        <Text fontSize={"xl"} color={"#f56565"}>Matt Szczerba, 2022.</Text>
      </Container>
    </Box>
  );
}