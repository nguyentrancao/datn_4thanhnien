import React from "react";
import {
  Box,
  Center,
  Flex,
  Heading,
  Input,
  Icon,
  Image,
  Popover,
  PopoverBody,
} from "@chakra-ui/react";
import { CiSearch } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { BsCart2 } from "react-icons/bs";
import { IoIosPhonePortrait, IoIosLaptop } from "react-icons/io";
import { CgAppleWatch } from "react-icons/cg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Center>
      <Box
        w="100%"
        bgColor="#fff"
        position="fixed"
        top={0}
        left={0}
        right={0}
        zIndex={2000}
        boxShadow="0 2px 5px rgba(0, 0, 0, 0.1)"
      >
        <Flex
          w="80%"
          justifyContent="space-between"
          alignItems="center"
          mx="auto"
          py={2}
        >
          <Box>
            <Link to="/" style={{ textDecoration: "none" }}>
              {/* Insert your logo or image here */}
              <Image src="/path/to/your/logo.png" alt="Logo" />
            </Link>
          </Box>

          <Box w="40%" ml={20}>
            <Flex
              bg="white"
              borderRadius="14px"
              w="100%"
              h={20}
              p="5px"
              alignItems="center"
            >
              <Input
                bg="#f5f5f5"
                w="100%"
                border="none"
                fontSize="16px"
                borderRadius="8px"
                placeholder="Bạn tìm gì..."
              />
              <Icon as={CiSearch} color="#555" fontSize="25px" ml={5} />
            </Flex>
          </Box>

          <Box w="25%">
            <Flex justifyContent="flex-end">
              <Box ml={10}>
                <Flex alignItems="center">
                  <Icon as={FaUser} fontSize="24px" color="#555" />
                  <Link to="/auth" style={{ textDecoration: "none" }}>
                    <Heading
                      fontWeight={400}
                      ml="2"
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
                  <Flex alignItems="center">
                    <Icon as={BsCart2} fontSize="25px" color="#555" />
                    <Heading
                      fontWeight={400}
                      ml="2"
                      cursor="pointer"
                      fontSize="18px"
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

        <Box borderTop="1px solid #ddd">
          <Popover>
            <PopoverBody>
              <Flex
                w="100%"
                h="40px"
                textAlign="center"
                justifyContent="center"
                alignItems="center"
                borderWidth="10px solid black"
                mx="auto"
              >
                <Link to="/Phone" style={{ textDecoration: "none" }}>
                  <Heading
                    fontSize="16px"
                    _hover={{ fontSize: "18px", transition: "0.3s" }}
                    fontWeight={600}
                    mr={6}
                    cursor="pointer"
                    color="#555"
                  >
                    <Icon
                      as={IoIosPhonePortrait}
                      color="#555"
                      fontSize="23px"
                      mb={-2}
                      mr={2}
                    />
                    Iphone
                  </Heading>
                </Link>

                <Link to="/Mac" style={{ textDecoration: "none" }}>
                  <Heading
                    fontSize="16px"
                    _hover={{ fontSize: "18px", transition: "0.3s" }}
                    fontWeight={600}
                    mr={6}
                    cursor="pointer"
                    color="#555"
                  >
                    <Icon
                      as={IoIosLaptop}
                      color="#555"
                      fontSize="23px"
                      mb={-2}
                      mr={2}
                    />
                    MacBook
                  </Heading>
                </Link>

                <Link
                  to="/Danhmuc/AppleWatch"
                  style={{ textDecoration: "none" }}
                >
                  <Heading
                    fontSize="16px"
                    _hover={{ fontSize: "18px", transition: "0.3s" }}
                    fontWeight={600}
                    mr={6}
                    cursor="pointer"
                    color="#555"
                  >
                    <Icon
                      as={CgAppleWatch}
                      color="#555"
                      fontSize="23px"
                      mb={-2}
                      mr={2}
                    />
                    Apple Watch
                  </Heading>
                </Link>

                <Link to="/Danhmuc/Airpod" style={{ textDecoration: "none" }}>
                  <Heading
                    fontSize="16px"
                    _hover={{ fontSize: "18px", transition: "0.3s" }}
                    fontWeight={600}
                    cursor="pointer"
                    color="#555"
                  >
                    <Icon
                      // as={CgAirpod}
                      color="#555"
                      fontSize="23px"
                      mb={-2}
                      mr={2}
                    />
                    Airpod
                  </Heading>
                </Link>
              </Flex>
            </PopoverBody>
          </Popover>
        </Box>
      </Box>
    </Center>
  );
};

export default Navbar;
