import NextImage from 'next/image'
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

const Sidebar = () => {
    return (
        <Box width="100%" height="calc(100vh - 100px)" bg="black" paddingX="5px" color="gray">
            <Box paddingY="25px">
                <Box width="170px" marginBottom="20px" paddingX="20px">
                    <NextImage src="/logo.png" height={72} width={240}/>
                </Box>
            </Box>
        </Box>
    )
}

export default Sidebar;