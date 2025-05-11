import styles from "./Card.module.css";

import podcastImg from "../../../assets/images/Podcast.jpg";
import marketingIntelImg from "../../../assets/images/marketing-intelligence.png";
import snapChatImg from "../../../assets/images/Snapchat.png";

//const array of objects
const newsCards = [
  {
    id: 1,
    img: podcastImg,
    title: "Marketing Association NZ Podcast",
    subtitle: "How can skills gap in marketing effectiveness be fixed?",
  },
  {
    id: 2,
    img: marketingIntelImg,
    title: "Can we talk?",
    subtitle: "Impact of conversational data on marketing intelligence",
  },
  {
    id: 3,
    img: snapChatImg,
    title: "AI-Powered Snap Ads",
    subtitle: "Snapchat rolls out AI-powered Ad Updates",
  },
];
//map the card using the array

export default function Card() {
  return (
    <div className={styles.cardsContainer}>
      {newsCards.map(({ id, img, title, subtitle }) => (
        <div key={id} className={styles.card}>
          <img src={img} alt="news-card-image" />
          <div className={styles.cardTextContainer}>
            <h4>{title}</h4>
            <h5>{subtitle}</h5>
          </div>
        </div>
      ))}
    </div>
  );
}
