import { Flex, Icon, IconButton, useBreakpointValue } from "@chakra-ui/react"
import { RiMenuLine } from "react-icons/ri"
import { useSidebarDrawer } from "../../context/SidebarDrawerContext"
import { Logo } from "./Logo"
import { NotificationNav } from "./NotificationNav"
import { Profile } from "./Profile"
import { SearchBox } from "./Searchbox"

export function Header() {
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    })

    const { onOpen } = useSidebarDrawer()

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

            {!isWideVersion &&
                <IconButton
                    aria-label="Open navigation"
                    icon={<Icon as={RiMenuLine} />}
                    fontSize="24"
                    variant="unstyled"
                    onClick={onOpen}
                    mr="2"
                >

                </IconButton>


            }
            <Logo />

            {isWideVersion &&
                <SearchBox />
            }


            <Flex
                align="center"
                ml="auto"
            >

                <NotificationNav />
                <Profile showProfileData={isWideVersion} />

            </Flex>
        </Flex>
    )
}