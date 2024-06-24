import React, { useState } from "react";
import {
  Box,
  Flex,
  Button,
  Heading,
  Text,
  Image,
  Center,
} from "@chakra-ui/react";
// import { AiOutlinePlus} from "react-icons/ai";
import { DeleteIcon } from "@chakra-ui/icons";

const Cart = () => {

  // const [cartItems] = useState([
  //   {
  //     id: 1,
  //     name: "Product A",
  //     price: 19.99,
  //     quantity: 1,
  //     image: "https://via.placeholder.com/150",
  //   },
  //   {
  //     id: 2,
  //     name: "Product B",
  //     price: 24.99,
  //     quantity: 2,
  //     image: "https://via.placeholder.com/150",
  //   },
  //   {
  //     id: 3,
  //     name: "Product C",
  //     price: 14.99,
  //     quantity: 1,
  //     image: "https://via.placeholder.com/150",
  //   },
  // ]);
  // const calculateTotal = () => {
  //   // Code for calculating the total amount
  //   return cartItems.reduce(
  //     (total, item) => total + item.price * item.quantity,
  //     0
  //   );
  // };

  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Product A",
      price: 19.99, 
      quantity: 1,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Product B",
      price: 24.99,
      quantity: 2,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Product C",
      price: 14.99,
      quantity: 1,
      image: "https://via.placeholder.com/150",
    },
  ]);

  const handleQuantityChange = (itemId, operation) => {
    // Code for handling quantity change
  };

  const handleRemoveItem = (itemId) => {
    // Code for removing an item from the cart
  };

  const calculateTotal = () => {
    // Code for calculating the total amount
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };


  return (
    <Center>
      <Box
        w={"50%"}
        // p={6}

        bg="gray.100"
        mt="130"
      >
        <Heading>
          <Text fontSize={40} as="b" ml={250}>
            Giỏ hàng của bạn
          </Text>
        </Heading>
        <Box
          border="1px solid #ccc"
          borderRadius="5"
          bg="gray.100"
          h={50}
          display="flex" // Sử dụng flexbox
          alignItems="center" // Căn giữa theo chiều dọc
          justifyContent="flex-start"
          mt={30}
        >
          <Text ml={10} fontSize={18}>
            Giỏ hàng (2 sản phẩm)
          </Text>
        </Box>
        <Box
          border="1px solid #ccc"
          w="100%" // Đặt chiều rộng của Box
          p={4} // Padding của Box
          borderWidth="1px" // Độ dày của đường viền
          borderRadius={5}
          overflow="hidden" // Ẩn những phần tràn ra ngoài
          bg="white" // Màu nền của Box
          boxShadow="lg" // Đổ bóng cho Box
          m="auto" // Căn giữa Box
          mt={20}
        >
          <Flex borderRadius="8">
            <Box w="160px" h="160px" mr={4} ml={4}>
              <Image
                src="https://cdn.tgdd.vn/Products/Images/44/302982/hp-omen-16-n0085ax-r9-7c144pa-thumb-fix-600x600.jpg" // URL của hình ảnh sản phẩm
                alt="Sản phẩm"
                objectFit="cover" // Đảm bảo hình ảnh phủ kín Box
                w="100%" // Chiều rộng của hình ảnh
                h="auto" // Chiều cao của hình ảnh
              />
              <Button
                leftIcon={<DeleteIcon />}
                mt={10}
                ml={55}
                color={"gray"}
                fontSize={15}
                border="none"
                bgColor={"white"}
              >
                Xóa
              </Button>
            </Box>
            <Flex flex="1" direction="column" mt={15} ml={10} mr={10}>
              <Box>
                <Text fontSize="18" color={"blue"} mb={2}>
                  HP Omen 16 n0085AX R9 6900HX (7C144PA)
                </Text>

                <Text color="gray.800" as={"i"} mb={2} fontSize={16}>
                  Dịch vụ/Gói bảo hành thiết bị điện tử được áp dụng cho sản
                  phẩm này
                </Text>
              </Box>
            </Flex>
            <Box>
              <Text mt={15} color="red" fontWeight="bold" fontSize="xl" mb={5}>
                Giá giảm: 47.521.000 ₫
              </Text>
              <Text color="gray" textDecoration="line-through">
                Giá gốc: 52.273.100 ₫
              </Text>
            </Box>
          </Flex>
          <Flex borderRadius="8">
            <Box w="160px" h="160px" mr={4} ml={4}>
              <Image
                src="https://cdn.tgdd.vn/Products/Images/44/302984/hp-elitebook-dragonfly-g3-i7-6z980pa-070323-114211-600x600.jpg" // URL của hình ảnh sản phẩm
                alt="Sản phẩm"
                objectFit="cover" // Đảm bảo hình ảnh phủ kín Box
                w="100%" // Chiều rộng của hình ảnh
                h="auto" // Chiều cao của hình ảnh
              />
              <Button
                leftIcon={<DeleteIcon />}
                mt={10}
                ml={55}
                color={"gray"}
                fontSize={15}
                border="none"
                bgColor={"white"}
              >
                Xóa
              </Button>
            </Box>
            <Flex flex="1" direction="column" mt={15} ml={10} mr={10}>
              <Box>
                <Text fontSize="18" color={"blue"} mb={2}>
                  HP Elitebook Dragonfly G3 i7 1255U (6Z980PA)
                </Text>

                <Text color="gray.800" as={"i"} mb={2} fontSize={16}>
                  Dịch vụ/Gói bảo hành thiết bị điện tử được áp dụng cho sản
                  phẩm này
                </Text>
              </Box>
            </Flex>
            <Box>
              <Text mt={15} color="red" fontWeight="bold" fontSize="xl" mb={5}>
                Giá giảm: 34.392.000 ₫
              </Text>
              <Text color="gray" textDecoration="line-through">
                Giá gốc: 41.270.400 ₫
              </Text>
            </Box>
          </Flex>
        </Box>
        <Flex>
          <Box mt={15} w={"100%"}>
            <Center>
              <Text fontSize={22} as={"b"} align={"center"} w={"50%"}>
                {" "}
                Tạm tính :
              </Text>
              <Text
                fontSize={22}
                as={"b"}
                align={"center"}
                w={"50%"}
                color={"red"}
              >
                {" "}
                81,913,000 ₫
              </Text>
            </Center>
          </Box>
        </Flex>
        <Flex
          w="100%"
          flexDirection="column"
          alignItems="center"
          gap={4}
          mt={50}
        >
          <Button
            w="80%"
            borderRadius={8}
            h={50}
            bgColor={"red"}
            color={"white"}
            fontSize={16}
            as={"b"}
          >
            <Text>Tiến hành đặt hàng</Text>
          </Button>
          <Button
            w="80%"
            borderRadius={8}
            h={50}
            bgColor={"white"}
            color={"red"}
            fontSize={16}
            as={"b"}
            border="1px solid #FF0000"
            mt={10}
          >
            <Text>Chọn thêm sản phẩm khác</Text>
          </Button>
        </Flex>
      </Box>
    </Center>
  );
};

export default Cart;
