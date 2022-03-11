import { Flex, Button, Stack } from '@chakra-ui/react'
import { Input } from "../componentes/Form/Input"
import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"

type SigninFormData = {
  email: string
  password: string
}

const signInFormSchema = yup.object().shape({
  email: yup.string().required('Email obrigatório').email('E-mail inválido'),
  password: yup.string().required('Senha obrigatória')
})

export default function SignIn() {
  const { register, handleSubmit, formState: { errors }, formState } = useForm({
    resolver: yupResolver(signInFormSchema)
  })

  console.log(errors)

  const handleSignin: SubmitHandler<SigninFormData> = function (values) {
    console.log(values)

  }

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
          onSubmit={handleSubmit(handleSignin)}
        >
          <Stack spacing="4">
            <Input
              type="email"
              name="email"
              label='E-mail'
              {...register('email')}
              error={errors.email}
            />

            <Input
              type="password"
              name="password"
              label='Senha'
              {...register('password')}
              error={errors.password}
            />
          </Stack>

          <Button type="submit" size="lg" mt="6" colorScheme="pink" isLoading={formState.isSubmitting}>Entrar</Button>
        </Flex>
      </Flex>

    </div>
  )
}
