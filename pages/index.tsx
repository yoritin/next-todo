import { FC } from 'react'
import Layout from '@/components/Layout'
import { Container, Center, Flex, Input, Box, Text } from '@chakra-ui/react'

const Home: FC = () => {
  return (
    <Layout>
      <Container maxW="container.md">
        <Center h="100px">
          <Text fontSize="5xl">Todo List</Text>
        </Center>
        <Flex>
          <Input placeholder="Todo" mr={2} />
          <Box as="button" borderRadius="md" bg="teal.400" color="white" px={4}>
            Add
          </Box>
        </Flex>
      </Container>
    </Layout>
  )
}

export default Home
