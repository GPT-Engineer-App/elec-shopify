import { Box, Container, VStack, Text, Heading, Image, SimpleGrid, Link, Flex, Spacer, HStack, Button } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";

const products = [
  { id: 1, name: "Smartphone", price: "$699", image: "https://via.placeholder.com/150" },
  { id: 2, name: "Laptop", price: "$999", image: "https://via.placeholder.com/150" },
  { id: 3, name: "Smartwatch", price: "$199", image: "https://via.placeholder.com/150" },
  { id: 4, name: "Headphones", price: "$149", image: "https://via.placeholder.com/150" },
];

const Index = () => {
  return (
    <Box>
      <Box as="header" bg="blue.800" color="white" py={4}>
        <Container maxW="container.xl">
          <Flex align="center">
            <Heading as="h1" size="lg">
              E-Shop
            </Heading>
            <Spacer />
            <HStack spacing={8}>
              <Link as={RouterLink} to="/">Home</Link>
              <Link as={RouterLink} to="/products">Products</Link>
              <Link as={RouterLink} to="/about">About Us</Link>
              <Link as={RouterLink} to="/contact">Contact Us</Link>
            </HStack>
          </Flex>
        </Container>
      </Box>

      <Box as="main">
        <Box bg="gray.100" py={20}>
          <Container maxW="container.xl">
            <Flex direction={{ base: "column", md: "row" }} align="center">
              <Box flex="1">
                <Heading as="h2" size="xl" mb={4}>
                  Featured Product
                </Heading>
                <Text fontSize="lg" mb={4}>
                  Discover the latest in electronics with our featured product of the month.
                </Text>
                <Button colorScheme="blue" size="lg">Shop Now</Button>
              </Box>
              <Box flex="1" textAlign="center">
                <Image src="https://via.placeholder.com/300" alt="Featured Product" borderRadius="md" />
              </Box>
            </Flex>
          </Container>
        </Box>

        <Box py={20}>
          <Container maxW="container.xl">
            <Heading as="h2" size="xl" mb={10} textAlign="center">
              Our Products
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
              {products.map((product) => (
                <Box key={product.id} bg="white" boxShadow="md" borderRadius="md" overflow="hidden">
                  <Image src={product.image} alt={product.name} />
                  <Box p={4}>
                    <Heading as="h3" size="md" mb={2}>{product.name}</Heading>
                    <Text fontSize="lg" color="blue.600" mb={2}>{product.price}</Text>
                    <Button colorScheme="blue" size="sm">Add to Cart</Button>
                  </Box>
                </Box>
              ))}
            </SimpleGrid>
          </Container>
        </Box>
      </Box>

      <Box as="footer" bg="blue.800" color="white" py={10}>
        <Container maxW="container.xl">
          <Flex direction={{ base: "column", md: "row" }} align="center">
            <Text>&copy; {new Date().getFullYear()} E-Shop. All rights reserved.</Text>
            <Spacer />
            <HStack spacing={4}>
              <Link href="#"><FaFacebook /></Link>
              <Link href="#"><FaTwitter /></Link>
              <Link href="#"><FaInstagram /></Link>
            </HStack>
          </Flex>
          <Flex direction={{ base: "column", md: "row" }} align="center" mt={4}>
            <Link href="#" mr={4}>Terms of Service</Link>
            <Link href="#">Privacy Policy</Link>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;