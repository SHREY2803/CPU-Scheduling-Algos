import React from "react";
import { Image, Spacer, Tag } from "@chakra-ui/react";
import HomeImg1 from "../assets/Images/1.svg";
import HomeImg2 from "../assets/Images/2.svg";
import HomeImg3 from "../assets/Images/3.svg";

import Shrey from "../assets/Images/shrey.png";
import { LinkBox, LinkOverlay } from "@chakra-ui/react";
import {
  Button,
  Heading,
  Text,
  VStack,
  HStack,
  Box,
  SimpleGrid,
} from "@chakra-ui/react";

import { FaFacebook, FaInstagram, FaLinkedinIn,FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const HomeInfoLa = () => {
  return (
    <div>
      {/* cpu scheduling info  */}
      <HStack spacing={6}>
        <VStack spacing={8}>
          <Heading
            fontSize="7xl"
            bgGradient={[
              "linear(to-b, orange.100, purple.300)",
              "linear(to-t, blue.200, teal.500)",
              "linear(to-tr, teal.300, pink.400)",
            ]}
            bgClip="text"
          >
            What is CPU Scheduling?
          </Heading>
          <Text mt={4} fontSize="3xl">
            CPU Scheduling is a process of determining which process will own
            CPU for execution while another process is on hold. The main task of
            CPU scheduling is to make sure that whenever the CPU remains idle,
            the OS at least select one of the processes available in the ready
            queue for execution.
          </Text>
        </VStack>
        <Image
          src={HomeImg2}
          alt="Example1 img"
          mt="10px"
          width="40%"
          ml="10%"
        />
      </HStack>

      {/* algorithms options  */}
      <SimpleGrid columns={2} spacingX="20px" spacingY="20px" mt="5%">
        <Box
          p={10}
          width="200px"
          shadow="2xl"
          boxShadow="dark-lg"
          borderWidth="4px"
          borderColor="blue.200"
          borderRadius="3xl"
          w="full"
          textAlign="center"
          bgGradient="linear(to-l, #7928CA, #FF0080)"
        >
          <Heading fontSize="4xl">FCFS</Heading>
          <Text mt={4} fontSize="lg">
            First-Come, First-Served Scheduling
          </Text>
          <Link to="/fcfs">
            <Button
              mt={4}
              border="2px"
              borderColor="blue.200"
              colorScheme="purple"
              variant="solid"
            >
              Open
            </Button>
          </Link>
        </Box>

        <Box
          p={10}
          width="40%"
          shadow="2xl"
          boxShadow="dark-lg"
          borderWidth="4px"
          w="full"
          borderColor="blue.200"
          borderRadius="3xl"
          textAlign="center"
          bgGradient="linear(to-l, #7928CA, #FF0080)"
        >
          <Heading fontSize="4xl">SJF</Heading>
          <Text mt={4} fontSize="lg">
            Shortest-Job-First Scheduling
          </Text>
          <Link to="/sjf">
            <Button
              mt={4}
              border="2px"
              borderColor="blue.200"
              colorScheme="purple"
              variant="solid"
            >
              Open
            </Button>
          </Link>
        </Box>

        <Box
          p={10}
          shadow="2xl"
          boxShadow="dark-lg"
          borderWidth="4px"
          w="full"
          borderColor="blue.200"
          borderRadius="3xl"
          textAlign="center"
          bgGradient="linear(to-l, #7928CA, #FF0080)"
        >
          <Heading fontSize="4xl">RR</Heading>
          <Text mt={4} fontSize="lg">
            Round Robin Scheduling
          </Text>
          <Link to="/rr">
            <Button
              mt={4}
              border="2px"
              borderColor="blue.200"
              colorScheme="purple"
              variant="solid"
            >
              Open
            </Button>
          </Link>
        </Box>

        <Box
          p={10}
          shadow="2xl"
          boxShadow="dark-lg"
          borderWidth="4px"
          w="full"
          borderColor="blue.200"
          borderRadius="3xl"
          textAlign="center"
          bgGradient="linear(to-l, #7928CA, #FF0080)"
        >
          <Heading fontSize="4xl">PS</Heading>
          <Text mt={4} fontSize="lg">
            Priority Scheduling
          </Text>
          <Link to="/ps">
            <Button
              mt={4}
              border="2px"
              borderColor="blue.200"
              colorScheme="purple"
              variant="solid"
            >
              Open
            </Button>
          </Link>
        </Box>
      </SimpleGrid>

      {/* about */}
      <HStack mt="10%" spacing={6}>
        <Image
          src={HomeImg1}
          alt="Example1 img"
          mt="10px"
          width="40%"
          ml="10%"
        />

        <VStack spacing={8}>
          <Heading
            fontSize="7xl"
            bgGradient={[
              "linear(to-b, orange.100, purple.300)",
              "linear(to-t, blue.200, teal.500)",
              "linear(to-tr, teal.300, pink.400)",
            ]}
            bgClip="text"
          >
            About Project
          </Heading>
          <Text mt={4} fontSize="4xl">
            To know more about this website please on the about button :
          </Text>
          <Link to="/about">
            <Button
              mt={4}
              border="2px"
              borderColor="blue.200"
              colorScheme="purple"
              variant="solid"
              size="lg"
              fontSize="4xl"
              padding="6"
            >
              {/* <BsFillInfoSquareFill /> */}
              About
            </Button>
          </Link>
        </VStack>
      </HStack>

      {/* team  */}
      <Box paddingTop="50px" ml="10%" mr="10%">
        <HStack mt="10%" spacing={10}>
          <VStack spacing={8}>
            <Heading
              fontSize="7xl"
              bgGradient={[
                "linear(to-b, orange.100, purple.300)",
                "linear(to-t, blue.200, teal.500)",
                "linear(to-tr, teal.300, pink.400)",
              ]}
              bgClip="text"
            >
              Contact Me
            </Heading>
            <Text mt={4} fontSize="4xl">
              Know more about the Me.
            </Text>
          </VStack>
          <Spacer />
          <Image
            src={HomeImg3}
            alt="Example1 img"
            mt="10px"
            width="40%"
            ml="10%"
          />
        </HStack>

        {/* team members info */}
        
        {/* shrey */}
        <VStack>
          <HStack mt="10%" spacing={6}>
            <Image
              src={Shrey}
              alt="Shrey img"
              mt="10px"
              width="40%"
              borderRadius="10%"
            />
            <Spacer />

            <VStack spacing={8}>
              <Heading
                fontSize="5xl"
                color="#08c"
                bgGradient={[
                  "linear(to-b, orange.100, purple.300)",
                  "linear(to-t, blue.200, teal.500)",
                  "linear(to-tr, teal.300, pink.400)",
                ]}
                bgClip="text"
              >
                Shrey Kulkarni{" "}
              </Heading>

              <Text mt={4} fontSize="4xl" color="cyan">
                Web Developer
                <br />
              </Text>
              <HStack spacing={4}>
                {["C++", "Java", "SQL","HTML", "CSS", "Javascript"].map((size) => (
                  <Tag size="lg" key={size} variant="subtle" colorScheme="blue">
                    {size}
                  </Tag>
                ))}
              </HStack>
              <HStack spacing={4}>
                {["React", "TailWind CSS", "Material UI"].map((size) => (
                  <Tag size="lg" key={size} variant="subtle" colorScheme="blue">
                    {size}
                  </Tag>
                ))}
              </HStack>

              <HStack>
                <LinkBox as="article" maxW="sm" p="5">
                  <LinkOverlay
                    href="https://www.linkedin.com/in/shrey-kulkarni-80b176218?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B0Qr7%2F7MpSIaaA3738pvzYA%3D%3D"
                    isExternal
                  >
                    <Button colorScheme="linkedin" leftIcon={<FaLinkedinIn />}>
                      LinkedIn
                    </Button>
                  </LinkOverlay>
                </LinkBox>
                <LinkBox as="article" maxW="sm" p="5">
                  <LinkOverlay
                    href="https://www.instagram.com/kulkarnishrey/?hl=en"
                    isExternal
                  >
                    <Button colorScheme="pink" leftIcon={<FaInstagram />}>
                      Instagram
                    </Button>
                  </LinkOverlay>
                </LinkBox>
                <LinkBox as="article" maxW="sm" p="5">
                  <LinkOverlay
                    href="https://www.facebook.com/shrey.kulkarni.7"
                    isExternal
                  >
                    <Button colorScheme="facebook" leftIcon={<FaFacebook />}>
                      Facebook
                    </Button>
                  </LinkOverlay>
                </LinkBox>
                <LinkBox as="article" maxW="sm" p="5">
                  <LinkOverlay
                    href="https://github.com/SHREY2803"
                    isExternal
                  >
                    <Button colorScheme="facebook" leftIcon={<FaGithub />}>
                      GitHub
                    </Button>
                  </LinkOverlay>
                </LinkBox>
              </HStack>
            </VStack>
          </HStack>
        </VStack>
      </Box>
    </div>
  );
};

export default HomeInfoLa;
