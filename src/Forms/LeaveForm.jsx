import React, { useState } from 'react';
import { Card as ChakraCard, CardHeader, CardBody, CardFooter, Heading, FormControl, FormLabel, Input, Button, Stack, InputGroup, InputLeftAddon } from '@chakra-ui/react';
import Navbar from '../components/navbar/navbar';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styles from './Form.module.css'; // Import the CSS module

const LeaveForm = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [placeOfResidence, setPlaceOfResidence] = useState('');
  const [attendancePercentage, setAttendancePercentage] = useState('');

  return (
    <>
      <Navbar />
      <div className={styles.main}>
        <ChakraCard borderWidth='1px' borderRadius='md' p={4} boxShadow='md' w='full'>
          <CardHeader>
            <Heading size='lg'>Leave Request Form</Heading>
          </CardHeader>
          <CardBody>
            <form>
              <Stack spacing={4}>
                <FormControl isRequired>
                  <FormLabel>First Name</FormLabel>
                  <Input
                    placeholder='First name'
                    className={styles['chakra-input']}
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel>Last Name</FormLabel>
                  <Input
                    placeholder='Last name'
                    className={styles['chakra-input']}
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel>Registration Number</FormLabel>
                  <Input
                    placeholder='Registration Number'
                    className={styles['chakra-input']}
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel>Reason for Leave</FormLabel>
                  <Input
                    placeholder='Reason for Leave'
                    className={styles['chakra-input']}
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel>Start Date</FormLabel>
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
                  <FormLabel>End Date</FormLabel>
                  <DatePicker
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                    dateFormat='MMMM d, yyyy'
                    className={styles['chakra-input']}
                    wrapperClassName={styles['chakra-datepicker']}
                    popperClassName={styles['chakra-datepicker-popover']}
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel>Place of Residence</FormLabel>
                  <Input
                    placeholder='Place of Residence'
                    value={placeOfResidence}
                    onChange={(e) => setPlaceOfResidence(e.target.value)}
                    className={styles['chakra-input']}
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel>Attendance Percentage</FormLabel>
                  <Input
                    type='number'
                    placeholder='Attendance Percentage'
                    value={attendancePercentage}
                    onChange={(e) => setAttendancePercentage(e.target.value)}
                    className={styles['chakra-input']}
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel>Contact Number</FormLabel>
                  <InputGroup>
                    <InputLeftAddon children='+91' />
                    <Input
                      placeholder='Contact Number'
                      className={styles['chakra-input']}
                    />
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

export default LeaveForm;
