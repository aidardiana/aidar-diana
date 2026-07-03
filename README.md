# Aidar & Diana — Wedding Site

## Как загрузить на GitHub
1. Распакуй ZIP.
2. Открой репозиторий `aidar-diana` на GitHub.
3. Нажми **Add file → Upload files**.
4. Перетащи ВСЕ файлы и папки из распакованной папки, не сам ZIP.
5. Нажми **Commit changes**.

## Как подключить Vercel
1. Зайди на vercel.com.
2. Add New → Project.
3. Import Git Repository → `aidar-diana`.
4. Deploy.

## Чтобы RSVP отправлялся в Telegram
В Vercel открой проект → Settings → Environment Variables и добавь:

- TELEGRAM_BOT_TOKEN = новый токен от BotFather
- TELEGRAM_CHAT_ID = 1980321892

После этого нажми Redeploy.
