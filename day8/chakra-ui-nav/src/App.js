
import './App.css';
import { Box, Button, ButtonGroup, Flex, Heading, Spacer, Stack, StackDivider, VStack } from '@chakra-ui/react'
function App() {
  const callStack=()=>{
    return(
      
      <VStack  divider={<StackDivider borderColor='gray.200' />}  spacing={4}  align='stretch'>
        <Box h='40px' bg='yellow.200'>
          1
        </Box>
        <Box h='40px' bg='tomato'>
          2
        </Box>
      </VStack>
      
    );
  }
  return (
    <Flex minWidth='max-content' minHeight='maxContent' alignItems='center' gap='2' justifyContent="space-between">
  <Box p='2'>
    <Heading size='md'>Logo</Heading>
  </Box>
  {/* <Spacer /> */}
  <ButtonGroup gap='2'>
  
  <Button colorScheme='gray' size='sm' variant='link' onClick={()=>callStack()}>Inspiration</Button>
  <Button colorScheme='gray' size='sm' variant='link'>Find Work</Button>
    <Button colorScheme='gray' size='sm' variant='link'>Learn Design</Button>
    <Button colorScheme='gray' size='sm' variant='link'>Hire Designers</Button>
  </ButtonGroup>
  <Spacer/>
  <ButtonGroup gap='2'>
    <Button colorScheme='gray' size='sm' variant='link'>Sign In</Button>
    <Button colorScheme='pink' size='sm' variant='ghost'>Sign Up</Button>
  </ButtonGroup>
</Flex>
  );
}

export default App;
