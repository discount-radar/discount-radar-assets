const trackButtonClick = (platform) => {
  if (typeof fbq !== "undefined") {
    try {
      fbq('track', 'Lead', { content_name: platform });
    } catch (e) {
      console.warn("Failed to track button click:", e);
    }
  }
};

const handleWhatsAppClick = (e) => {
  e.preventDefault();
  const link = e.currentTarget.dataset.link;
  trackButtonClick('WhatsApp');
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
