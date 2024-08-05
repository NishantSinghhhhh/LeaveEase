import React from 'react';
import { Card as ChakraCard, CardHeader, CardBody, CardFooter, Heading, FormControl, FormLabel, Input, Button, Stack, InputGroup, InputLeftAddon } from '@chakra-ui/react';
import  DatePicker  from '@fluentui/react-datepicker-compat';
import { Field, makeStyles } from '@fluentui/react-components';
import Navbar from '../components/navbar/navbar';

// Styles for the DatePicker
const useStyles = makeStyles({
  control: {
    maxWidth: '300px',
  },
});

const OutpassForm = () => {
  const styles = useStyles();

  return (
    <>
      <Navbar />
      <ChakraCard maxW='lg' borderWidth='1px' borderRadius='md' p={4} m={4} boxShadow='md'>
        <CardHeader>
          <Heading size='lg'>Outpass Request Form</Heading>
        </CardHeader>
        <CardBody>
          <form>
            <Stack spacing={4}>
              <FormControl isRequired>
                <FormLabel>First Name</FormLabel>
                <Input placeholder='First name' />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Last Name</FormLabel>
                <Input placeholder='Last name' />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Registration Number</FormLabel>
                <Input placeholder='Registration Number' />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Reason for Outpass</FormLabel>
                <Input placeholder='Reason for Outpass' />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Date</FormLabel>
                <Field label="Start date">
                  <DatePicker
                    showWeekNumbers={true}
                    firstWeekOfYear={1}
                    showMonthPickerAsOverlay={true}
                    placeholder="Select a date..."
                    className={styles.control}
                  />
                </Field>
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Time</FormLabel>
                <Input type='time' />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Contact Number</FormLabel>
                <InputGroup>
                  <InputLeftAddon children='+91' />
                  <Input placeholder='Contact Number' />
                </InputGroup>
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Father's Contact Number</FormLabel>
                <InputGroup>
                  <InputLeftAddon children='+91' />
                  <Input placeholder="Father's Contact Number" />
                </InputGroup>
              </FormControl>
            </Stack>
          </form>
        </CardBody>
        <CardFooter>
          <Button colorScheme='teal' type='submit'>
            Submit
          </Button>
        </CardFooter>
      </ChakraCard>
    </>
  );
};

export default OutpassForm;
