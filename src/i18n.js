import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "Nutrient Deficiency": "Nutrient Deficiency",
      "Present Content": "Present Content",
      "Standard": "Standard",
      "Deficiency": "Deficiency",
      "Boron": "Boron",
      "Calcium": "Calcium",
      "Iron": "Iron",
      "Potassium": "Potassium"
    }
  },
  kn: {
    translation: {
      "Nutrient Deficiency": "ಪೋಷಕಾಂಶ ಕೊರತೆ",
      "Present Content": "ಪ್ರಸ್ತುತ ವಿಷಯ",
      "Standard": "ಮಾನಕ",
      "Deficiency": "ಕೊರತೆ",
      "Boron": "ಬೋರಾನ್",
      "Calcium": "ಕ್ಯಾಲ್ಸಿಯಮ್",
      "Iron": "ಐರನ್",
      "Potassium": "ಪೊಟ್ಯಾಸಿಯಮ್"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // default language
    keySeparator: false,
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
