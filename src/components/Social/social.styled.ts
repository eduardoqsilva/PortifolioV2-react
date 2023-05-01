import styled from "styled-components";

export const SocialHomeWrapper = styled.div`
  width: 13rem;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  position: fixed;
  bottom: 1rem;
  left: 1rem;
  transition: all 0.2s ease-in;
  z-index: 1;

  & a:hover {
    transform: scale(1.05);
  }
  & a:active {
    transform: scale(0.95);
  }
  
  @media (max-width: 500px) {
    left: 50%;
    transform: translateX(-50%);
  }
`