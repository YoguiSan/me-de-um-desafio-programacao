import React, { InputHTMLAttributes, useState } from 'react';
import {
  Form,
  Dropdown,
  Grid,
  Row,
  Column,
  Button,
} from 'carbon-components-react';
import {
  Delete16,
  DocumentUnknown32,
} from '@carbon/icons-react';

import getChallenge from './json';

import './index.scss';

interface TechnologyFormProps extends InputHTMLAttributes<HTMLInputElement> {
  setChallenge: Function,
}

const TechnologyForm:React.FC<TechnologyFormProps> = ({ setChallenge }) => {
  const [side, setSide] = useState('');
  const [language, setLanguage] = useState('');

  const sideItems = [{
    id: 'frontend',
    text: 'Front end',
  },{
    id: 'backend',
    text: 'Back end',
  }];
  
  const items = {
    frontend: [{
      id: 'react',
      text: 'React',
    },{
      id: 'angular',
      text: 'Angular',
    },{
      id: 'vue',
      text: 'Vue',
    }],
    backend: [{
      id: 'python',
      text: 'Python',
    }, {
      id: 'java',
      text: 'Java',
    }],
  };

  return(
    <Form id="technology-form">
      <Grid>
        <Row>
          <Column
            sm={12}
            lg={4}
          >
            <Dropdown
              ariaLabel="Linguagem/framework"
              id="side-selector"
              label="Selecione..."
              titleText="Back end/Front end"
              itemToString={(item) => (item ? item.text : '')}
              items={sideItems}
              onChange={({ selectedItem }) => setSide(selectedItem.id)}
            />
          </Column>
          <Column
            sm={12}
            lg={4}
          >
            <Dropdown
              ariaLabel="Linguagem/framework"
              id="language-selector"
              items={items[side] || []}
              label="Selecione linguagem/framework..."
              titleText="Linguagem/framework"
              itemToString={(item) => (item ? item.text : '')}
              onChange={({ selectedItem }) => setLanguage(selectedItem.id)}
            />
          </Column>
        </Row>
        <Row>
          <Column
            sm={12}
            lg={4}
          >
            <Button
              disabled={!(side && language)}
              onClick={() => setChallenge({})}
              renderIcon={Delete16}
              kind="danger"
              size="field"
            >
              Limpar
            </Button>
            <Button
              disabled={!(side && language)}
              onClick={() => setChallenge(getChallenge(side, language))}
              size="field"
              renderIcon={DocumentUnknown32}
            >
              Aceitar
            </Button>
          </Column>
          <Column
            sm={0}
            lg={8}
          />
        </Row>
        <Row>
          <Column sm={12} />
        </Row>
      </Grid>
    </Form>
  );
}

export default TechnologyForm;
