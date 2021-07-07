import './styles.css'
import { useEffect, useState } from 'react'
import { SectionWrapper } from './SectionWrapper'
import {
  Insta,
  Footer,
  About,
  AboutContentForm,
  AboutSettingsForm,
  Empty,
  Header,
  HeaderContentForm,
  HeaderSettingsForm,
} from './sections'
import { SECTION_INITIAL_DATA } from './constants'
import { useParams } from 'react-router-dom'

import { Drawer } from '@abc/protonpack'
import { Feedback } from './sections/feedback'
import { Location } from './sections/location'
import Promo from './sections/promo'
import { Join } from './sections/join'
import { FormSkeleton } from './components/FormSkeleton'

export const Editor = props => {
  const { mode } = useParams()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => setLoading(false), 500)
  }, [])

  const [isContentDrawerOpen, setContentDrawerOpen] = useState(false)
  const [isSettingsDrawerOpen, setSettingsDrawerOpen] = useState(false)

  const [currentSectionIndex, setCurrentSectionIndex] = useState(undefined)
  const [sections, setSections] = useState(Object.values(SECTION_INITIAL_DATA))

  const openSettingsDrawer = index => {
    setCurrentSectionIndex(index)
    setSettingsDrawerOpen(true)
  }

  const openContentDrawer = index => {
    setCurrentSectionIndex(index)
    setContentDrawerOpen(true)
  }

  const closeSettingsDrawer = () => {
    setSettingsDrawerOpen(false)
  }

  const closeContentDrawer = () => {
    setContentDrawerOpen(false)
  }

  const addSection = (section, index) => {
    setSections([...sections.slice(0, index), section, ...sections.slice(index + 1)])
  }

  const copySection = index => {
    setSections([...sections.slice(0, index + 1), sections[index], ...sections.slice(index + 1)])
  }

  const removeSection = index => {
    setSections([...sections.slice(0, index), ...sections.slice(index + 1)])
  }

  const updateSection = (section, index) => {
    setSections([
      ...sections.slice(0, index),
      { ...sections[index], ...section },
      ...sections.slice(index + 1),
    ])
  }

  const moveSectionUp = index => {
    setSections([
      ...sections.slice(0, index - 1),
      sections[index],
      sections[index - 1],
      ...sections.slice(index + 1),
    ])
  }

  const moveSectionDown = index => {
    setSections([
      ...sections.slice(0, index),
      sections[index + 1],
      sections[index],
      ...sections.slice(index + 2),
    ])
  }

  const SettingsForm = getSettingsForm(sections[currentSectionIndex])
  const ContentForm = getContentForm(sections[currentSectionIndex])

  return (
    <div
      className={`editor${loading ? ' loading' : ''}` + (mode === 'preview' ? ' isPreview' : '')}
    >
      {sections.map((section, index) => (
        <SectionWrapper
          key={index}
          index={index}
          sectionsLength={sections.length}
          removeSection={removeSection}
          moveSectionUp={moveSectionUp}
          moveSectionDown={moveSectionDown}
          openSettingsDrawer={openSettingsDrawer}
          openContentDrawer={openContentDrawer}
          addSection={addSection}
          copySection={copySection}
          height={section.settings.height}
          id={section.type + index}
        >
          {renderSection(sections, index)}
        </SectionWrapper>
      ))}
      {sections.length === 0 && (
        <Empty addSection={section => addSection(section, sections.length)} />
      )}
      <Drawer
        width="small"
        showCloseButton
        visible={isSettingsDrawerOpen}
        onDismiss={closeSettingsDrawer}
        title="Settings"
      >
        {isSettingsDrawerOpen && (
          <SettingsForm
            initialValues={sections[currentSectionIndex].settings}
            onSubmit={settings => {
              updateSection({ settings }, currentSectionIndex)
              closeSettingsDrawer()
            }}
            onCancel={closeSettingsDrawer}
          />
        )}
      </Drawer>
      <Drawer
        width="small"
        showCloseButton
        visible={isContentDrawerOpen}
        onDismiss={closeContentDrawer}
        title="Content"
      >
        {isContentDrawerOpen && (
          <ContentForm
            initialValues={sections[currentSectionIndex].content}
            onSubmit={content => {
              updateSection({ content }, currentSectionIndex)
              closeContentDrawer()
            }}
            onCancel={closeContentDrawer}
          />
        )}
      </Drawer>
    </div>
  )
}

const getSettingsForm = section => {
  switch (section?.type) {
    case 'about':
      return AboutSettingsForm
    case 'header':
      return HeaderSettingsForm
    default:
      return FormSkeleton
  }
}

const getContentForm = section => {
  switch (section?.type) {
    case 'about':
      return AboutContentForm
    case 'header':
      return HeaderContentForm
    default:
      return FormSkeleton
  }
}

const renderSection = (sections, index) => {
  switch (sections[index]?.type) {
    case 'header':
      return (
        <Header
          content={sections[index].content}
          settings={sections[index].settings}
          sections={sections}
        />
      )
    case 'about':
      return <About content={sections[index].content} settings={sections[index].settings} />
    case 'plans':
      return <Join />
    case 'promo':
      return <Promo />
    case 'location':
      return <Location />
    case 'feedback':
      return <Feedback />

    case 'instaLife':
      return <Insta />

    case 'footer':
      return <Footer />

    default:
      return false
  }
}
