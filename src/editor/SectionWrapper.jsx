import './styles.css'
import { Button, ButtonGroup, Form, IconGear, IconEdit, IconPlus, Menu } from '@abc/protonpack'

import { SECTION_INITIAL_DATA } from './constants'

export const SectionWrapper = ({
  sectionsLength,
  index,
  children,
  removeSection,
  moveSectionUp,
  moveSectionDown,
  openContentDrawer,
  addSection,
}) => {
  return (
    <div style={{ gridArea: index + 1 }} className="sectionContainer">
      {children}
      <div className="topButtons">
        <Form.ActionsLayout>
          <Button
            abcId="settings"
            rounded
            size="medium"
            mode="secondary"
            style={{ backgroundColor: 'white' }}
          >
            <IconGear />
            Settings
          </Button>
          <Button abcId="edit" rounded size="medium" onClick={() => openContentDrawer(index)}>
            <IconEdit />
            Content
          </Button>
        </Form.ActionsLayout>
        <Form.ActionsLayout>
          <ButtonGroup
            abcId="sectionButtons"
            rounded
            buttons={[
              { icon: 'copy', key: '1', abcId: 'button1', size: 'medium' },
              {
                icon: 'trash',
                key: '2',
                abcId: 'button2',
                onClick: () => removeSection(index),
                size: 'medium',
              },
              {
                icon: 'chevron-down-heavy',
                key: '3',
                abcId: 'button3',
                size: 'medium',
              },
            ]}
          />

          <ButtonGroup
            abcId="sectionButtons"
            rounded
            buttons={[
              {
                icon: 'arrow-down',
                key: '0',
                abcId: 'button0',
                onClick: () => moveSectionDown(index),
                disabled: index === sectionsLength - 1,
                size: 'medium',
              },
              {
                icon: 'arrow-up',
                key: '1',
                abcId: 'button1',
                onClick: () => moveSectionUp(index),
                disabled: index === 0,
                size: 'medium',
              },
            ]}
          />
        </Form.ActionsLayout>
      </div>

      <Menu>
        <Menu.Button className="addButton" abcId="add" rounded size="medium">
          <IconPlus />
        </Menu.Button>
        <Menu.List portal={false}>
          <Menu.Item onSelect={() => addSection(SECTION_INITIAL_DATA.header, index + 1)}>
            Header
          </Menu.Item>
          <Menu.Item onSelect={() => addSection(SECTION_INITIAL_DATA.about, index + 1)}>
            About
          </Menu.Item>
        </Menu.List>
      </Menu>
    </div>
  )
}
