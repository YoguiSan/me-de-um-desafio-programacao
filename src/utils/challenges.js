import { obterElementoAleatorioArray } from 'formatadores';

export const getRandomChallenge = (options) => {
  let attributes = {};

  Object.keys(options).map(key => attributes[key] = obterElementoAleatorioArray(options[key]));

  return attributes;
};