import javaOptions from './java/RandomAttributes.json';
import nodeOptions from './node/RandomAttributes.json';
import pythonOptions from './python/RandomAttributes.json';

import { getRandomChallenge } from '../../../../utils/challenges';

const Backend = (target) => {
  const java = {
    attributes: getRandomChallenge(javaOptions),
  };
  
  const node = {
    attributes: getRandomChallenge(nodeOptions),
  };
  
  const python = {
    attributes: getRandomChallenge(pythonOptions),
  };
  
  const finalResult = {
    java,
    node,
    python,
  };

  return finalResult[target].attributes;
};

export default Backend;
