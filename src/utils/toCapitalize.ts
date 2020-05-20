export default function toCapitalize(text: string): string {
  const words = text.split(' ');
  const capitalizeWords = words.map(
    word => word.charAt(0).toUpperCase() + word.slice(1),
  );
  return capitalizeWords.join(' ');
}
