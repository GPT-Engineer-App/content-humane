import React from "react";
import { Box, Heading, Text, Stack, Container, Button, SimpleGrid, Image, Flex, StackDivider, Icon, useColorModeValue, List, ListItem } from "@chakra-ui/react";
import { FaCheck } from "react-icons/fa";

const features = [
  {
    id: 1,
    title: "Bypass Plagiarism Detection",
    text: "Our advanced algorithms allow you to bypass leading plagiarism detection tools like Turnitin, GPTZero and more.",
  },
  {
    id: 2,
    title: "Humanize Your Content",
    text: "Enhance the readability and originality of your research papers while maintaining a formal tone.",
  },
  {
    id: 3,
    title: "No Word Count Limits",
    text: "Humanize text content of any length without any word count restrictions.",
  },
];

const Index = () => {
  return (
    <Box py={12}>
      <Container maxW={"7xl"}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Stack spacing={4}>
            <Heading>AI Content Humanizer</Heading>
            <Text color={"gray.500"} fontSize={"lg"}>
              Revolutionize your research paper content creation with our innovative AI app. Bypass plagiarism detection, humanize your text, and maintain a formal tone - all with no word count limits.
            </Text>
            <Stack spacing={4} divider={<StackDivider borderColor={useColorModeValue("gray.100", "gray.700")} />}>
              <List spacing={2}>
                {features.map((feature) => (
                  <ListItem key={feature.id}>
                    <Flex alignItems="center">
                      <Icon as={FaCheck} color="green.500" mr={2} />
                      <Heading size="xs">{feature.title}</Heading>
                    </Flex>
                    <Text pl={6}>{feature.text}</Text>
                  </ListItem>
                ))}
              </List>
            </Stack>
            <Button
              fontFamily={"heading"}
              mt={8}
              w={"full"}
              bgGradient="linear(to-r, red.400,pink.400)"
              color={"white"}
              _hover={{
                bgGradient: "linear(to-r, red.400,pink.400)",
                boxShadow: "xl",
              }}
            >
              Get Started
            </Button>
          </Stack>
          <Flex>
            <Image rounded={"md"} alt={"feature image"} src={"https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxBSSUyMHJvYm90JTIwd3JpdGluZyUyMG9uJTIwcGFwZXJ8ZW58MHx8fHwxNzExNTI5MjA4fDA&ixlib=rb-4.0.3&q=80&w=1080"} objectFit={"cover"} />
          </Flex>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Index;
