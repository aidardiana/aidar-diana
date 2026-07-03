const weddingDate = new Date('2026-08-16T16:00:00+06:00');
const $ = (id) => document.getElementById(id);
function updateTimer(){
  const diff = weddingDate - new Date();
  const t = Math.max(0, diff);
  const days = Math.floor(t / 86400000);
  const hours = Math.floor((t % 86400000) / 3600000);
  const minutes = Math.floor((t % 3600000) / 60000);
  const seconds = Math.floor((t % 60000) / 1000);
  $('days').textContent = String(days).padStart(2,'0');
  $('hours').textContent = String(hours).padStart(2,'0');
  $('minutes').textContent = String(minutes).padStart(2,'0');
  $('seconds').textContent = String(seconds).padStart(2,'0');
}
updateTimer(); setInterval(updateTimer,1000);

const music = $('music');
music.volume = 0.28;
$('musicBtn').addEventListener('click', async () => {
  try{
    if(music.paused){ await music.play(); $('musicBtn').textContent='❚❚ Пауза'; }
    else{ music.pause(); $('musicBtn').textContent='♫ Музыка'; }
  }catch(e){ $('musicBtn').textContent='Нажмите ещё раз'; }
});

$('rsvpForm').addEventListener('submit', async (e)=>{
  e.preventDefault();
  const form = e.currentTarget;
  const msg = $('formMessage');
  const data = Object.fromEntries(new FormData(form).entries());
  msg.textContent = 'Отправляем...';
  try{
    const res = await fetch('/api/rsvp', {
      method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(data)
    });
    if(!res.ok) throw new Error('request failed');
    msg.textContent = 'Спасибо! Ваш ответ отправлен ❤️';
    form.reset();
  }catch(err){
    msg.textContent = 'Пока сайт не загружен на Vercel, Telegram-отправка не работает. После публикации всё заработает.';
  }
});
