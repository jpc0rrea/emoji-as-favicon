import { Button, Flex, Heading, SimpleGrid } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import { EmojiCard } from '../components/EmojiCard';
import { ToogleThemeButton } from '../components/ToogleThemeButton';

const LIST_OF_EMOJIS = [
  '🐶',
  '🐱',
  '🐭',
  '🐹',
  '🐰',
  '🦊',
  '🐻',
  '🐼',
  '🐨',
  '🐯',
  '🦁',
  '🐮',
  '🐷',
  '🐸',
  '🐵',
  '🙈',
  '🙉',
  '🙊',
  '🐒',
  '🐔',
  '🐧',
  '🐦',
  '🐤',
  '🐣',
  '🐥',
  '🦆',
  '🦭',
  '🦦',
];

const Home: NextPage = () => {
  const [favicon, setFavicon] = useState('🐶');

  const handleRandomizeClick = () => {
    const randomEmoji =
      LIST_OF_EMOJIS[Math.floor(Math.random() * LIST_OF_EMOJIS.length)];

    setFavicon(randomEmoji);
  };

  return (
    <>
      <Head>
        <title>Emoji as Favicon</title>
        <meta
          name="description"
          content="A website that changes the favicon when the user select a new emoji"
        />
        <link
          rel="icon"
          href={`data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${favicon}</text></svg>`}
        />
      </Head>

      <Flex direction="column" h="100vh">
        <Flex
          as="header"
          w="100%"
          h="20"
          mx="auto"
          mt="4"
          px="6"
          align="center"
          maxH="20"
        >
          <Flex w="100%" justifyContent="space-between">
            <Heading as="h2" size="2xl" fontWeight="bold" letterSpacing="tight">
              Emoji as favicon {favicon}
            </Heading>

            <Flex>
              <Button
                onClick={handleRandomizeClick}
                colorScheme="yellow"
                marginRight="4"
              >
                Randomize!
              </Button>

              <ToogleThemeButton />
            </Flex>
          </Flex>
        </Flex>
        <SimpleGrid
          flex="1"
          gap="4"
          align="center"
          paddingBottom="6"
          justifyContent="space-between"
          templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
        >
          {LIST_OF_EMOJIS.map((emoji) => {
            return (
              <EmojiCard
                key={emoji}
                emoji={emoji}
                favicon={favicon}
                onClick={() => setFavicon(emoji)}
              />
            );
          })}
        </SimpleGrid>
      </Flex>
    </>
  );
};

export default Home;
