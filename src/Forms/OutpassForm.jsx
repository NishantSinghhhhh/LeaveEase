import React, { useState } from 'react';
import { Card as ChakraCard, CardHeader, CardBody, CardFooter, Heading, FormControl, FormLabel, Input, Button, Stack, InputGroup, InputLeftAddon } from '@chakra-ui/react';
import Navbar from '../components/navbar/navbar';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styles from './Form.module.css'; // Import the CSS module

const OutpassForm = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [startHour, setStartHour] = useState('');
  const [endHour, setEndHour] = useState('');

  return (
    <>
      <Navbar />
      <div className={styles.main}>
        <ChakraCard borderWidth='1px' borderRadius='md' p={4} boxShadow='md' w='full'>
          <CardHeader>
            <Heading size='lg'>Outpass Request Form</Heading>
          </CardHeader>
          <CardBody>
            <form>
              <Stack spacing={4}>
                <FormControl isRequired>
                  <FormLabel>First Name</FormLabel>
                  <Input placeholder='First name' className={styles['chakra-input']} />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel>Last Name</FormLabel>
                  <Input placeholder='Last name' className={styles['chakra-input']} />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel>Registration Number</FormLabel>
                  <Input placeholder='Registration Number' className={styles['chakra-input']} />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel>Reason for Outpass</FormLabel>
                  <Input placeholder='Reason for Outpass' className={styles['chakra-input']} />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel>Date</FormLabel>
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    dateFormat='MMMM d, yyyy'
                    className={styles['chakra-input']}
                    wrapperClassName={styles['chakra-datepicker']}
                    popperClassName={styles['chakra-datepicker-popover']}
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel>Outing Hours</FormLabel>
                  <Stack spacing={3}>
                    <FormControl>
                      <FormLabel>Start Hour</FormLabel>
                      <Input
                        type='time'
                        value={startHour}
                        onChange={(e) => setStartHour(e.target.value)}
                        className={styles['chakra-input']}
                      />
                    </FormControl>
                    <FormControl>
                      <FormLabel>End Hour</FormLabel>
                      <Input
                        type='time'
                        value={endHour}
                        onChange={(e) => setEndHour(e.target.value)}
                        className={styles['chakra-input']}
                      />
                    </FormControl>
                  </Stack>
                </FormControl>

                <FormControl isRequired>
                  <FormLabel>Contact Number</FormLabel>
                  <InputGroup>
                    <InputLeftAddon children='+91' />
                    <Input placeholder='Contact Number' className={styles['chakra-input']} />
                  </InputGroup>
                </FormControl>
                
                {/* Uncomment and use if needed
                <FormControl isRequired>
                  <FormLabel>Father's Contact Number</FormLabel>
                  <InputGroup>
                    <InputLeftAddon children='+91' />
                    <Input placeholder="Father's Contact Number" className={styles['chakra-input']} />
                  </InputGroup>
                </FormControl> */}
              </Stack>
            </form>
          </CardBody>
          <CardFooter>
            <Button colorScheme='teal' type='submit'>
              Submit
            </Button>
          </CardFooter>
        </ChakraCard>
      </div>
    </>
  );
};

export default OutpassForm;
