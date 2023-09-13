import styled from "styled-components";

export const ContainerComment = styled.div`
    border-radius: 12px;
    border: 1px solid #E0E0E0;
    background: #FBFBFB;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 1rem;
    word-wrap: break-word;
    gap: 18px;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 10px;

    .SectionTitleAndDelete{
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    width: 100%;
    
  }

  .Delete {
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
    color: #6F6F6F;
    font-family: IBM Plex Sans;
    font-size: 12px;
    font-weight: 400;
`;

export const SectionComment = styled.p`
    color: #000;
    font-family: IBM Plex Sans;
    font-size: 18px;
    font-weight: 400;
    margin: 1rem 0;
`;

export const SectionLikeDislikeComment = styled.div`
    display: flex;
    gap: 1rem;

    button{
        border: none;
        background-color: transparent;
    }

    .LikeDislike {
        display: flex;
        align-items: center;
        gap: 0.7rem;
        border: 2px solid #ECECEC;
        border-radius: 28px;
        padding: 0.2rem 0.4rem;
    }

    .TotalLikes {
        color: #6F6F6F;
        text-align: center;
        font-family: IBM Plex Sans;
        font-size: 0.7rem;
        font-weight: 700;
    }

    img {
        cursor: pointer;
    }
`;