import { Button, Text, Header } from "@abc/protonpack";
import "./styles.css";

export const About = ({ content, settings }) => (
  <section style={{ height: settings.height }} className="sectionAbout">
    <div className="sectionAboutContent">
      <Header className="sectionAboutTitle" color="cardPrimary">
        {content.title}
      </Header>
      <br />
      <br />
      <br />
      <Text className="sectionAboutDescription" color="cardPrimary">
        {content.description}
      </Text>
      <br />
      <br />
      <br />
      <Button className="sectionAboutButton" uppercase>
        Join
      </Button>
    </div>
  </section>
);

export { AboutContentForm } from "./contentForm";
