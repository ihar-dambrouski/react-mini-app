import { IMAGES } from "../../../shared/lib/constants/images";
import Button from "../../../shared/ui/button";
import { useRandomisePhrases } from "../../lib/catHooks/useRandomisePhrases";
import {
  Container,
  StyledContentContainer,
  StyledImage,
  StyledTitle,
} from "./styled";

const Cat = () => {
  const { phrase, handleChangePhrase, isLoading } = useRandomisePhrases();

  return (
    <Container>
      <div>
        <StyledTitle>{phrase}</StyledTitle>
      </div>
      <StyledContentContainer>
        <StyledImage src={IMAGES.cat}></StyledImage>
        <Button
          title="Предсказать"
          isLoading={isLoading}
          onClick={handleChangePhrase}
        />
      </StyledContentContainer>
    </Container>
  );
};

export default Cat;
