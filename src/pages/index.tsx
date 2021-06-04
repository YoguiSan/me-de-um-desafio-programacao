import React, { useState } from 'react';
import {
  Tile,
  Grid,
  Row,
  Column,
} from 'carbon-components-react';

import TechnologyForm from '../components/TechnologyForm';

import './index.scss';

const Index:React.FC = () => {
  const [challenge, setChallenge] = useState({});

  return (
    <main id="index">
      <TechnologyForm
        setChallenge={setChallenge}
      />
      <Grid>
        <Row>
          {
            challenge && Object.keys(challenge).length > 0
            && Object.keys(challenge).map(key => (
              <Column
                sm={12}
                lg={4}
              >
                <Tile>
                  <p>
                    <b>{key}</b>
                  </p>
                  <p>{challenge[key]}</p>
                </Tile>
              </Column>
            ))
          }
        </Row>
      </Grid>
    </main>
  );
};

export default Index;
