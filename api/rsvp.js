export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ ok: false, error: 'Method not allowed' });
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) return res.status(500).json({ ok: false, error: 'Telegram env vars are missing' });
  const { name = '', status = '', guests = '', comment = '' } = req.body || {};
  const text = `💍 Новое подтверждение присутствия\n\n👤 Имя: ${name}\n✅ Статус: ${status}\n👥 Количество гостей: ${guests || '1'}\n💬 Комментарий: ${comment || '—'}`;
  const tg = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ chat_id: chatId, text })
  });
  if (!tg.ok) return res.status(500).json({ ok: false, error: 'Telegram send failed' });
  return res.status(200).json({ ok: true });
}
