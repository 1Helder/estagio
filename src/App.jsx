import {
  FormControl,
  FormLabel,
  Input,
  Container,
  VStack,
  Heading,
  Text,
  SimpleGrid,
  GridItem,
  Button,
  Textarea,
  Box,
  Stack,
  Icon,
  useMediaQuery,
} from "@chakra-ui/react";

import { PhoneIcon, EmailIcon } from "@chakra-ui/icons";
import { HiMapPin } from "react-icons/hi2";

function App() {
  const [isMobile] = useMediaQuery("(max-width: 480px)");

  return (
    <Container maxW="full" bg="#F7FAFC">
      <Container maxW="container.xl" p={0}>
        <Stack
          direction={["column", "column", "row"]}
          className="mobile2"
          py={10}
          spacing={10}
        >
          <VStack
            w={["full", "full", "50rem"]}
            h="full"
            alignItems="flex-start"
          >
            <VStack
              spacing={8}
              mb={["none", "none", "2rem"]}
              alignItems="flex-start"
              className={isMobile ? "mobile" : ""}
              w={["20.438rem", "20.438rem", "full"]}
            >
              <Heading size="xl"> Let's Connect</Heading>
              <Text size="xl" color="gray.600">
                {isMobile
                  ? "FlexiBlog theme comes with a pre-made contact form component. You can integrate this form with serverless services such as Formspree, Getform, FormKeep and others to receive form submissions via email."
                  : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla augue ex, iaculis non magna sit amet, posuere fermentum magna. Praesent tempus risus mauris, ac pharetra mi sagittis id."}
              </Text>
            </VStack>

            <SimpleGrid
              p="2rem"
              columns={2}
              columnGap={8}
              rowGap={8}
              bg="white"
              w={["20.438rem", "20.438rem", "full"]}
              h={["auto", "auto", "auto"]}
              borderRadius="8px"
              boxShadow="0px 3px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06)"
            >
              <GridItem colSpan={[2, 2, 1]}>
                <FormControl>
                  <FormLabel>Name</FormLabel>
                  <Input required mb={["1rem", "1rem", "0"]} />
                </FormControl>
              </GridItem>
              <GridItem colSpan={[2, 2, 1]}>
                <FormControl>
                  <FormLabel>Company Name</FormLabel>
                  <Input required mb={["1rem", "1rem", "0"]} />
                </FormControl>
              </GridItem>
              <GridItem colSpan={[2, 2, 1]}>
                <FormControl>
                  <FormLabel>Email</FormLabel>
                  <Input required mb={["1rem", "1rem", "0"]} />
                </FormControl>
              </GridItem>
              <GridItem colSpan={[2, 2, 1]}>
                <FormControl>
                  <FormLabel>Phone Number</FormLabel>
                  <Input required mb={["1rem", "1rem", "0"]} />
                </FormControl>
              </GridItem>
              <GridItem colSpan={2}>
                <FormControl>
                  <FormLabel>Subject</FormLabel>
                  <Input required mb={["1rem", "1rem", "0"]} />
                </FormControl>
              </GridItem>
              <GridItem colSpan={2}>
                <FormLabel>Your Message</FormLabel>
                <Textarea required></Textarea>
              </GridItem>
              <GridItem colSpan={2}>
                <FormControl>
                  <Button
                    w={["full", "full", "6.875rem"]}
                    h="3rem"
                    bg="#EC7E83"
                    color="white"
                    _hover={{ bg: "#EC7E83" }}
                  >
                    Submit
                  </Button>
                </FormControl>
              </GridItem>
            </SimpleGrid>
          </VStack>

          {/* Segunda seção */}

          <VStack
            w={["full", "full", "24rem"]}
            h="full"
            paddingRight="2rem"
            spacing={10}
            alignItems="flex-start"
          >
            <Box mt={[0, 0, "5rem "]}>
              <Heading fontSize="lg">Our Commitment</Heading>

              <Box
                w={["20.438rem", "20.438rem", "24rem"]}
                h="10.5rem"
                bg="white"
                color="gray.600"
                boxShadow="0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06)"
                borderRadius="8px"
                mt="0.75rem"
                p="1.75rem"
              >
                Orci varius natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus. Vivamus hendrerit justo eu diam varius
                dictum
              </Box>

              <Heading fontSize="lg" mt="2.813rem">
                Art Directing
              </Heading>

              <Box
                w={["20.438rem", "20.438rem", "24rem"]}
                h="16.6rem"
                bg="white"
                color="gray.600"
                boxShadow="0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06)"
                borderRadius="8px"
                mt="0.75rem"
                p="1.75rem"
              >
                Proin sapien ligula, aliquam eget enim ac, fringilla hendrerit
                nulla.
                <Text mb="1.25rem" mt="1.5rem">
                  <PhoneIcon mr="0.5rem" />
                  +123 (4567) 8910
                </Text>
                <Text mt="1.25rem" mb="1.25rem">
                  <EmailIcon mr="0.5rem" />
                  hello@example.com
                </Text>
                <Text
                  mt="1.25rem"
                  mb="1.25rem"
                  display="flex"
                  alignItems="center"
                >
                  <Icon as={HiMapPin} w={5} h={6} mr="0.5rem" />
                  {isMobile ? (
                    <>
                      120 Street Lorem
                      <br />
                      Ipsum Sit Amet
                    </>
                  ) : (
                    "120 Street Lorem Ipsum Sit Amet"
                  )}
                </Text>
              </Box>
            </Box>
          </VStack>
        </Stack>
      </Container>
    </Container>
  );
}

export default App;
