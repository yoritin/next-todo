import { FC } from 'react'
import Layout from '@/components/Layout'
import {
  Container,
  Center,
  Flex,
  Input,
  Box,
  Button,
  Text,
  Checkbox,
} from '@chakra-ui/react'

const todoList = [
  {
    isDone: false,
    task: '牛乳を買う',
  },
  {
    isDone: false,
    task: '乳牛を買う',
  },
  {
    isDone: false,
    task: '牛牛を買う',
  },
]

const Home: FC = () => {
  return (
    <Layout>
      <Container maxW="container.md">
        <Center h="100px">
          <Text fontSize="5xl">Todo List</Text>
        </Center>
        <Flex>
          <Input placeholder="Todo" mr={2} />
          <Button colorScheme="teal">Add</Button>
        </Flex>
        <Box pt="4">
          {todoList.map((todo, i) => {
            return (
              <Box key={i}>
                <Checkbox defaultIsChecked>{todo.task}</Checkbox>
              </Box>
            )
          })}
        </Box>
      </Container>
    </Layout>
  )
}

export default Home
