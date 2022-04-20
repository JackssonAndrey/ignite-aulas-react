import { forwardRef, ForwardRefRenderFunction } from 'react';

import {
  FormControl,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from '@chakra-ui/react';

interface InputProps extends ChakraInputProps {
  name: string;
  // eslint-disable-next-line react/require-default-props
  label?: string;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, label, ...rest },
  ref
) => {
  return (
    <FormControl>
      <FormLabel htmlFor={label}>{label}</FormLabel>
      <ChakraInput
        name={name}
        id={name}
        focusBorderColor="pink.500"
        bgColor="gray.900"
        variant="filled"
        _hover={{ bgColor: 'gray.900' }}
        size="lg"
        {...rest}
        ref={ref}
      />
    </FormControl>
  );
};

export const Input = forwardRef(InputBase);
