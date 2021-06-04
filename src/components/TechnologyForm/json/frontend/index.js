import reactOptions from './react/RandomAttributes.json';
import angularOptions from './angular/RandomAttributes.json';
import vueOptions from './vue/RandomAttributes.json';

import { getRandomChallenge } from '../../../../utils/challenges';

const Frontend = (target) => {
  const react = {
    attributes: getRandomChallenge(reactOptions),
  };
  
  const angular = {
    attributes: getRandomChallenge(angularOptions),
  };
  
  const vue = {
    attributes: getRandomChallenge(vueOptions),
  };
  
  const finalResult = {
    react,
    angular,
    vue,
  };

  return finalResult[target].attributes;
};

export default Frontend;
