import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import imgSrc from "../assets/img.png";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <Box bgColor={"blackAlpha.900"} w={"full"} h={"85vh"}>
      <motion.div style={{
        height:"80vh",
      }}
      animate={{
        translateY: "20px",
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
      }}
      >
        <Image
          w={"full"}
          h={"full"}
          objectFit={"contain"}
          src={imgSrc}
          filter={"grayscale(1)"}
        />
      </motion.div>

      <Text
        fontSize={"8xl"}
        textAlign={"center"}
        fontWeight={"thick"}
        color={"whiteAlpha.700"}
        mt={"-20"}
      >
        Crypto Vault
      </Text>
    </Box>
  );
};

export default Home;
