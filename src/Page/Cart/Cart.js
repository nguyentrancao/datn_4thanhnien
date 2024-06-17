import React, { useState } from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Image,
  IconButton,
  Divider,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "@chakra-ui/react";
import { FaTrashAlt, FaPlus, FaMinus } from "react-icons/fa";

const Cart = () => {
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
    <Box
      maxWidth="md"
      p={6}
      border="1px solid #ccc"
      borderRadius="md"
      bg="gray.100"
    >
      <Heading mb={6} color="gray.800">
        Your Cart
      </Heading>

      {/* Cart Items */}
      <Box>
        <Table variant="striped" colorScheme="gray">
          <Thead>
            <Tr>
              <Th color="gray.800">Product</Th>
              <Th color="gray.800">Quantity</Th>
              <Th color="gray.800">Price</Th>
              <Th color="gray.800">Total</Th>
              <Th color="gray.800"></Th>
            </Tr>
          </Thead>
          <Tbody>
            {cartItems.map((item) => (
              <Tr key={item.id} bg="white" _hover={{ bg: "gray.200" }}>
                <Td>
                  <Flex align="center" gap={4}>
                    <Image src={item.image} alt={item.name} boxSize="80px" />
                    <Box>
                      <Heading size="md" color="gray.800">
                        {item.name}
                      </Heading>
                      <Text color="gray.500">${item.price.toFixed(2)}</Text>
                    </Box>
                  </Flex>
                </Td>
                <Td>
                  <Flex align="center" gap={4}>
                    <IconButton
                      aria-label="Decrease quantity"
                      icon={<FaMinus />}
                      onClick={() => handleQuantityChange(item.id, "decrement")}
                      colorScheme="gray"
                      size="sm"
                      _hover={{ bg: "gray.300" }}
                    />
                    <Text>{item.quantity}</Text>
                    <IconButton
                      aria-label="Increase quantity"
                      icon={<FaPlus />}
                      onClick={() => handleQuantityChange(item.id, "increment")}
                      colorScheme="gray"
                      size="sm"
                      _hover={{ bg: "gray.300" }}
                    />
                  </Flex>
                </Td>
                <Td>${item.price.toFixed(2)}</Td>
                <Td>${(item.price * item.quantity).toFixed(2)}</Td>
                <Td>
                  <IconButton
                    aria-label="Remove from cart"
                    icon={<FaTrashAlt />}
                    onClick={() => handleRemoveItem(item.id)}
                    colorScheme="red"
                    size="sm"
                    _hover={{ bg: "red.300" }}
                  />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>

      {/* Cart Summary */}
      <Box mt={6}>
        <Divider borderColor="gray.400" />
        <Flex mt={4} direction="column" gap={4}>
          <Flex justify="space-between">
            <Text color="gray.600">Subtotal</Text>
            <Heading size="md" color="gray.800">
              ${calculateTotal().toFixed(2)}
            </Heading>
          </Flex>
          <Flex justify="space-between">
            <Text color="gray.600">Shipping</Text>
            <Heading size="md" color="gray.800">
              $5.00
            </Heading>
          </Flex>
          <Flex justify="space-between">
            <Text color="gray.800">Total</Text>
            <Heading size="md" color="gray.800">
              ${(calculateTotal() + 5).toFixed(2)}
            </Heading>
          </Flex>
          <Button colorScheme="blue" size="lg" px={8} py={6}>
            Proceed to Checkout
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default Cart;
