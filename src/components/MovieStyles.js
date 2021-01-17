import styled from "styled-components";

export const MovieHome = styled.div`

`
export const MovieWrapper = styled.div`
  /* max-height: 200px; */
  display: flex;
  flex-direction: column;
  width: 95%;
  /* height: 60vh; */
`;

export const Title = styled.h1`
  /* background-color: green; */
  font-size: ${({size}) => size};
`
export const MoviePosters = styled.div`
  display: flex;
  overflow-y: hidden;
  overflow-x: scroll;
  padding: 20px;
  /* justify-content: center; */
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const MoviePoster = styled.img`
  height: ${({size}) => size};;
  object-fit: contain;
  margin-right: 10px;
  transition: transform 450ms;
  &:hover {
    transform: scale(1.08);
  }
`;

export const MoviePlayerWrapper = styled.div`
  /* min-height: 100vh; */
  width: 85%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const MoviePlayer = styled.div`
  width: 80%;
`;

export const BackButton = styled.div`
  position: fixed;
  top: 50px;
  left: 50px;
  /* border: 3px solid blue; */
`;
