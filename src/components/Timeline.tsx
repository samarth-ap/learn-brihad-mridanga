export default function Timeline() {
  const events = [
    {
      year: "A few years ago",
      description: "LBM started as a small initiative at the Vedic Cultural Center (VCC) in Sammamish, Washington, teaching mridanga to local youth.",
    },
    {
      year: "Goal",
      description: "The goal was simple: to make learning mridanga accessible, structured, and fun—especially for younger devotees who wanted to deepen their connection to kirtan.",
    },
    {
      year: "Since then",
      description: "LBM has gradually grown through word of mouth and local efforts, reaching more students and building a network of young instructors and learners. It’s still a grassroots effort, run by students for students, with a focus on learning, teaching, and serving through music.",
    },
  ];

  return (
    <div className="timeline">
      {events.map((event, index) => (
        <div key={index} className="timeline-item">
          <h3 style={{ margin: "0 0 0.5rem 0", color: "#2c3e50" }}>{event.year}</h3>
          <p style={{ margin: 0 }}>{event.description}</p>
        </div>
      ))}
    </div>
  );
}
