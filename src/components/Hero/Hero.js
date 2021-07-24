import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Bem vindo <br/>Ao meu portfolio pessoal. <br/>
        Welcome to <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        
      </SectionText>
      <Button onClick={() => window.location = 'https://github.com/WillyRenzo'}>
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;