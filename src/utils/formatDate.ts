export function formatDate(date: string): string {
  const initialDate = new Date(date);
  const formatedDate = initialDate.toLocaleDateString('pt-BR', {
    timeZone: 'America/Sao_Paulo',
  });
  return formatedDate;
}
