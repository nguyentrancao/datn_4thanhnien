import React from "react";
import {
  Box,
  Center,
  CircularProgress,
  CircularProgressLabel,
  Flex,
  Grid,
  GridItem,
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
const Navbar = () => {
  return (
    <>
      <Center>
        <Box w="100%" mt={10}>
          <Box>
            <Center>
              <Flex
                w={"80%"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Flex w={"29%"}>
                  <Box>
                    <Image
                      src="https://shopfront-cdn.tekoapis.com/static/vnpay_banks.png"
                      alt="logo"
                      w="150px"
                    />
                  </Box>
                  <Box></Box>
                </Flex>
                <Box w={"40%"}>
                  <Flex
                    bg="white"
                    borderRadius={"14px"}
                    w="100%"
                    h={20}
                    p="5px"
                    m="auto"
                    textAlign={"center"}
                  >
                    <Input
                      w={"95%"}
                      border={"none"}
                      fontSize={"14px"}
                      borderRadius={"12px"}
                      placeholder="Bạn tìm gì..."
                      h={20}
                    />
                    <Icon as={CiSearch} color="#555" fontSize={"20px"} />
                  </Flex>
                </Box>
                <Box w={"29%"}>
                  <Flex justifyContent={"flex-end"}>
                    <Box ml={10}>
                      <Flex>
                        <Icon
                          as={FaUser}
                          fontSize={"24px"}
                          color={"#555"}
                          margin={2}
                        />
                        <Heading
                          fontWeight={400}
                          m="2"
                          cursor={"pointer"}
                          fontSize={"14px"}
                          color="#555"
                        >
                          Đăng nhập
                        </Heading>
                      </Flex>
                    </Box>

                    <Box ml={10}>
                      <Flex>
                        <Icon
                          as={BsCart2}
                          fontSize={"24px"}
                          color={"#555"}
                          margin={2}
                        />
                        <Heading
                          fontWeight={400}
                          m="2"
                          cursor={"pointer"}
                          fontSize={"14px"}
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
            border="1px"
            borderBottomColor="black"
            borderBottomStyle="solid"
            borderTopColor="black"
            borderTopStyle="solid"
          >
            <Flex
              w="80%"
              h="40px"
              textAlign={"center"}
              justifyContent="center"
              alignItems={"center"}
              borderWidth="10px solid black"
              m="auto"
              bg="#f5f5f5"
            >
              <Heading
                fontWeight={400}
                mr={10}
                cursor={"pointer"}
                fontSize={"14px"}
                color="#555"
              >
                <Icon
                  as={IoIosPhonePortrait}
                  color="#555"
                  fontSize={"20px"}
                  mb={-5}
                />
                Iphone
              </Heading>
              <Heading
                fontWeight={400}
                mr={10}
                cursor={"pointer"}
                fontSize={"14px"}
                color="#555"
              >
                <Icon as={IoIosLaptop} color="#555" fontSize={"20px"} mb={-5} />
                MacBook
              </Heading>
              <Heading
                fontWeight={400}
                mr={10}
                cursor={"pointer"}
                fontSize={"14px"}
                color="#555"
              >
                <Icon
                  as={CgAppleWatch}
                  color="#555"
                  fontSize={"20px"}
                  mb={-5}
                />
                Apple Wacth
              </Heading>
              <Heading
                fontWeight={400}
                m="2"
                cursor={"pointer"}
                fontSize={"14px"}
                color="#555"
              >
                <Icon
                  as={TbDeviceAirpodsCase}
                  color="#555"
                  fontSize={"20px"}
                  mb={-5}
                />
                Airpod
              </Heading>
            </Flex>
          </Box>
        </Box>
      </Center>
    </>
  );
};
export default Navbar;
