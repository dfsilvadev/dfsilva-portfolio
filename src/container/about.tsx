import {
  About,
  Base,
  DottedSquare,
  Grid,
  PanelSkill,
  Square
} from "components";

export default function AboutContainer() {
  return (
    <Base>
      <Base.Container>
        <Base.Grid />

        <About>
          <Grid>
            <About.Left>
              <PanelSkill
                title="Front-End Developer"
                imageURL="/img/front-end.svg"
                brPosition="tr"
              />
              <PanelSkill
                title="Artista de Pixel"
                imageURL="/img/pixel-perfect.svg"
              />
              <PanelSkill
                title="Prototipagem & Wireframe"
                imageURL="/img/wireframe.svg"
                brPosition="bl"
              />

              <Square />
              <DottedSquare />
            </About.Left>

            <About.Right>
              <About.Description>
                Olá, meu nome é <em>Daniel Silva</em> e moro em São Paulo - SP.
              </About.Description>

              <About.Description>
                Meu trabalho gira em torno da criação de experiências
                interativas únicas com tecnologia baseada em navegador.
                Atualmente desenvolvo em <em>Reactjs</em> / <em>Nextjs</em>.
              </About.Description>

              <About.Description>
                Adoro escrever código, mas também tenho experiência em design
                UX. Costumo lidar com projetos desde a idealização e arquitetura
                até a implementação e testes.
              </About.Description>

              <About.Description>
                Desenvolver tornou-se um hobby favorito e atualmente pratico
                esse hobby no <em>Grupo Boticário</em>.
              </About.Description>

              <About.Description>
                Obrigado por ler um pouco sobre mim. Fico feliz em conversar e
                trocar experiências.
              </About.Description>

              <About.Bars />
            </About.Right>
          </Grid>
        </About>
      </Base.Container>
    </Base>
  );
}
