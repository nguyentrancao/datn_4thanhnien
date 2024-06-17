import React from "react";
import BannerHome from "../BannerHome/BannerHome.js";
import { Box, Center } from "@chakra-ui/react";
import ProductTop from "../Product/ProductTop";
import { px } from "framer-motion";
import ProductList from "../Product/ProductList";
import ProductNb from "../Product/ProductNoibat.js";
import Smartwach from "../Product/Smartwach.js";
import Phukiennb from "../Product/Phukien.js"
import ProductCard from"../Product/Gtiphone.js"
import InfoCard from"../Product/Service.js"
import CustomComponent from"../Product/Blog.js"
const Home = () => {
  return (
    <>
      <Center>
        <Box mt={50} w={"80%"} mbt>
          <BannerHome />
        </Box>
      </Center>
      <Center>
        <Box mt={10} w={"80%"} mbt>
          <ProductTop h={200}></ProductTop>
          <ProductList h={50} mt={300}></ProductList>
        </Box>
      </Center>
      <ProductNb></ProductNb>
      <Smartwach />
      <Phukiennb />
      <ProductCard />
      <InfoCard />
      <InfoCard />
      <CustomComponent/>
    </>
  );
};
export default Home;
