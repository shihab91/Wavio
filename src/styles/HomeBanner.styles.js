import styled from "styled-components";
export const HomeBannerImg = styled.img`
  animation: float 4s ease-in-out infinite;
  @keyframes float {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-25px);
    }
    100% {
      transform: translateY(0px);
    }
  }
`;
