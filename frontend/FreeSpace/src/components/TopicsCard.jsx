import "./TopicsCard.css";

export default function TopicCard() {
  const tiopics = [
    "Tech",
    "Poltics",
    "Social",
    "Education",
    "MyOpinon",
    "Bored",
    "Sience",
    "Tech",
    "Poltics",
    "Social",
    "Education",
    "MyOpinon",
    "Bored",
    "Sience",
    "Tech",
    "Poltics",
    "Social",
    "Education",
    "MyOpinon",
    "Bored",
    "Sience",
  ];

  return (
    <div className="topics-screen">
      <div className="topics">
        {tiopics &&
          tiopics.map((i) => (
            <div key={i} className="tag-card">
              {i}
            </div>
          ))}
      </div>
    </div>
  );
}
