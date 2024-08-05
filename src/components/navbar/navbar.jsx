import React from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Box,
  Avatar,
  AvatarGroup,
  IconButton,
  Flex,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { AiOutlineUser } from 'react-icons/ai'; 
import styles from './navbar.module.css'; 

const Navbar = () => {
  return (
    <Box
      as='nav'
      bg='rgba(0, 0, 0, 1)' 
      color='white'
      p={4}
      mb={4}
      border='1px solid rgba(255, 255, 255, 0.2)' 
    >
      <Flex className={styles.items} align='center' justify='space-between'>
      
        {/* <IconButton
          aria-label='Menu'
          icon={<HamburgerIcon />}
          variant='outline'
          color='white'
          borderColor='whiteAlpha.300'
          mr={4} // Space between icon and breadcrumb
        /> */}

        <Flex
          flex='1'
          justify='center'
        >
          <Breadcrumb
            spacing='16px'
            separator={null} 
            fontSize='lg'
            fontWeight='medium'
            color='white'
          >
            <BreadcrumbItem>
              <BreadcrumbLink
                href='#'
                mr={10}
                p={2}
                _hover={{
                  textDecoration: 'none',
                  color: 'gray.500',
                }} 
              >
                Approved
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink
                href='#'
                mr={10}
                p={2}
                _hover={{
                  textDecoration: 'none',
                  color: 'gray.500',
                }}
              >
                Pending
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink
                href='#'
                mr={10}
                p={2}
                _hover={{
                  textDecoration: 'none',
                  color: 'gray.500',
                }} 
                isCurrentPage
              >
                Declined
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink
                href='#'
                mr={10}
                p={2}
                _hover={{
                  textDecoration: 'none',
                  color: 'gray.500',
                }} 
                isCurrentPage
              >
                Expired
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Flex>
        
        <AvatarGroup spacing='1rem'>
          <Avatar bg='gray.500' />
        </AvatarGroup>
      </Flex>
    </Box>
  );
}

export default Navbar;
