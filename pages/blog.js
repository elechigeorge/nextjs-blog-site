import React, { Component } from 'react';
import Head from 'next/head';
import {
    Heading,
    Flex,
    Stack,
    Input,
    InputGroup,
    InputRightElement
} from '@chakra-ui/react';


export default function Blog({ posts }) {
    return (
        <>
            <Head>
                <title>Article - Elechi George</title>
            </Head>
            <Container>
                <Stack
                    as="main"
                    spacing={8}
                    justifyContent="center"
                    alignItems="flex-start"
                    m="0 auto 4rem auto"
                    maxWidth="700px"
                >
                    <Flex
                        flexDirection="column"
                        justifyContent="flex-start"
                        alignItems="flex-start"
                        maxWidth="700px"
                        px={4}
                    >

                        <Heading letterSpacing="tight" mb={2} as="h1" size="2xl">
                            Article
                        </Heading>

                    </Flex>
                </Stack>

            </Container>

        </>
    )
}


export async function getStaticProps() {
    return {
        props: { posts }
    }
}



