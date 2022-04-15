import { Box, Heading, Text } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';
import { SwitchThemeButton } from 'components/Util/SwitchTheme';

export default function Success() {
  return (
    <> 
    <SwitchThemeButton/>
    <Box textAlign="center" py={10} px={6}>
      <CheckCircleIcon boxSize={'50px'} color={'green.500'} />
      <Heading as="h2" size="xl" mt={6} mb={2}>
         Your test has been submitted
      </Heading>
    </Box>
    </> 
  );
}