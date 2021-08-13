import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        {/* Bem vindo <br/>Ao meu portfolio pessoal. <br/> */}
        Welcome to <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        {/* Desenvolvedor FullStack com proatividade, empenho, determinação, profissionalismo, capacidade técnica, facilidade de adaptação ao trabalho em equipe e o mais importante, sede de conhecimento. <br /> */}
        FullStack developer with proactivity, commitment, determination, professionalism, technical capacity, ease of adaptation to teamwork and most importantly, thirst for knowledge
      </SectionText>
      <Button onClick={() => window.location = 'https://github.com/WillyRenzo'}>
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;