import React, { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Text,
  Card,
  CardBody,
  useToast
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [signupInfo, setSignupInfo] = useState({
    name: '',
    email: '',
    password: ''
  });

  const toast = useToast(); // Initialize useToast
  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignupInfo(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    const { name, email, password } = signupInfo;

    // Check for empty fields
    if (!name || !email || !password) {
      return handleError('Name, email, and password are required.');
    }

    try {
      const url = `http://localhost:8000/auth/signUp`;
      const response = await fetch(url, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(signupInfo) // Convert object to JSON string
      });

      // Check if response is OK (status code in the range 200-299)
      if (!response.ok) {
        const errorData = await response.json();
        const errorMessage = errorData.message || 'An error occurred';
        return handleError(errorMessage);
      }

      // Parse the JSON response
      const result = await response.json();
      const { success, message, error } = result;

      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          // navigate('/login'); // Navigate to login page on successful signup
        }, 1000);
      } else if (error) {
        const details = error?.details[0]?.message || 'An error occurred';
        handleError(details);
      } else {
        handleError(message || 'An unexpected error occurred.');
      }
    } catch (err) {
      handleError('An unexpected error occurred.');
    }
  };

  const handleError = (message) => {
    toast({
      title: 'Error',
      description: message,
      status: 'error',
      duration: 5000,
      isClosable: true
    });
  };

  const handleSuccess = (message) => {
    toast({
      title: 'Success',
      description: message,
      status: 'success',
      duration: 5000,
      isClosable: true
    });
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
      <Card maxW="lg" borderWidth="1px" borderRadius="md" p={6} boxShadow="md">
        <CardBody>
          <Stack spacing={5}>
            <Text fontSize="2xl" fontWeight="bold" textAlign="center">
              Register
            </Text>
            <form onSubmit={handleSignup}>
              <FormControl id="name">
                <FormLabel>Name</FormLabel>
                <Input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={signupInfo.name}
                  onChange={handleChange}
                  size="lg"
                />
              </FormControl>
              <FormControl id="email" mt={4}>
                <FormLabel>Email</FormLabel>
                <Input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={signupInfo.email}
                  onChange={handleChange}
                  size="lg"
                />
              </FormControl>
              <FormControl id="password" mt={4}>
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  value={signupInfo.password}
                  onChange={handleChange}
                  size="lg"
                />
              </FormControl>
              <Button
                type="submit"
                backgroundColor="gray.400"
                color="white"
                size="lg"
                width="full"
                mt={6}
              >
                Register
              </Button>
            </form>
          </Stack>
        </CardBody>
      </Card>
    </Box>
  );
};

export default Register;
