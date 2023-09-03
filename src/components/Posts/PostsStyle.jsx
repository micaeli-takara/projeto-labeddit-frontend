import styled from "styled-components";


export const ContainerPosts = styled.div`
  border-radius: 12px;
  border: 1px solid #e0e0e0;
  background: #fbfbfb;
  display: flex;
  padding: 1rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 18px;
  word-wrap: break-word;
`;

export const TitleAuthor = styled.p`
  color: #6f6f6f;
  font-family: IBM Plex Sans;
  font-size: 12px;
  font-weight: 400;
`;

export const SectionPost = styled.p`
  color: #000;
  font-family: IBM Plex Sans;
  font-size: 18px;
  font-weight: 400;
  margin: 1rem 0;
`;

export const SectionLikeDislikeComment = styled.div`
  display: flex;
  gap: 1rem;

  .LikeButton {
    cursor: pointer;
    background-color: transparent;
    border: none;
    transition: filter 0.3s ease-in-out;
  }

  button {
    border: none;
    background-color: transparent;
  }

  .LikeDislike,
  .Comments {
    display: flex;
    align-items: center;
    gap: 0.7rem;
    border: 0.797px solid #ececec;
    border-radius: 28px;
    padding: 0.2rem 0.4rem;
  }

  .TotalLikes {
    color: #6f6f6f;
    text-align: center;
    font-family: IBM Plex Sans;
    font-size: 0.7rem;
    font-weight: 700;
  }

  .TotalComments {
    color: #6f6f6f;
    font-family: IBM Plex Sans;
    font-size: 0.7rem;
    font-weight: 400;
  }

  img {
    cursor: pointer;
  }

`;
