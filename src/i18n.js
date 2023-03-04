import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const translationsEn = {home: 'Home', news: 'News', profile: 'Profile', logIn: 'Log in', logOut: 'Log out'}
const translationsUa = {home: 'Головна', news: 'Новини', profile: 'Профіль', logIn: 'Вхід', logOut: 'Вийти'}

i18n
  .use(initReactI18next)
  .init({
    resources: {
                  en: {translation: translationsEn},
                  ua: {translation: translationsUa}
              },
    fallbackLng: 'en',
    debug: true,
  });


export default i18n;