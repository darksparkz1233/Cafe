    const modal = document.getElementById('feedbackModal');
    const openBtn = document.getElementById('feedbackBtn');
    const closeBtn = document.getElementById('closeModal');
    const form = document.getElementById('feedbackForm');

    openBtn.onclick = () => modal.style.display = 'flex';
    closeBtn.onclick = () => modal.style.display = 'none';
    window.onclick = (e) => { if (e.target === modal) modal.style.display = 'none'; };

    form.onsubmit = (e) => {
      e.preventDefault();
      const data = Object.fromEntries(new FormData(form).entries());
      console.log('Отправка данных:', data);
      alert('Спасибо! Форма отправлена.');
      form.reset();
      modal.style.display = 'none';
    };