import Head from 'next/head'
import styles from '../styles/theme.js';
import Container from '../components/Container';
import {
  Text,
  Flex,
  useColorMode,
  Heading,
  Stack
} from '@chakra-ui/react'

export default function Home() {
  const { colorMode } = useColorMode();
  const colorSecondary = {
    light: "gray.700",
    dark: "gray.400"
  }

  return (
    <Container>
      <Head>
        <title>Home - Elechi George</title>
      </Head>
      <Stack
        as="main"
        spacing={8}
        justifyContent="center"
        alignItems="flex-start"
        m="0 auto 4rem auto"
        maxWidth="700px"
        px={2}
      >
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="700px"
        >
          <Heading mb={2}>Hello there, I'm George</Heading>
          <Text color={colorSecondary[colorMode]}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</Text>
        </Flex>
      </Stack>
    </Container>
  )
}
