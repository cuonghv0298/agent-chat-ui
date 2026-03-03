export function WisdomMindLogoSVG({
  className,
  width,
  height,
}: {
  width?: number;
  height?: number;
  className?: string;
}) {
  return (
    <img
      src="/logo.svg"
      alt="WisdomMind"
      width={width}
      height={height}
      className={className}
    />
  );
}
