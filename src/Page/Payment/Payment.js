import React from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select,
  Text,
  VStack,
  Center,
  Icon,
  Image,
} from "@chakra-ui/react";
import {
  AiOutlineCreditCard,
  AiOutlineHome,
  AiOutlineMail,
  AiOutlinePhone,
} from "react-icons/ai";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Payment = () => {
  return (
    <Center minH="170vh">
      <Box w="750px" p={6} bg="#006f3c" borderRadius="8px">
        <Heading mb={6}>
          <Text fontSize={30} as="b" color="white">
            Thanh toán
          </Text>
        </Heading>

        <Flex
          justify="space-between"
          bg="#eceff1  "
          borderRadius="8px"
          boxShadow="md"
          p={6}
          mb={6}
        >
          {/* Phần bên trái */}
          <Box w="48%" p={4} bg="#eceff1  " borderRadius="8px">
            <VStack spacing={6} align="stretch">
              <Heading size="md">Thông tin sản phẩm</Heading>
              <FormControl>
                <FormLabel>Tên sản phẩm</FormLabel>
                <Input placeholder="Tên sản phẩm" size="lg" />
              </FormControl>
              <FormControl>
                <FormLabel>Mô tả sản phẩm</FormLabel>
                <Input placeholder="Mô tả sản phẩm" size="lg" />
              </FormControl>
              <FormControl>
                <FormLabel>Giá sản phẩm</FormLabel>
                <Input placeholder="Giá sản phẩm" size="lg" />
              </FormControl>
              <FormControl>
                <FormLabel>Số lượng sản phẩm</FormLabel>
                <Input placeholder="Số lượng sản phẩm" size="lg" />
              </FormControl>
            </VStack>
          </Box>

          {/* Phần bên phải */}
          <Box w="48%" p={4} bg="#eceff1  " borderRadius="8px">
            <VStack spacing={6} align="stretch">
              <Heading size="md">Thông tin khách hàng</Heading>
              <FormControl>
                <FormLabel>
                  <Flex align="center">
                    <Icon as={AiOutlineHome} mr={2} />
                    Họ và tên
                  </Flex>
                </FormLabel>
                <Input placeholder="Họ và tên" size="lg" />
              </FormControl>
              <FormControl>
                <FormLabel>
                  <Flex align="center">
                    <Icon as={AiOutlineMail} mr={2} />
                    Email
                  </Flex>
                </FormLabel>
                <Input placeholder="Email" type="email" size="lg" />
              </FormControl>
              <FormControl>
                <FormLabel>
                  <Flex align="center">
                    <Icon as={AiOutlinePhone} mr={2} />
                    Số điện thoại
                  </Flex>
                </FormLabel>
                <Input placeholder="Số điện thoại" type="tel" size="lg" />
              </FormControl>
              <FormControl>
                <FormLabel>
                  <Flex align="center">
                    <Icon as={AiOutlineHome} mr={2} />
                    Địa chỉ giao hàng
                  </Flex>
                </FormLabel>
                <Input placeholder="Địa chỉ giao hàng" size="lg" />
              </FormControl>
              <FormControl>
                <FormLabel>Thành phố</FormLabel>
                <Input placeholder="Thành phố" size="lg" />
              </FormControl>
              <FormControl>
                <FormLabel>Quốc gia</FormLabel>
                <Input placeholder="Quốc gia" size="lg" />
              </FormControl>
            </VStack>
          </Box>
        </Flex>

        <Flex justify="space-between" mb={6}>
          {/* Thông tin phương thức thanh toán */}
          <Box w="48%" p={4} bg="#eceff1  " borderRadius="8px">
            <VStack spacing={6} align="stretch">
              <Heading size="md">Thông tin phương thức thanh toán</Heading>
              <FormControl>
                <FormLabel>Loại phương thức thanh toán</FormLabel>
                <Select
                  placeholder="Chọn loại phương thức thanh toán"
                  size="lg"
                >
                  <option>Thẻ tín dụng</option>
                  <option>Ví điện tử</option>
                  <option>Trả tiền mặt khi nhận hàng</option>
                </Select>
              </FormControl>
              <FormControl>
                <FormLabel>
                  <Flex align="center">
                    <Icon as={AiOutlineCreditCard} mr={2} />
                    Số thẻ
                  </Flex>
                </FormLabel>
                <Input placeholder="Số thẻ" size="lg" />
              </FormControl>
              <FormControl>
                <FormLabel>
                  <Flex align="center">
                    <Icon as={AiOutlineCreditCard} mr={2} />
                    Thời hạn
                  </Flex>
                </FormLabel>
                <Input placeholder="MM/YY" size="lg" />
              </FormControl>
              <FormControl>
                <FormLabel>
                  <Flex align="center">
                    <Icon as={AiOutlineCreditCard} mr={2} />
                    Mã bảo mật
                  </Flex>
                </FormLabel>
                <Input placeholder="CVC" size="lg" />
              </FormControl>
            </VStack>
          </Box>

          {/* Thông tin vận chuyển */}
          <Box w="48%" p={4} bg="#eceff1  " borderRadius="8px">
            <VStack spacing={6} align="stretch">
              <Heading size="md">Thông tin vận chuyển</Heading>
              <FormControl>
                <FormLabel>Phương thức vận chuyển</FormLabel>
                <Select placeholder="Chọn phương thức vận chuyển" size="lg">
                  <option>Giao hàng nhanh</option>
                  <option>Giao hàng tiết kiệm</option>
                </Select>
              </FormControl>
              <FormControl>
                <FormLabel>Phí vận chuyển</FormLabel>
                <Input placeholder="Phí vận chuyển" size="lg" />
              </FormControl>
              <FormControl>
                <FormLabel>Thời gian dự kiến giao hàng</FormLabel>
                <Input placeholder="Thời gian dự kiến giao hàng" size="lg" />
              </FormControl>
            </VStack>
          </Box>
        </Flex>

        <Box bg="#eceff1  " borderRadius="8px" p={4} mb={6}>
          <Heading size="md">Hình ảnh</Heading>
          <Flex justify="space-between" align="center">
            {/* Box cho Momo */}
            <Flex alignItems="center">
              <Box
                w="100px"
                h="100px"
                bg="#eceff1  "
                borderRadius="8px"
                p={2}
                mr={4}
                display="flex"
                alignItems="center"
              >
                <Image
                  src="https://play-lh.googleusercontent.com/dQbjuW6Jrwzavx7UCwvGzA_sleZe3-Km1KISpMLGVf1Be5N6hN6-tdKxE5RDQvOiGRg"
                  alt="Momo"
                  w="100%"
                  h="100%"
                  borderRadius="8px"
                  objectFit="cover"
                />
              </Box>
            </Flex>

            {/* Box cho Ngân hàng */}
            <Flex alignItems="center">
              <Box w="350px" h="140px" bg="#eceff1  " borderRadius="8px" p={2}>
                <Image
                  src="https://cafefcdn.com/203337114487263232/2022/5/12/bank-1652317058190381543119.jpg"
                  alt="Ngân hàng"
                  w="100%"
                  h="100%"
                  borderRadius="8px"
                  objectFit="cover"
                />
              </Box>
            </Flex>
          </Flex>
        </Box>

        <Flex justify="center" mt={6}>
          <Button
            textAlign="center"
            colorScheme="teal"
            size="lg"
            fontSize="16px" // Chỉnh kích thước font chữ thành 16px
            fontWeight="600"
            w="100%"
            maxW="300px"
            h="60px"
            borderRadius="6px"
            transition="all 0.3s"
            _hover={{
              opacity: 0.8,
              color: "red",
              bg: "white",
              border: "1px solid red",
            }}
          >
            Xác nhận đơn hàng
          </Button>
        </Flex>
      </Box>
    </Center>
  );
};

export default Payment;
