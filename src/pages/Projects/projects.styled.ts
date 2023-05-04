import styled from "styled-components";


export const ContainerProjects = styled.div`
  width: 100vw;
  min-height: 100vh;

  padding: 6rem 1.5rem 1.5rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const GridProjectsWrapper = styled.div`
  width: fit-content;
  height: fit-content;

  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-template-rows: 130px auto;
  align-items: center;
  justify-items: center;
  gap: 1rem;

  & > div:nth-child(1) {
    grid-column: span 4;
    align-self: flex-start;
    
    @media (max-width: 1350px) {
      grid-column: span 2;
    }
    @media (max-width: 690px) {
      grid-column: span 1;
    }
  }

  @media (max-width: 1350px) {
    grid-template-columns: repeat(2, auto);
  }
  @media (max-width: 690px) {
    grid-template-columns: repeat(1, auto);
  }
`