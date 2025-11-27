type Props = {
  src: string;
  title: string;
  height?: number;
};

export default function EmbedFrame({ src, title, height = 600 }: Props) {
  return (
    <div className="embed-frame">
      <iframe
        src={src}
        title={title}
        height={height}
        loading="lazy"
      />
    </div>
  );
}
