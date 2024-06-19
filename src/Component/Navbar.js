import React from "react";
import {
  Box,
  Center,
  Flex,
  Heading,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { CiSearch } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { BsCart2 } from "react-icons/bs";
import { IoIosPhonePortrait, IoIosLaptop } from "react-icons/io";
import { CgAppleWatch } from "react-icons/cg";
import { TbDeviceAirpodsCase } from "react-icons/tb";
import { Link } from "react-router-dom";
import { PopoverBody, Popover } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <>
      <Center>
        <Box
          w="100%"
          bgColor={"#fff"}
          position="fixed"
          top={0}
          left={0}
          right={0}
          zIndex={2000}
        >
          <Box>
            <Center>
              <Flex
                w={"80%"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Box>
                  <Flex w={"40%"}>
                    <Box>
                      <Link to="/" style={{ textDecoration: "none" }}>
                        <Image
                          src="data:image/png;base64,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"
                          alt="logo"
                          w="55px"
                          h="55px"
                        />
                      </Link>
                    </Box>
                  </Flex>
                </Box>

                <Box w={"40%"}>
                  <Flex
                    bg="white"
                    borderRadius={"14px"}
                    w="100%"
                    h={20}
                    p="5px"
                    m="auto"
                    textAlign={"center"}
                    ml={20}
                  >
                    <Input
                      bg={"#f5f5f5"}
                      ml={20}
                      w={"100%"}
                      border={"none"}
                      fontSize={"16px"}
                      borderRadius={"8px"}
                      placeholder="Bạn tìm gì..."
                      h={25}
                      mt={-5}
                    />
                    <Icon
                      as={CiSearch}
                      color="#555"
                      fontSize={"25px"}
                      ml={5}
                      mt={-4}
                    />
                  </Flex>
                </Box>
                <Box w={"25%"}>
                  <Flex justifyContent={"flex-end"}>
                    <Box ml={10}>
                      <Flex>
                        <Icon
                          as={FaUser}
                          fontSize={"24px"}
                          color={"#555"}
                          margin={2}
                        />
                        <Link to="/auth" style={{ textDecoration: "none" }}>
                          <Heading
                            fontWeight={400}
                            m="2"
                            cursor="pointer"
                            fontSize="18px"
                            color="#555"
                          >
                            Đăng nhập
                          </Heading>
                        </Link>
                      </Flex>
                    </Box>

                    <Box ml={10}>
                      <Flex>
                        <Icon
                          as={BsCart2}
                          fontSize={"25px"}
                          color={"#555"}
                          margin={2}
                        />
                        <Heading
                          fontWeight={400}
                          m="2"
                          cursor={"pointer"}
                          fontSize={"18px"}
                          color="#555"
                        >
                          Giỏ hàng
                        </Heading>
                      </Flex>
                    </Box>
                  </Flex>
                </Box>
              </Flex>
            </Center>
          </Box>

          <Box
            border="0.5px"
            borderBottomColor="black"
            borderBottomStyle="solid"
            borderTopColor="black"
            borderTopStyle="solid"
            mb={10}
          >
            <Popover>
              <PopoverBody>
                <Flex
                  w="100%"
                  h="40px"
                  textAlign={"center"}
                  justifyContent="center"
                  alignItems={"center"}
                  borderWidth="10px solid black"
                  m="auto"
                >
                  <Heading
                    fontSize="16px"
                    _hover={{ fontSize: "18px", transition: "0.3s" }}
                    fontWeight={600}
                    mr={35}
                    cursor={"pointer"}
                    // fontSize={"16px"}
                    color="#555"
                  >
                    <Icon
                      as={IoIosPhonePortrait}
                      color="#555"
                      fontSize={"23px"}
                      mb={-5}
                    />
                    Iphone
                  </Heading>
                  <Heading
                    fontSize="16px"
                    _hover={{ fontSize: "18px", transition: "0.3s" }}
                    fontWeight={600}
                    mr={35}
                    cursor={"pointer"}
                    // fontSize={"16px"}
                    color="#555"
                  >
                    <Icon
                      as={IoIosLaptop}
                      color="#555"
                      fontSize={"23px"}
                      mb={-5}
                    />
                    MacBook
                  </Heading>
                  <Heading
                    fontWeight={600}
                    mr={35}
                    cursor={"pointer"}
                    fontSize="16px"
                    _hover={{ fontSize: "18px", transition: "0.3s" }}
                    color="#555"
                  >
                    <Icon
                      as={CgAppleWatch}
                      color="#555"
                      fontSize={"23px"}
                      mb={-5}
                    />
                    Apple Wacth
                  </Heading>
                  <Heading
                    fontWeight={600}
                    mr="35"
                    cursor={"pointer"}
                    fontSize="16px"
                    _hover={{ fontSize: "18px", transition: "0.3s" }}
                    color="#555"
                  >
                    <Icon
                      as={TbDeviceAirpodsCase}
                      color="#555"
                      fontSize={"23px"}
                      mb={-5}
                    />
                    Airpod
                  </Heading>
                </Flex>
              </PopoverBody>
            </Popover>
          </Box>
        </Box>
      </Center>
    </>
  );
};
export default Navbar;
