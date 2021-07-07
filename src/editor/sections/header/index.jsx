import { Button, Form } from '@abc/protonpack'
import './styles.css'

import logo from './logo.png'

export const Header = ({ content, settings, sections }) => (
  <section className="sectionHeader">
    <img className="sectionHeaderLogo" src={logo} alt="logo" />
    <Form.ActionsLayout>
      {sections.map(
        ({ type }) =>
          type !== 'header' && (
            <Button
              mode="transparent"
              color="white"
              className="sectionHeaderButton"
              key={type}
              data-text={type}
            >
              {type}
            </Button>
          ),
      )}
      <Button
        mode="transparent"
        color="white"
        className="sectionHeaderButton"
        data-text="Already A Member"
      >
        Already A Member
      </Button>
    </Form.ActionsLayout>
  </section>
)

export { HeaderContentForm } from './contentForm'
export { HeaderSettingsForm } from './settingsForm'
