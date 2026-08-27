const SIZE = 21;

function seededRandom(seed: number) {
  let s = seed;
  return () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
}

function isFinderPattern(x: number, y: number) {
  const corners = [
    [0, 0],
    [SIZE - 7, 0],
    [0, SIZE - 7],
  ];
  return corners.some(([cx, cy]) => x >= cx && x < cx + 7 && y >= cy && y < cy + 7);
}

function finderValue(x: number, y: number, cx: number, cy: number) {
  const lx = x - cx;
  const ly = y - cy;
  const isBorder = lx === 0 || lx === 6 || ly === 0 || ly === 6;
  const isCore = lx >= 2 && lx <= 4 && ly >= 2 && ly <= 4;
  return isBorder || isCore;
}

export interface FakeQrCodeProps {
  size?: number;
  seed?: number;
}

/** QR fictício e determinístico (não escaneável) só para fins de protótipo visual. */
export function FakeQrCode({ size = 220, seed = 42 }: FakeQrCodeProps) {
  const rand = seededRandom(seed);
  const cell = size / SIZE;
  const corners: [number, number][] = [
    [0, 0],
    [SIZE - 7, 0],
    [0, SIZE - 7],
  ];

  const cells: boolean[] = [];
  for (let y = 0; y < SIZE; y++) {
    for (let x = 0; x < SIZE; x++) {
      if (isFinderPattern(x, y)) {
        const [cx, cy] = corners.find(([fx, fy]) => x >= fx && x < fx + 7 && y >= fy && y < fy + 7)!;
        cells.push(finderValue(x, y, cx, cy));
      } else {
        cells.push(rand() > 0.5);
      }
    }
  }

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} role="img" aria-label="Código QR do Pix">
      <rect width={size} height={size} fill="#ffffff" />
      {cells.map((on, i) => {
        if (!on) return null;
        const x = (i % SIZE) * cell;
        const y = Math.floor(i / SIZE) * cell;
        return <rect key={i} x={x} y={y} width={cell} height={cell} fill="#000000" />;
      })}
    </svg>
  );
}
