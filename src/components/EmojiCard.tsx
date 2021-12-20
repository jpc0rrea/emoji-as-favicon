import { Flex, Heading, useColorModeValue } from '@chakra-ui/react';

interface EmojiCardProps {
  emoji: string;
  onClick: () => void;
  favicon: string;
}

export function EmojiCard({ emoji, onClick, favicon }: EmojiCardProps) {
  const cardBackgroundColor = useColorModeValue(
    'brand.backgroundGray',
    'gray.50'
  );

  return (
    <>
      <Flex
        backgroundColor={cardBackgroundColor}
        margin={['4', '8']}
        width="80%"
        height="80%"
        as="button"
        borderRadius="10"
        justify="center"
        align="center"
        transition="all .4s ease"
        border="6px solid"
        borderColor={favicon === emoji ? 'brand.yellow' : 'transparent'}
        shadow={['md', 'lg']}
        _hover={{
          transform: 'scale(1.05)',
          cursor: 'pointer',
          transition: 'all .4s ease',
        }}
        onClick={onClick}
      >
        <Heading fontSize="8xl">{emoji}</Heading>
      </Flex>
    </>
  );
}
