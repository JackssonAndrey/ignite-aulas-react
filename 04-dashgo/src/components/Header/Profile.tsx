import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

interface ProfileProps {
  // eslint-disable-next-line react/require-default-props
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Andrey Araujo</Text>
          <Text color="gray.300" fontSize="small">
            contato@andreyaraujo.dev
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Andrey Araujo"
        src="https://github.com/andreyaraujo-dev.png"
      />
    </Flex>
  );
}
