// Etkinlik verileri
const events = {
    kitap: {
        title: '📚 Kitap Arkadaşım Buluşması',
        date: '1 Şubat 2026 - Pazar',
        calendarDate: '20260201',
        desc: 'Küçük Prens kitabını birlikte okuyacak ve üzerine keyifli bir sohbet gerçekleştireceğiz. Kitabın bize verdiği mesajları konuşacak ve paylaşımlarda bulunacağız.',
        gif: 'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExdDA3ZG5nNHE0ZTFsdWl3d2QzZnBrOG14NHQ5N2xkNmFkNHM5bjV5aiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/15epGYaUWf2dkMT9ro/giphy.gif'
    },
    gonullu: {
        title: '🤝 Gönüllülerle Tanışma & 6 Şubat Anma',
        date: '8 Şubat 2026 - Pazar',
        calendarDate: '20260208',
        desc: 'Yeni gönüllülerimize Ahbap\'ı tanıtan bir sunum yapacağız. Ardından 6 Şubat depreminde hayatını kaybedenleri anacağız ve AFAD\'ın bizlere verdiği eğitim videosunu izleyeceğiz.',
        gif: 'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZmRkeHViM3Jsa2FrMW9kMXo2NzZpeWk4aGF3a21qcWdzemIxYWk3aiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/cHw1sFUAfZcZfcLjq9/giphy.gif'
    },
    kedi: {
        title: '🐱 Dünya Kediler Günü',
        date: '15 Şubat 2026 - Pazar',
        calendarDate: '20260215',
        desc: 'Geri dönüşüm malzemeleri kullanarak sokak hayvanlarına yuva yapacağız. Ayrıca ihtiyaç olan bölgelerde mama dağıtımı gerçekleştireceğiz.',
        gif: 'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExanV6ajc1cXZheWx5anYzYnJvMDlwcXJnZ2lncGNmcGFoMHBzcDRhcCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/W0VuY0dTxH9L6vLUJ2/giphy.gif'
    },
    orgu: {
        title: '🧶 Sevgiye İlmek',
        date: '21 Şubat 2026 - Cumartesi',
        calendarDate: '20260221',
        desc: 'Ramazan ayında iftar sonrası bir araya gelip çay eşliğinde örgü öreceğiz. Örülen ürünler ihtiyaç sahibi çocuklara gönderilecek.',
        gif: 'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZmF0NnQ5NGI0c2Zmem40dG8wcWUxeHkwMHI0bzhrcmE3YmRvdzZhdSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/S3sljkpl8p0CsGL0W5/giphy.gif'
    },
    quiz: {
        title: '🎮 Quiz Night - Oyun Gecesi',
        date: '28 Şubat 2026 - Cumartesi',
        calendarDate: '20260228',
        desc: 'Emojilerle şarkı tahmin edeceğiz, bilmeceler çözeceğiz ve eğlenceli oyunlarla dolu bir gece geçireceğiz. Hep birlikte eğleneceğiz!',
        gif: 'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExcnhlY29iOGV2eW0zbGxyN2VzbzRlYTBqMjVvemI2OHgzeDdjNTRoYiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/INzNh7BaMdc4Umxmvq/giphy.gif'
    }
};

let currentEventId = null;

// Modal fonksiyonları
function openModal(eventId) {
    currentEventId = eventId;
    const event = events[eventId];
    document.getElementById('modalTitle').textContent = event.title;
    document.getElementById('modalDate').textContent = event.date;
    document.getElementById('modalDesc').textContent = event.desc;

    const animDiv = document.getElementById('modalAnimation');
    animDiv.innerHTML = event.gif ? `<div class="modal-gif"><img src="${event.gif}" alt="Etkinlik animasyonu"></div>` : '';

    document.getElementById('modalOverlay').classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Google Calendar'a ekle
function addToGoogleCalendar() {
    if (!currentEventId) return;
    const event = events[currentEventId];
    const title = encodeURIComponent(event.title.replace(/[^\w\sığüşöçİĞÜŞÖÇ&-]/g, ''));
    const details = encodeURIComponent(event.desc);
    const location = encodeURIComponent('Tekirdağ');
    const startDate = event.calendarDate;
    const endDate = event.calendarDate;

    const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startDate}/${endDate}&details=${details}&location=${location}`;
    window.open(url, '_blank');
}

// Tüm etkinlikleri takvime ekle (.ics dosyası)
function addAllToCalendar() {
    let icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Ahbap Tekirdag//Subat 2026 Etkinlikleri//TR
CALSCALE:GREGORIAN
METHOD:PUBLISH
`;

    Object.values(events).forEach(event => {
        const title = event.title.replace(/[^\w\sığüşöçİĞÜŞÖÇ&-]/g, '').trim();
        const desc = event.desc.replace(/\n/g, '\\n');
        icsContent += `BEGIN:VEVENT
DTSTART;VALUE=DATE:${event.calendarDate}
DTEND;VALUE=DATE:${event.calendarDate}
SUMMARY:${title}
DESCRIPTION:${desc}
LOCATION:Tekirdağ
END:VEVENT
`;
    });

    icsContent += 'END:VCALENDAR';

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'Ahbap-Subat-2026-Etkinlikler.ics';
    link.click();
    URL.revokeObjectURL(link.href);
}

function closeModal(e) {
    if (!e || e.target === document.getElementById('modalOverlay')) {
        document.getElementById('modalOverlay').classList.remove('active');
        document.body.style.overflow = '';
    }
}


// Event listeners
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

document.addEventListener('DOMContentLoaded', () => {
    // Touch desteği
    document.querySelectorAll('.event').forEach(el => {
        el.addEventListener('touchend', function(e) {
            e.preventDefault();
            const eventId = this.getAttribute('onclick').match(/openModal\('(\w+)'\)/)[1];
            openModal(eventId);
        });
    });

    document.getElementById('modalOverlay').addEventListener('touchend', function(e) {
        if (e.target === this) closeModal();
    });

    document.querySelector('.modal-close').addEventListener('touchend', function(e) {
        e.preventDefault();
        closeModal();
    });
});
