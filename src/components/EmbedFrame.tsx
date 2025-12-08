type Props = {
  src: string;
  title: string;
  height?: number;
  invertColors?: boolean;
};

export default function EmbedFrame({
  src,
  title,
  height = 600,
  invertColors = false,
}: Props) {
  return (
    <div className={`embed-frame${invertColors ? " embed-frame--invert" : ""}`}>
      <iframe
        src={src}
        title={title}
        height={height}
        loading="lazy"
      />
    </div>
  );
}
