// لینکەکانی سۆشیاڵ میدیا
// ئەم لینکانە بگۆڕە بەپێی لینکەکانی خۆت

const socialLinks = {
tiktok: ‘https://www.tiktok.com/@shblood’,
telegram: ‘https://t.me/shblood’,
footerTelegram: ‘https://t.me/shblood’
};

// دانانی لینکەکان
document.addEventListener(‘DOMContentLoaded’, function() {
// TikTok Link
const tiktokLink = document.getElementById(‘tiktok-link’);
if (tiktokLink) {
tiktokLink.href = socialLinks.tiktok;
}

```
// Telegram Link
const telegramLink = document.getElementById('telegram-link');
if (telegramLink) {
    telegramLink.href = socialLinks.telegram;
}

// Footer Telegram Link
const footerTelegramLink = document.getElementById('footer-telegram-link');
if (footerTelegramLink) {
    footerTelegramLink.href = socialLinks.footerTelegram;
}

// ئەنیمەیشنی زیادە بۆ لینکەکان
const allLinks = document.querySelectorAll('.social-link');
allLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        // کلیک ئیفێکت
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = '';
        }, 200);
    });
});

// ئەنیمەیشنی چوونەژوورەوە بۆ ئیلیمێنتەکان
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
});

// ئامادەکردنی ئیلیمێنتەکان بۆ ئەنیمەیشن
const animatedElements = document.querySelectorAll('.social-item, .welcome-text, .join-message');
animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});
```

});

// فەنکشنێک بۆ گۆڕینی لینکەکان بە ئاسانی
function updateLink(platform, newUrl) {
socialLinks[platform] = newUrl;

```
switch(platform) {
    case 'tiktok':
        document.getElementById('tiktok-link').href = newUrl;
        break;
    case 'telegram':
        document.getElementById('telegram-link').href = newUrl;
        break;
    case 'footerTelegram':
        document.getElementById('footer-telegram-link').href = newUrl;
        break;
}
```

}

// نموونەی بەکارهێنان:
// updateLink(‘tiktok’, ‘https://www.tiktok.com/@your_account’);
// updateLink(‘telegram’, ‘https://t.me/your_channel’);
// updateLink(‘footerTelegram’, ‘https://t.me/your_channel’);