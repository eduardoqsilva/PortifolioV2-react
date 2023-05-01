import styled from "styled-components";

export const SocialHomeWrapper = styled.div`
  width: 13rem;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  position: absolute;
  bottom: 1rem;
  left: 1rem;
  transition: all 0.2s ease-in;

  & a:hover {
    transform: scale(1.05);
  }
  & a:active {
    transform: scale(0.95);
  }
`