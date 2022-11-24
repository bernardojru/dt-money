import styled from "styled-components";
import { CaretRight, CaretLeft } from "phosphor-react";

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  margin: 1rem auto;

  cursor: pointer;
`;

export const PagesConst = styled.button`
  background-color: ${({ theme }) => theme["green-700"]};
  cursor: pointer;
  color: ${({ theme }) => theme.white};

  width: 2.5rem;
  height: 2.5rem;

  border-radius: 6px;
  border: 0;
`;
