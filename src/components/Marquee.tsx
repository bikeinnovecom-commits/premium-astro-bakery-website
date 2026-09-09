type Props = {
  items: string[];
  speed?: 'slow' | 'normal' | 'fast';
  reverse?: boolean;
  variant?: 'dark' | 'light' | 'gold';
  className?: string;
};

export default function Marquee({ items, speed = 'normal', reverse = false, variant = 'dark', className = '' }: Props) {
  const speedClass = speed === 'slow' ? 'slow' : speed === 'fast' ? 'fast' : '';
  const bg =
    variant === 'dark'
      ? 'bg-[#3b2617] text-[#f2d089]'
      : variant === 'gold'
      ? 'bg-gradient-to-r from-[#c89a4b] to-[#a77a2c] text-[#3b2617]'
      : 'bg-[#efe3cc] text-[#3b2617]';

  const list = [...items, ...items];

  return (
    <div className={`w-full overflow-hidden py-6 border-y border-[#a77a2c]/20 ${bg} ${className}`}>
      <div className={`marquee-track ${speedClass} ${reverse ? 'reverse' : ''}`}>
        {list.map((t, i) => (
          <span
            key={i}
            className="font-serif text-3xl md:text-5xl italic tracking-wide flex items-center gap-12"
          >
            {t}
            <span className="text-[#f2d089]/70 not-italic">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
