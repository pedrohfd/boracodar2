import {
  Button,
  Code,
  Container,
  GifButton,
  Image,
  LeftSide,
  Price,
  RightSide,
  Title,
} from './styles'

export const Home = () => {
  return (
    <Container>
      <LeftSide>
        <GifButton src='./360.svg' />
        <Image src='./Sofa.png' />
      </LeftSide>
      <RightSide>
        <Code>CÓDIGO: 42404</Code>

        <Title>Sofá Margot II - Rosé</Title>

        <Price>R$ 4.000</Price>

        <Button>Adicionar à cesta</Button>
      </RightSide>
    </Container>
  )
}
