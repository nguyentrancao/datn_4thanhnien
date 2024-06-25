import React, { useState } from "react";
import {
  Box,
  Button,
  Text,
  Center,
  Flex,
  Heading,
  Image,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "HP Omen 16 n0085AX R9 6900HX (7C144PA)",
      price: 47521000,
      quantity: 1,
      image:
        "https://cdn.tgdd.vn/Products/Images/44/302982/hp-omen-16-n0085ax-r9-7c144pa-thumb-fix-600x600.jpg",
    },
    {
      id: 2,
      name: "HP Elitebook Dragonfly G3 i7 1255U (6Z980PA)",
      price: 34392000,
      quantity: 2,
      image:
        "https://cdn.tgdd.vn/Products/Images/44/302984/hp-elitebook-dragonfly-g3-i7-6z980pa-070323-114211-600x600.jpg",
    },
  ]);

  const handleRemoveItem = (itemId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCartItems);
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <Center>
      <Box w="80%" bg="gray.100" mt={10} p={4} borderRadius="md">
        <Heading fontSize="2xl" textAlign="center" mb={4}>
          Giỏ hàng của bạn
        </Heading>

        {cartItems.map((item) => (
          <Flex key={item.id} alignItems="center" mt={4} p={4} bg="white" borderRadius="md" boxShadow="md">
            <Image src={item.image} alt={item.name} boxSize="160px" objectFit="cover" mr={4} />

            <Flex direction="column" flex="1">
              <Text fontSize="xl" fontWeight="bold" color="blue.500" mb={2}>
                {item.name}
              </Text>
              <Text fontSize="md" color="gray.600" mb={2}>
                Dịch vụ/Gói bảo hành thiết bị điện tử được áp dụng cho sản phẩm này
              </Text>
              <Button
                leftIcon={<DeleteIcon />}
                colorScheme="gray"
                size="sm"
                onClick={() => handleRemoveItem(item.id)}
              >
                Xóa
              </Button>
            </Flex>

            <Flex direction="column" alignItems="flex-end">
              <Text fontSize="xl" color="red.500" fontWeight="bold" mb={2}>
                {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(item.price)}
              </Text>
              <Text fontSize="md" color="gray.500" textDecoration="line-through">
                Giá gốc: {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(item.price * 1.1)}
              </Text>
            </Flex>
          </Flex>
        ))}

        <Flex mt={6} justify="space-between">
          <Text fontSize="xl" fontWeight="bold">
            Tạm tính: {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(calculateTotal())}
          </Text>
        </Flex>

        <Flex mt={6} justify="center" direction="column" alignItems="center">
          <Link to="/Payment">
            <Button
              w="100%"
              maxW="640px"
              borderRadius="md"
              colorScheme="red"
              color="white"
              fontSize="lg"
              fontWeight="bold"
              mb={4}
            >
              Tiến hành đặt hàng
            </Button>
          </Link>
          <Button
            w="100%"
            maxW="640px"
            borderRadius="md"
            colorScheme="red"
            variant="outline"
            fontSize="lg"
            fontWeight="bold"
          >
            Chọn thêm sản phẩm khác
          </Button>
        </Flex>
      </Box>
    </Center>
  );
};

export default Cart;
