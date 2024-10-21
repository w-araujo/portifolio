import React from "react";
import {
  Container,
  LeftSide,
  Main,
  RightSide,
  CarouselContainer,
  Items,
  Entry,
  Faders,
  LeftFade,
  RightFade,
  EntryFinal,
} from "./styles";
import { Nav } from "../../components/Nav";

import pright from "../../assets/back-right.png";
import Rabbit from "../../assets/carousel/rabbit.png";
import Node from "../../assets/carousel/node.png";
import Jest from "../../assets/carousel/jest.png";
import Postgres from "../../assets/carousel/postgres.png";
import Docker from "../../assets/carousel/docker.png";
import TS from "../../assets/carousel/ts.png";
import Mongo from "../../assets/carousel/mongo.png";
import Blip from "../../assets/carousel/blip.png";

const HomePage: React.FC = () => {
  return (
    <Container>
      <Nav />
      <Main>
        <LeftSide>
          <h1>Olá, sou Wesley</h1>
          <h2>
            Um <strong>software developer</strong>, e amo
          </h2>
          <h2>estudar tecnologias. ❤️</h2>
        </LeftSide>
        <RightSide>
          <img src={pright} alt="tec" />
        </RightSide>
      </Main>

      <CarouselContainer>
        <Faders>
          <LeftFade />
          <RightFade />
        </Faders>
        <Items>
          <Entry>
            <img src={Rabbit} alt="logo rabbitmq" />
          </Entry>
          <Entry>
            <img src={Node} alt="logo node" />
          </Entry>
          <Entry>
            <img src={Jest} alt="logo jest" />
          </Entry>
          <Entry>
            <img src={Postgres} alt="logo postgres" />
          </Entry>
          <Entry>
            <img src={Docker} alt="logo docker" />
          </Entry>
          <Entry>
            <img src={TS} alt="logo typescript" />
          </Entry>
          <Entry>
            <img src={Mongo} alt="logo mongo" />
          </Entry>
          <EntryFinal>
            <img src={Blip} width={97} alt="logo blip" />
          </EntryFinal>
        </Items>
      </CarouselContainer>
    </Container>
  );
};

export { HomePage };
