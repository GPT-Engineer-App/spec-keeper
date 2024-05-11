import { Box, Button, Container, Flex, Grid, Heading, IconButton, Input, Menu, MenuButton, MenuItem, MenuList, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { FaBars, FaSearch, FaTh, FaThList, FaUserCircle } from "react-icons/fa";

const notes = [
  { id: 1, title: "Meeting Notes", content: "Discuss the project updates...", lastEdited: "Today" },
  { id: 2, title: "Grocery List", content: "Milk, Eggs, Bread, Butter...", lastEdited: "Yesterday" },
  { id: 3, title: "Book Summary", content: "Key points from the reading...", lastEdited: "Last week" },
];

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Header />
      <SearchAndFilterPanel />
      <NoteGrid />
    </Container>
  );
};

const Header = () => {
  return (
    <Flex align="center" justify="space-between" p={4} bg="white" borderBottom="1px" borderColor="gray.200">
      <Heading size="lg">SpecKeep</Heading>
      <Flex align="center">
        <Input placeholder="Search notes" mr={4} />
        <Menu>
          <MenuButton as={Button} rightIcon={<FaUserCircle />}>
            Account
          </MenuButton>
          <MenuList>
            <MenuItem>Settings</MenuItem>
            <MenuItem>Logout</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Flex>
  );
};

const SearchAndFilterPanel = () => {
  return (
    <Flex align="center" justify="space-between" p={4} bg="gray.50">
      <Flex>
        <IconButton aria-label="Grid view" icon={<FaTh />} m={1} />
        <IconButton aria-label="List view" icon={<FaThList />} m={1} />
      </Flex>
      <Button colorScheme="blue">Add Note</Button>
    </Flex>
  );
};

const NoteGrid = () => {
  return (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4} p={4}>
      {notes.map((note) => (
        <NoteItem key={note.id} note={note} />
      ))}
    </SimpleGrid>
  );
};

const NoteItem = ({ note }) => {
  return (
    <Box p={4} bg="white" boxShadow="sm" borderRadius="md" _hover={{ boxShadow: "md" }}>
      <Heading size="md" mb={2}>
        {note.title}
      </Heading>
      <Text fontSize="sm" mb={2}>
        {note.content}
      </Text>
      <Text fontSize="xs" color="gray.500">
        Last edited: {note.lastEdited}
      </Text>
    </Box>
  );
};

export default Index;
