import { Flex, Button, Stack } from '@chakra-ui/react'
import { Input } from "../componentes/Form/Input"

export default function SignIn() {
  return (
    <div className="">
      <Flex
        w='100vw'
        h="100vh"
        align="center"
        justify="center"
      >

        <Flex
          as="form"
          width="100%"
          maxWidth="360px"
          bg="gray.800"
          p="8"
          borderRadius="8"
          flexDir="column"
        >
          <Stack spacing="4">
            <Input type="email" name="email" label='E-mail' />
            <Input type="password" name="password" label='Senha' />
          </Stack>

          <Button type="submit" size="lg" mt="6" colorScheme="pink">Entrar</Button>
        </Flex>
      </Flex>

    </div>
  )
}
