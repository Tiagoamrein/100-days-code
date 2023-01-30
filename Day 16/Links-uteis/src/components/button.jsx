import { Container } from "./button-style";

export function Button ({title}, ...rest){

  return(
    <Container type="button" >
      {title}
    </Container>

  )
}
