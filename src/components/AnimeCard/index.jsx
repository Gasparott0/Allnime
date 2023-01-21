import { StyledImg, StyledLink, StyledTypography } from "./Styled";

const AnimeCard = ({ anime }) => {
  return (
    <StyledLink to={`/anime/${anime.mal_id}`}>
      <StyledImg src={anime.images.jpg.image_url} alt={anime.title} />
      <StyledTypography>{anime.title}</StyledTypography>
    </StyledLink>
  );
};

export default AnimeCard;
