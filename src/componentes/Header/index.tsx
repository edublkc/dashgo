import { Flex } from "@chakra-ui/react"
import { Logo } from "./Logo"
import { NotificationNav } from "./NotificationNav"
import { Profile } from "./Profile"
import { SearchBox } from "./Searchbox"

export function Header() {
    return (
        <Flex
            as="header"
            w="100%"
            maxWidth={1400}
            h="20"
            marginX="auto"
            mt="4"
            align="center"
            px="6"
        >
            <Logo />
            <SearchBox />

            <Flex
                align="center"
                ml="auto"
            >

                <NotificationNav />
                <Profile />

            </Flex>
        </Flex>
    )
}