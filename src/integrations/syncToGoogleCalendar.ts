import { google } from 'googleapis'

export const syncToGoogleCalendar = async ({
  doc,
  operation,
}: {
  doc: any
  operation: 'create' | 'update'
}) => {
  // Configura a autenticação (idealmente via variáveis de ambiente)
  const auth = new google.auth.GoogleAuth({
    keyFile: './caminho-para-seu-json-de-credenciais.json',
    scopes: ['https://www.googleapis.com/auth/calendar'],
  })

  const calendar = google.calendar({ version: 'v3', auth })

  const event = {
    summary: doc.title,
    description: doc.description,
    start: { dateTime: new Date(doc.startDate).toISOString() },
    end: { dateTime: new Date(doc.endDate).toISOString() },
  }

  if (operation === 'create') {
    await calendar.events.insert({
      calendarId: 'primary', // ou o ID da sua agenda
      requestBody: event,
    })
  }
  // Você também pode adicionar lógica para 'update' usando o eventId
}
