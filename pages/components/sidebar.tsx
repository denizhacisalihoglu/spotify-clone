import NextImage from 'next/image'
import NextLink from 'next/link'
import {
    Box,
    List,
    ListItem,
    ListIcon,
    Divider,
    Center,
    LinkBox,
    LinkOverlay
} from '@chakra-ui/layout'

import {
    MdHome,
    MdSearch,
    MdLibraryMusic,
    MdPlaylistAdd,
    MdFavorite
} from 'react-icons/md'

const navMenu = [
    {
        name: 'Home',
        icon: '/assets/icons/home-active.svg',
        route: '/',
    },
    {
        name: 'Search',
        icon: '/assets/icons/search.svg',
        route: '/search',
    },
    {
        name: 'Your Library',
        icon: '/assets/icons/library.svg',
        route: '/library',
    }
]

const musicMenu = [
    {
        name: 'Create Playlist',
        icon: '/assets/icons/create-playlist.svg',
        route: '/',
        background: '#fff'
    },
    {
        name: 'Favorites',
        icon: '/assets/icons/favorites.svg',
        route: '/favorites',
        background: 'linear-gradient(135deg,#450af5,#c4efd9)'
    },
]

const Sidebar = () => {
    return (
        <Box width="100%" height="calc(100vh - 100px)" bg="black" paddingX="5px" color="gray">
            <Box paddingY="25px">
                <Box width="170px" marginBottom="20px" paddingX="20px">
                    <NextImage src="/logo.png" height={72} width={240} alt="Logo"/>
                </Box>
                <Box marginBottom="20px">
                    <List spacing={2}>
                        {navMenu.map(menu=> (
                            <ListItem paddingX="20px" fontSize="16px" key={menu.name}>
                                <LinkBox>
                                    <NextLink href={menu.route} passHref>
                                        <LinkOverlay display="flex" alignItems="start">
                                            <Box paddingRight="10px">
                                                <NextImage src={menu.icon} height={24} width={24} alt={menu.name} />
                                            </Box>
                                            <Box>{menu.name}</Box>
                                        </LinkOverlay>
                                    </NextLink>
                                </LinkBox>
                            </ListItem>
                        ))}
                    </List>
                </Box>
                <Box paddingTop={3} marginBottom="20px">
                    <List spacing={2}>
                        {musicMenu.map(menu => (
                            <ListItem paddingX="20px" paddingY="4px" fontSize="0.875rem" fontWeight={700} key={menu.name}>
                                <LinkBox>
                                    <NextLink href={menu.route} passHref>
                                        <LinkOverlay display="flex" alignItems="center">
                                            <Box marginRight="10px" borderRadius={3} background={menu.background} paddingX={1.5} paddingY={0.5}>
                                                <NextImage src={menu.icon} height={12} width={12} alt={menu.name} />
                                            </Box>
                                            <Box>{menu.name}</Box>
                                        </LinkOverlay>
                                    </NextLink>
                                </LinkBox>
                            </ListItem>
                        ))}
                    </List>
                </Box>
                <Divider color="gray.800"/>
            </Box>
        </Box>
    )
}

export default Sidebar;