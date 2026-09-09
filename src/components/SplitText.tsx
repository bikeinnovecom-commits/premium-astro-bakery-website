type Props = {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
};

export default function SplitText({ text, className = '', delay = 0, stagger = 40 }: Props) {
  return (
    <span className={`split-letters ${className}`}>
      {text.split('').map((c, i) => (
        <span
          key={i}
          style={{ animationDelay: `${delay + i * stagger}ms` }}
        >
          {c === ' ' ? '\u00A0' : c}
        </span>
      ))}
    </span>
  );
}
