import getFrontendChallenge from './frontend';
import getBackendChallenge from './backend';

const getChallenge = (side, language) => {
  switch (side) {
    case 'frontend':
      return getFrontendChallenge(language);
    case 'backend':
      return getBackendChallenge(language);
    default:
      break;
  }
}

export default getChallenge;
