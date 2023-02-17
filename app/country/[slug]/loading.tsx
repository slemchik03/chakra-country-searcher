"use client"

import { Center, Spinner } from "@chakra-ui/react";

export default function Loading() {
  return (
    <Center minH="100vh">
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
    </Center>
  );
}
