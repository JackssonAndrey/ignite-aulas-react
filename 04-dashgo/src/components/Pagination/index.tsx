import { Box, Stack, Text } from '@chakra-ui/react';

import { PaginationItem } from './PaginationItem';

interface PaginationProps {
  totalCountOfRegisters: number;
  // eslint-disable-next-line react/require-default-props
  registerPerPage?: number;
  // eslint-disable-next-line react/require-default-props
  currentPage?: number;
  onPageChange: (page: number) => void;
}

const siblingnsCount = 1;

function generetaPageArray(from: number, to: number) {
  return [...new Array(to - from)]
    .map((_, index) => {
      return from + index + 1;
    })
    .filter((page) => page > 0);
}

export function Pagination({
  totalCountOfRegisters,
  registerPerPage = 10,
  onPageChange,
  currentPage = 1,
}: PaginationProps) {
  const lastPage = Math.floor(totalCountOfRegisters / registerPerPage);
  const previusPages =
    currentPage > 1
      ? generetaPageArray(currentPage - 1 - siblingnsCount, currentPage - 1)
      : [];
  const nextPages =
    currentPage < lastPage
      ? generetaPageArray(currentPage, Math.min(currentPage + siblingnsCount, lastPage))
      : [];

  return (
    <Stack direction={['column', 'row']} mt="8" justify="space-between" align="center">
      <Box>
        <strong>{currentPage * registerPerPage - 9}</strong> -{' '}
        <strong>{currentPage * registerPerPage}</strong> de{' '}
        <strong>{totalCountOfRegisters}</strong>
      </Box>

      <Stack direction="row" spacing="2">
        {currentPage > 1 + siblingnsCount && (
          <>
            <PaginationItem onPageChange={onPageChange} number={1} />
            {currentPage > 2 + siblingnsCount && (
              <Text color="gray.300" width="8" textAlign="center">
                ...
              </Text>
            )}
          </>
        )}
        {previusPages.length > 0 &&
          previusPages.map((page) => {
            return (
              <PaginationItem onPageChange={onPageChange} key={page} number={page} />
            );
          })}
        <PaginationItem onPageChange={onPageChange} number={currentPage} isCurrent />
        {nextPages.length > 0 &&
          nextPages.map((page) => {
            return (
              <PaginationItem onPageChange={onPageChange} key={page} number={page} />
            );
          })}
        {currentPage + siblingnsCount < lastPage && (
          <>
            {currentPage + 1 + siblingnsCount < lastPage && (
              <Text color="gray.300" width="8" textAlign="center">
                ...
              </Text>
            )}
            <PaginationItem onPageChange={onPageChange} number={lastPage} />
          </>
        )}
      </Stack>
    </Stack>
  );
}
