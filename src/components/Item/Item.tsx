import React from "react";

import {
  StyledItemDivContainer,
  StyledItemDiv,
  StyledItemDivRow,
  StyledItemDivColumn,
} from "./Item.styled";

type TItem = {
  name: string;
  mangaDetails: {
    chapter: string;
    sprintToChapter: string;
    lastChapter: string;
  };
  animeDetails: {
    season: string;
    episode: string;
  };
  isManga: boolean;
  isAnime: boolean;
  status: {
    manga: {
      status: string;
    };
    anime: {
      status: string;
    };
  };
};

const Item = ({
  name,
  mangaDetails,
  animeDetails,
  isManga,
  isAnime,
  status,
}: TItem) => {
  const mangaStatus = status?.manga?.status;
  const animeStatus = status?.anime?.status;

  return (
    <StyledItemDivContainer>
      <StyledItemDiv>
        <StyledItemDivRow>
          {isManga ? (
            <div
              style={{
                height: "30px",
                width: "30px",
                backgroundColor: "green",
              }}
            ></div>
          ) : (
            <div
              style={{ height: "30px", width: "30px", backgroundColor: "red" }}
            ></div>
          )}
          <span>{name}</span>
          {isAnime ? (
            <div
              style={{
                height: "30px",
                width: "30px",
                backgroundColor: "green",
              }}
            ></div>
          ) : (
            <div
              style={{ height: "30px", width: "30px", backgroundColor: "red" }}
            ></div>
          )}
        </StyledItemDivRow>
        <StyledItemDivRow>
          {mangaStatus && <div>{mangaStatus}</div>}
          {animeStatus && <div>{animeStatus}</div>}
        </StyledItemDivRow>
        <StyledItemDivRow>
          {isManga && (
            <StyledItemDivColumn>
              {mangaDetails?.chapter && (
                <span>Chapitre : {mangaDetails?.chapter}</span>
              )}
              {mangaDetails?.sprintToChapter && (
                <span>
                  Sprint au chapitre : {mangaDetails?.sprintToChapter}
                </span>
              )}
              {mangaDetails?.lastChapter && (
                <span>Dernier chapitre : {mangaDetails?.lastChapter}</span>
              )}
            </StyledItemDivColumn>
          )}
          {isAnime && (
            <StyledItemDivColumn>
              {animeDetails?.season && (
                <span>Saison : {animeDetails?.season}</span>
              )}
              {animeDetails?.episode && (
                <span>Episode : {animeDetails?.episode}</span>
              )}
            </StyledItemDivColumn>
          )}
        </StyledItemDivRow>
      </StyledItemDiv>
    </StyledItemDivContainer>
  );
};

export default Item;
