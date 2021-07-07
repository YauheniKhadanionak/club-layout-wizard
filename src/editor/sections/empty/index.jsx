import { IconPlus, EmptyStateIcon, Menu } from '@abc/protonpack'
import { SECTION_INITIAL_DATA } from '../../constants'

export const Empty = ({ addSection }) => {
  return (
    <section style={{ height: '20rem', display: 'grid', placeItems: 'center' }}>
      <div
        style={{
          display: 'grid',
          gridAutoFlow: 'column',
          gridGap: '4rem',
          alignItems: 'center',
        }}
      >
        <EmptyStateIcon />
        <Menu>
          <Menu.Button rounded>
            <IconPlus />
            Add New Section
          </Menu.Button>
          <Menu.List position="matchWidth" className="menuList">
            {Object.values(SECTION_INITIAL_DATA).map(section => (
              <Menu.Item key={section.type} onSelect={() => addSection(section)}>
                {section.type}
              </Menu.Item>
            ))}
          </Menu.List>
        </Menu>
      </div>
    </section>
  )
}
