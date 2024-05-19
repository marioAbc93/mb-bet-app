import styled from "styled-components";

export const HiddenMenu = styled.div<{ show: boolean }>`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 40px;
  top: 0;
  right: 0;
  z-index: 5;
  background: ${({ theme }) => theme.background} !important;
  width: 300px;
  height: 100%;
  padding: 20px;
  display: ${({ show }) => (show ? "block" : "none")};
  animation-duration: 0.5s;
  animation-name: ${({ show }) => (show ? "slidein" : "slideout")};
  box-shadow: ${({ theme }) => theme.boxShadow};
  @keyframes slidein {
    from {
      margin-left: 100%;
      width: 0px;
    }

    to {
      margin-left: 0%;
      width: 300px;
    }
  }
  @keyframes slideout {
    from {
      margin-left: 0%;
      width: 300px;
    }

    to {
      margin-left: 100%;
      width: 0px;
    }
  }
`;

export const ButtonComponent = styled.button`
  cursor: pointer;
  color: ${({ theme }) => theme.color};
  &:focus {
    outline: none;
  }
  padding: 10px;
  border-radius: 10px;
  width: 40px;
  height: 40px;
  display: flex;
  place-self: right;
  background: hsl(223, 10%, 50%, 0.2);
  border: none;
  flex: 1;
  &:active {
    transform: scale(0.9);
  }
`;

export const SadIconContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 40px;
  place-self: center;
  span {
    text-align: justify;
  }
`;
