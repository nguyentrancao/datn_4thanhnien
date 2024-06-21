import React from "react";
import { Box, Center, Flex, Heading, Input, Icon ,Image} from "@chakra-ui/react";
import { CiSearch } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { BsCart2 } from "react-icons/bs";
import { IoIosPhonePortrait, IoIosLaptop } from "react-icons/io";
import { CgAppleWatch } from "react-icons/cg";
import { IoIosHeadset } from "react-icons/io";
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
            {/* Use the Image component from Chakra UI */}
            <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNS-96bdVmRxd8tlgDYqa47PNS3nJ9CZvNpw&s" alt="Logo" w={60} h={60}/>
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
                      <Link to="/cart" style={{ textDecoration: "none" }}>
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
                      </Link>
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
                  <Link to="/Phone" style={{ textDecoration: "none" }}>
                    <Heading
                      fontSize="16px"
                      _hover={{ fontSize: "18px", transition: "0.3s" }}
                      fontWeight={600}
                      mr={35}
                      cursor={"pointer"}
                      color="#555"
                    >
                      <Icon
                        as={IoIosPhonePortrait}
                        color="#555"
                        fontSize={"23px"}
                        mb={-5}
                      />
                      iPhone
                    </Heading>
                  </Link>
                  <Link to="/danhmuc/mac" style={{ textDecoration: "none" }}>
                    <Heading
                      fontSize="16px"
                      _hover={{ fontSize: "18px", transition: "0.3s" }}
                      fontWeight={600}
                      mr={35}
                      cursor={"pointer"}
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
                  </Link>
                  <Link
                    to="/danhmuc/applewatch"
                    style={{ textDecoration: "none" }}
                  >
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
                      Apple Watch
                    </Heading>
                  </Link>
                  <Link to="/danhmuc/airpod" style={{ textDecoration: "none" }}>
                    <Heading
                      fontWeight={600}
                      mr="35"
                      cursor={"pointer"}
                      fontSize="16px"
                      _hover={{ fontSize: "18px", transition: "0.3s" }}
                      color="#555"
                    >
                      <Icon
                        as={IoIosHeadset}
                        color="#555"
                        fontSize={"23px"}
                        mb={-5}
                      />
                      AirPod
                    </Heading>
                  </Link>
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
