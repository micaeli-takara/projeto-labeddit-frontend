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
      box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 10px;
  

  .section-title-and-delete{
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    width: 100%;
    
  }

  .delete {
    display: flex;
    align-items: center;
    gap: 0.7rem;
    border: 3px solid #ececec;
    border-radius: 28px;
    padding: 0.2rem 0.4rem;
  }

  button {
    border: none;
    background-color: transparent;
  }
`;

export const TitleAuthor = styled.p`
  color: #6f6f6f;
  font-family: IBM Plex Sans;
  font-size: 12px;
  font-weight: 400;
  margin-bottom: 8px;
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
  justify-content: space-between;
  align-items: center;
  width: 100%;

  button {
    border: none;
    background-color: transparent;
  }

  .like-dislike,
  .comment {
    display: flex;
    align-items: center;
    gap: 0.7rem;
    border: 3px solid #ececec;
    border-radius: 28px;
    padding: 0.2rem 0.4rem;
  }

  .total-likes,
  .total-comments {
    color: #6f6f6f;
    font-family: IBM Plex Sans;
    font-size: 0.8rem;
    font-weight: 400;
    margin: 0;
  }

  img {
    cursor: pointer;
    width: 20px;
    height: 20px;
  }
`;
