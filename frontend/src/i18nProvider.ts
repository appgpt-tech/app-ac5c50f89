//Source code generated by AppGPT (www.appgpt.tech)
import { mergeTranslations } from 'ra-core';
import polyglotI18nProvider from 'ra-i18n-polyglot';
import enOriginal from 'ra-language-english';
import frOriginal from 'ra-language-french';

const enResources = {
  resources: {
    User: {
      name: 'User',
      fields: {
        username: 'Username',
        email: 'Email',
        password: 'Password',
        balance: 'Balance',
        winLossRecord: 'Win Loss Record',
        id: 'id',
      },
    },
    Game: {
      name: 'Game',
      fields: {
        gameName: 'Game Name',
        gameType: 'Game Type',
        rulesDescription: 'Rules Description',
        numberOfPlayers: 'Number Of Players',
        difficultyLevel: 'Difficulty Level',
        id: 'id',
      },
    },
  },
};
const frResources = {
  resources: {
    User: {
      name: 'User (fr)',
      fields: {
        username: 'Username (fr)',
        email: 'Email (fr)',
        password: 'Password (fr)',
        balance: 'Balance (fr)',
        winLossRecord: 'Win Loss Record (fr)',
        id: 'id',
      },
    },
    Game: {
      name: 'Game (fr)',
      fields: {
        gameName: 'Game Name (fr)',
        gameType: 'Game Type (fr)',
        rulesDescription: 'Rules Description (fr)',
        numberOfPlayers: 'Number Of Players (fr)',
        difficultyLevel: 'Difficulty Level (fr)',
        id: 'id',
      },
    },
  },
};

const en = mergeTranslations(enOriginal, enResources);
const fr = mergeTranslations(frOriginal, frResources);

const translations = { en, fr };
export const i18nProvider = polyglotI18nProvider(
  (locale) => translations[locale],
  'en', //default locale
  [
    { locale: 'en', name: 'English' },
    { locale: 'fr', name: 'Français' },
  ],
);
