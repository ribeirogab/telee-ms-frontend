export default function getInitialLetters(fullName: string): string {
  const nameSplited = fullName.split(' ');
  const firstName = nameSplited[0];
  const lastName = nameSplited[nameSplited.length - 1];

  return `${firstName[0]}${lastName[0]}`.toUpperCase();
}
