export interface CalendarEvent {
  title: string;
  description: string;
  location: string;
  startDate: string; // ISO string or specific format
  endDate: string;   // ISO string or specific format
}

export const generateGoogleCalendarUrl = (event: CalendarEvent): string => {
  const { title, description, location, startDate, endDate } = event;

  const formatDate = (dateStr: string) => {
    return dateStr.replace(/[-:.]/g, '');
  };

  const start = formatDate(startDate);
  const end = formatDate(endDate);

  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: title,
    details: description,
    location: location,
    dates: `${start}/${end}`,
  });

  return `https://calendar.google.com/calendar/render?${params.toString()}`;
};

export const downloadICSFile = (event: CalendarEvent) => {
  const { title, description, location, startDate, endDate } = event;

  const formatDate = (dateStr: string) => {
    return dateStr.replace(/[-:.]/g, '');
  };

  const start = formatDate(startDate);
  const end = formatDate(endDate);

  const icsContent = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Ordination Ceremony//TH',
    'CALSCALE:GREGORIAN',
    'BEGIN:VEVENT',
    `DTSTART:${start}`,
    `DTEND:${end}`,
    `SUMMARY:${title}`,
    `DESCRIPTION:${description}`,
    `LOCATION:${location}`,
    'END:VEVENT',
    'END:VCALENDAR'
  ].join('\r\n');

  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
  const link = document.createElement('a');
  link.href = window.URL.createObjectURL(blob);
  link.setAttribute('download', 'ordination-ceremony.ics');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
