export function shuffle(a: any[]): any[] {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function range(a: number, b?: number) {
  if (!b) return range(0, a);
  return a + Math.floor(Math.random() * (b - a))
}

export function rand(...args) {
  if (!args.length) return Math.random();
  if (args.length === 1 && Array.isArray(args[0])) {
    return rand.apply(null, args[0]);
  }

  return args[range(args.length)];
}

export function getDate() {
  const date = new Date();
  const months = [
    'Ene',
    'Feb',
    'Mar',
    'Abr',
    'May',
    'Jun',
    'Jul',
    'Ago',
    'Sep',
    'Oct',
    'Nov',
    'Dic',
  ];
  return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
}
