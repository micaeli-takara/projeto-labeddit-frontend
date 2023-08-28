import styled from "styled-components";

export const ContainerPosts = styled.div`
    border-radius: 12px;
    border: 1px solid #E0E0E0;
    background: #FBFBFB;
    display: flex;
    padding: 1rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 18px;
`;

export const TitleAuthor = styled.p`
    color: #6F6F6F;
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

    button{
        border: none;
        background-color: transparent;
    }

    .LikeDislike, .Comments {
        display: flex;
        align-items: center;
        gap: 0.7rem;
        border: 0.797px solid #ECECEC;
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

    .TotalComments {
        color: #6F6F6F;
        font-family: IBM Plex Sans;
        font-size: 0.7rem;
        font-weight: 400;
    }

    img {
        cursor: pointer;
    }
`;