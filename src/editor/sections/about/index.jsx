import { Button, Text, Header } from '@abc/protonpack'
import { SectionBackground } from '../../components/SectionBackground'
import './styles.css'

export const About = ({ content, settings }) => (
  <section className="sectionAbout">
    <SectionBackground src={content.background} />
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
)

export { AboutContentForm } from './contentForm'
export { AboutSettingsForm } from './settingsForm'
