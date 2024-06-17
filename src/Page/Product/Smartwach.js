import { Box, Center, Grid, GridItem, Text, Flex } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";

const Smartwatch = () => {
    const products = [
        {
            name: "Samsung Galaxy Watch 4",
            image: "https://cdn.tgdd.vn/Products/Images/7077/248752/samsung-galaxy-watch-4-40mm-tn-2-600x600.jpg"
        },
        {
            name: "Apple Watch Ultra LTE 49mm",
            image: "https://cdn.tgdd.vn/Products/Images/7077/314710/apple-watch-ultra-lte-49mm-vien-titanium-day-ocean-xanh-duong-thumb-4-1-600x600.jpg"
        },
        {
            name: "Samsung Galaxy Watch6 Classic LTE 47mm",
            image: "https://cdn.tgdd.vn/Products/Images/7077/309543/samsung-galaxy-watch6-classic-lte-47-mm-den-ksp-600x600.jpg"
        },
        {
            name: "Samsung Galaxy Watch5 44mm",
            image: "https://cdn.tgdd.vn/Products/Images/7077/286034/samsung-galaxy-watch5-44mm-xanh-duong-thumb-10-600x600.jpg"
        },
        {
            name: "Đồng hồ thông minh Xiaomi Watch S1",
            image: "https://cdn.tgdd.vn/Products/Images/7077/274192/dong-ho-thong-minh-xiaomi-watch-s1-nau-tn-600x600.jpg"
        },
        {
            name: "Redmi Watch 3 Active",
            image: "https://cdn.tgdd.vn/Products/Images/7077/311333/redmi-watch-3-active-xam-tn-600x600.jpg"
        },
        {
            name: "Apple Watch SE LTE 2023 40mm",
            image: "https://cdn.tgdd.vn/Products/Images/7077/316003/apple-watch-se-lte-2023-40mm-vien-nhom-day-silicone-trang-thumb-1-600x600.jpg"
        }
    ];

    return (
        <Box width="1318px" mx="auto" mr={20}>
            <Flex alignItems="center">
                <Text fontSize={40} as='b' ml={300}>Smartwatch Products</Text>
            </Flex>
            <Flex justifyContent="center" mt={10}>
                <Grid
                    templateRows="repeat(5, 1fr)"
                    templateColumns="repeat(2, 1fr)"
                    gap={2}
                    justifyContent="center"
                    alignItems="center"
                    ml={100} // Shift products to the right by 100px
                >
                    <Grid
                        templateColumns="repeat(6, 1fr)"
                        gap={10}
                        w="100%"
                        mx="auto"
                    >
                        <GridItem
                            h="710px"
                            w="200px"
                            rowSpan={2}
                            colSpan={2}
                            bg="white"
                            borderRadius={8}
                        >
                            <Center ml={-460}>
                                <Image
                                    src="https://isotech-demo.myshopify.com/cdn/shop/files/Watch_Banner_7b3ae013-75a3-479c-a76f-7c2eea9d4a9e_1500x.png?v=1696738786"
                                    alt="Banner"
                                    h="820px"
                                    w="700px"
                                    borderRadius={8}
                                    marginBottom={20}
                                    ml={200}
                                />
                            </Center>
                        </GridItem>
                        {products.map((product, index) => (
                            <GridItem
                                key={index}
                                h="401px"
                                w="200px"
                                bg="white"
                                borderRadius={8}
                                boxShadow="lg"
                                p={4}
                            >
                                <Center>
                                    <Image
                                        src={product.image}
                                        alt={`Product ${index + 1}`}
                                        h="150px"
                                        w="150px"
                                        mt={10}
                                        borderTopRadius={8}
                                        marginBottom={20}
                                    />
                                </Center>
                                <Text fontSize='2xl' as='b' textAlign="center">{product.name}</Text>
                                <Text fontSize='md' textAlign="center" mt={4}>
                                    Giá mới: <span style={{ fontSize: '20px', color: 'red' }}>50,000,000</span>
                                </Text>
                            </GridItem>
                        ))}
                    </Grid>
                </Grid>
            </Flex>
        </Box>
    );
};

export default Smartwatch;
