import React from 'react';
import { DiAndroid, DiApple, DiFirebase, DiHtml5, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      {/* Já trabalhei e estudei diversas tecnologias para desenvolvimento tanto Web, quanto Mobile e Desktop. <br /> */}
      I've worked with a range of technologies in the web development world.
      From backend to mobile and frontend.
    </SectionText>
    <List>
      <ListItem>
        <DiHtml5 size="3rem" />
        <ListContainer>
          <ListTitle>Frontend</ListTitle>
          <ListParagraph>
            Experience with <br />
            HTML, CSS and Javascript <br />
            React.js <br />
            Vue.js <br />
            Sass <br />
            Bootstrap <br />
            Figma <br />
            Git <br />
            Git Flow <br />  
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Backend</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node.js <br />
            Express.js <br />
            Typescript <br />
            PHP <br />
            Django <br />
            Database NoSQL (MongoDB)<br />
            Database SQL (MySQL, PostgreSQL, MariaDB)<br />
            AWS Cloud <br />
            Docker <br />
            API Restful <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiAndroid size="3rem" />
        <ListContainer>
          <ListTitle>Mobile</ListTitle>
          <ListParagraph>
            Experience with <br />
            Flutter <br />
            ReactNative <br/>
            Xamarim
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
