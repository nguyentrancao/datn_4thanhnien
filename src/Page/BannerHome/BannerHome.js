import { Grid, GridItem, Center } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
const BannerHome = () => {
  return (
    <>
      <Center>
        <Grid
          mt={110}
          w={"100%"}
          h="500px"
          templateRows="repeat(3, 1fr)"
          templateColumns="repeat(12, 1fr)"
          gap={4}
        >
          <GridItem
            h="350px"
            rowSpan={2}
            colSpan={9}
            bg="tomato"
            borderRadius={8}
          >
            <Image
              src="https://isotech-demo.myshopify.com/cdn/shop/files/2_ae5cc69e-78af-4aea-9cc7-bb616d558539.png?v=1695797615"
              alt="Dan Abramov"
              h="470px"
              w={"100%"}
              borderRadius={8}
            />
          </GridItem>
          <GridItem colSpan={3} borderRadius={8}>
            {" "}
            <Image
              src="https://isotech-demo.myshopify.com/cdn/shop/files/Frame_15.png?v=1695797682&width=1500"
              alt="Slide 3"
              style={{
                width: "100%",
                height: "230px",
                objectFit: "cover",
                borderRadius: "15px",
                overflow: "hidden",
              }}
            ></Image>{" "}
          </GridItem>
          <GridItem colSpan={3} borderRadius={8}>
            {" "}
            <Image
              src="https://isotech-demo.myshopify.com/cdn/shop/files/Frame_15.png?v=1695797682&width=1500"
              alt="Slide 3"
              style={{
                width: "100%",
                height: "230px",
                objectFit: "cover",
                borderRadius: "15px",
                overflow: "hidden",
              }}
            ></Image>{" "}
          </GridItem>
          <GridItem colSpan={4} h={"160px"} borderRadius={15} >
            {" "}
            <Image
              src="https://isotech-demo.myshopify.com/cdn/shop/files/3_Banner_4.png?v=1695813715&width=550"
              alt="Slide 3"
              h={200}
              style={{
                width: "100%",
                objectFit: "cover",
                borderRadius: "15px",
                overflow: "hidden",
              }}
            />
          </GridItem>
          <GridItem colSpan={4} h={"160px"} borderRadius={15} >
            {" "}
            <Image
              src="https://isotech-demo.myshopify.com/cdn/shop/files/3_Banner_4.png?v=1695813715&width=550"
              alt="Slide 3"
              h={200}
              style={{
                width: "100%",
                objectFit: "cover",
                borderRadius: "15px",
                overflow: "hidden",
              }}
            />
          </GridItem>
          <GridItem colSpan={4} h={"160px"} borderRadius={15} >
            {" "}
            <Image
              src="https://isotech-demo.myshopify.com/cdn/shop/files/3_Banner_4.png?v=1695813715&width=550"
              alt="Slide 3"
              h={200}
              style={{
                width: "100%",
                objectFit: "cover",
                borderRadius: "15px",
                overflow: "hidden",
              }}
            />
          </GridItem>
        </Grid>
      </Center>
    </>
  );
};
export default BannerHome;
