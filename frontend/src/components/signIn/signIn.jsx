import React, { useState } from 'react';
import {
  Card,
  CardBody,
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Stack,
  Box
} from '@chakra-ui/react';
import styles from './signIn.module.css';
import { Link } from 'react-router-dom';

const SignInCard = () => {
  const [isStudent, setIsStudent] = useState(true);

  const handleStudentClick = () => {
    setIsStudent(true);
  };

  const handleStaffClick = () => {
    setIsStudent(false);
  };

  return (
    <div className={styles.item}>
      <Card
        maxW='md'
        borderWidth='1px'
        borderRadius='md'
        p={4}
        m={4}
        boxShadow='md'
      >
        <CardBody>
          <Stack spacing={4}>
            <Text fontSize='xl' fontWeight='bold'>
              {isStudent ? 'Sign In as Student' : 'Sign In as Staff'}
            </Text>
            <Stack direction='row' spacing={4} mt={4}>
              <Button
                colorScheme='gray'
                flex='1'
                variant={isStudent ? 'solid' : 'outline'}
                color={isStudent ? 'gray.600' : 'gray.400'}
                borderColor={isStudent ? 'gray.600' : 'gray.400'}
                onClick={handleStudentClick}
              >
                Sign In as Student
              </Button>
              <Button
                colorScheme='gray'
                flex='1'
                variant={!isStudent ? 'solid' : 'outline'}
                color={!isStudent ? 'gray.600' : 'gray.400'}
                borderColor={!isStudent ? 'gray.600' : 'gray.400'}
                onClick={handleStaffClick}
              >
                Sign In as Staff
              </Button>
            </Stack>
            {isStudent ? (
              <>
                <FormControl id='email'>
                  <FormLabel>Registration Number</FormLabel>
                  <Input type='text' placeholder='Enter your Registration Number' />
                </FormControl>
                <FormControl id='password'>
                  <FormLabel>Password</FormLabel>
                  <Input type='password' placeholder='Enter your password' />
                </FormControl>
              </>
            ) : (
              <>
                <FormControl id='staff-id'>
                  <FormLabel>Staff ID</FormLabel>
                  <Input type='text' placeholder='Enter your staff ID' />
                </FormControl>
                <FormControl id='password'>
                  <FormLabel>Password</FormLabel>
                  <Input type='password' placeholder='Enter your password' />
                </FormControl>
              </>
            )}
            <Link to="/Register">
            <Button
                colorScheme='gray'
                variant='solid'
                color='gray.600'
                borderColor='gray.600'
                mt={4}
                width='full'
              >
                Register Here
              </Button>
            </Link>
            <Link to="/Home">
              <Button
                colorScheme='gray'
                variant='solid'
                color='gray.600'
                borderColor='gray.600'
                mt={4}
                width='full'
              >
                Submit
              </Button>
            </Link>
          </Stack>
        </CardBody>
      </Card>
    </div>
  );
};

export default SignInCard;
