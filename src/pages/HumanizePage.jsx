import React from "react";
import { Box, Textarea, Button, VStack } from "@chakra-ui/react";

function HumanizePage() {
  return (
    <VStack spacing={4}>
      <Box w="100%" p={4}>
        <Textarea placeholder="Paste your text here..." />
      </Box>
      <Button colorScheme="blue">Humanize</Button>
    </VStack>
  );
}

export default HumanizePage;
