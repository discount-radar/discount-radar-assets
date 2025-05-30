const translations = {
  en: {
    pageTitle: "Discount radar | Our Links",
    title: "STOP OVERPAYING",
    subtitle: "join my group and start saving for real",
    whatsapp: "Join the WhatsApp group<br><small>(105,000 members)</small>",
    telegram: "Join the Telegram group<br><small>(220,000 members)</small>",
    whatsappLink: "https://whatsapp.com/channel/0029VbAM7zB5q08XmcOKhX2T",
    telegramLink: "tg://join?invite=a1g1URzMFkAzZGFi"
  },
  es: {
    pageTitle: "Cazador de ofertas | Nuestros enlaces",
    title: "BASTA DE PAGAR MÁS CARO",
    subtitle: "únete a mi grupo y ahorra de verdad",
    whatsapp: "Únete al grupo de WhatsApp<br><small>(105 000 miembros)</small>",
    telegram: "Únete al grupo de Telegram<br><small>(220 000 miembros)</small>",
    whatsappLink: "https://whatsapp.com/channel/0029VbAM7zB5q08XmcOKhX2T",
    telegramLink: "tg://join?invite=a1g1URzMFkAzZGFi"
  },
  pt: {
    pageTitle: "Caçador de promoções | Nossos Links",
    title: "CHEGA DE PAGAR MAIS CARO",
    subtitle: "entre no meu grupo e economize de verdade",
    whatsapp: "Entre no grupo do WhatsApp<br><small>(105.000 membros)</small>",
    telegram: "Entre no grupo do Telegram<br><small>(220.000 membros)</small>",
    whatsappLink: "https://whatsapp.com/channel/0029VbAM7zB5q08XmcOKhX2T",
    telegramLink: "tg://join?invite=a1g1URzMFkAzZGFi"
  }
};

function detectLanguage() {
  const supportedLangs = Object.keys(translations);
  const browserLangs = navigator.languages || [navigator.language || 'en'];

  for (let lang of browserLangs) {
    const baseLang = lang.split('-')[0].toLowerCase();
    if (supportedLangs.includes(baseLang)) {
      return baseLang;
    }
  }
  return 'en';
}

function applyTranslations(lang) {
  document.documentElement.lang = lang;
  document.title = translations[lang].pageTitle;
  document.getElementById('title').textContent = translations[lang].title;
  document.getElementById('subtitle').textContent = translations[lang].subtitle;
  document.getElementById('whatsapp-text').innerHTML = translations[lang].whatsapp;
  document.getElementById('telegram-text').innerHTML = translations[lang].telegram;

  const whatsappBtn = document.getElementById('whatsapp-btn');
  const telegramBtn = document.getElementById('telegram-btn');
  whatsappBtn.dataset.link = translations[lang].whatsappLink;
  telegramBtn.dataset.link = translations[lang].telegramLink;
}

const detectedLang = detectLanguage();
applyTranslations(detectedLang);
