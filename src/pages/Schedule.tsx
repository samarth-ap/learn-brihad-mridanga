import EmbedFrame from "../components/EmbedFrame";

const CALENDAR_URL = import.meta.env.VITE_CALENDAR_EMBED_URL || "";

export default function Schedule() {
  return (
    <main>
      <h1>Class Schedule</h1>
      <EmbedFrame src={CALENDAR_URL} title="Calendar" height={600} />
    </main>
  );
}
