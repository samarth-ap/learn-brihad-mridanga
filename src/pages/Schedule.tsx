import EmbedFrame from "../components/EmbedFrame";

const RAW_CALENDAR_URL = import.meta.env.VITE_CALENDAR_EMBED_URL || "";

function withDarkCalendarParams(url: string) {
  if (!url) return "";

  const separator = url.includes("?") ? "&" : "?";

  // bgcolor = dark background, color = highlight color
  const params =
    "bgcolor=%23131313&color=%23f1c232&ctz=America%2FLos_Angeles";

  return `${url}${separator}${params}`;
}

const CALENDAR_URL = withDarkCalendarParams(RAW_CALENDAR_URL);

export default function Schedule() {
  return (
    <main>
      <h1>Class Schedule</h1>
      <EmbedFrame
        src={CALENDAR_URL}
        title="Calendar"
        height={600}
        invertColors
      />
    </main>
  );
}
