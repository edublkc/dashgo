import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Th, Thead, Tr, Text, useBreakpointValue } from "@chakra-ui/react";
import Link from "next/link";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../componentes/Header";
import { Pagination } from "../../componentes/Pagination";
import { Sidebar } from "../../componentes/Sidebar";

export default function UserList() {
    const isWiderVersion = useBreakpointValue({
        base: false,
        lg: true
    })

    return (
        <Box>
            <Header />

            <Flex w="100%" my="6" maxW={1480} mx="auto" px="6">
                <Sidebar />

                <Box flex="1" borderRadius={8} bg="gray.800" p="8">
                    <Flex mb="8" justify="space-between" align="center">
                        <Heading size="lg" fontWeight="normal">
                            Usuários
                        </Heading>

                        <Link href="/users/create" passHref>
                            <Button
                                as="a"
                                size="sm"
                                fontSize="sm"
                                colorScheme="pink"
                                leftIcon={<Icon as={RiAddLine} fontSize="20" />}

                            >
                                Criar Novo
                            </Button>
                        </Link>

                    </Flex>

                    <Table colorScheme="whiteAlpha">
                        <Thead>
                            <Tr>
                                <Th px={['4', '4', '6']} color="gray.300" w="8">
                                    <Checkbox colorScheme="pink" />
                                </Th>
                                <Th>
                                    Usuário
                                </Th>

                                {isWiderVersion &&
                                    <Th>
                                        Data de cadastro
                                    </Th>
                                }

                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td px="6">
                                    <Checkbox colorScheme="pink" />
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight="bold">Eduardo Mota</Text>
                                        <Text fontSize="sm" color="gray.300">eduardo@email.com</Text>
                                    </Box>
                                </Td>

                                {isWiderVersion &&
                                    <Td>
                                        04 de abril,2021
                                    </Td>
                                }

                            </Tr>
                        </Tbody>
                    </Table>

                    <Pagination />
                </Box>
            </Flex>
        </Box>
    )
}