import React from 'react';
import { Box, Button, Textarea } from '@chakra-ui/react';

const HumanizeForm = () => {
  return (
    <Box maxWidth="800px" mx="auto">
      <Textarea placeholder="Paste your text here..." rows={10} />
      <Button mt={4} colorScheme="blue" type="submit">
        Humanize Text
      </Button>  
    </Box>
  );
};

export default HumanizeForm;