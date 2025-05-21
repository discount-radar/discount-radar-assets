const trackButtonClick = (platform) => {
  fbq('track', 'Lead', { content_name: platform });
};

const handleWhatsAppClick = (e) => {
  e.preventDefault();
  const link = e.currentTarget.dataset.link;
  trackButtonClick('Whatsapp');
  window.open(link, '_blank');
};

const handleTelegramClick = (e) => {
  e.preventDefault();
  const link = e.currentTarget.dataset.link;
  trackButtonClick('Telegram');
  window.location.href = link;
};

document.getElementById('whatsapp-btn')?.addEventListener('click', handleWhatsAppClick);
document.getElementById('telegram-btn')?.addEventListener('click', handleTelegramClick);
