import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { RiMoonLine, RiSunLine } from 'react-icons/ri';

export function ToogleThemeButton() {
  const { colorMode, toggleColorMode } = useColorMode();

  const buttonBackgroundColor = useColorModeValue(
    'gray.50',
    'brand.backgroundGray'
  );

  const buttonBackgroundColorOnHover = useColorModeValue(
    'gray.300',
    'whiteAlpha.300'
  );

  return (
    <IconButton
      aria-label="Toogle theme"
      icon={colorMode === 'light' ? <RiMoonLine /> : <RiSunLine />}
      onClick={toggleColorMode}
      fontSize="20"
      backgroundColor={buttonBackgroundColor}
      _hover={{
        backgroundColor: buttonBackgroundColorOnHover,
      }}
    />
  );
}
