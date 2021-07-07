import './styles.css'
import { useEffect, useState } from 'react'
import { SectionWrapper } from './SectionWrapper'
import { Insta, Footer, About, AboutContentForm, AboutSettingsForm, Empty } from './sections'
import { SECTION_INITIAL_DATA } from './constants'

import { Drawer, SkeletonShape } from '@abc/protonpack'
import { Feedback } from './sections/feedback'
import { Location } from './sections/location'
import Promo from './sections/promo'
import { Join } from './sections/join'

export const Editor = () => {
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

  const renderSection = section => {
    switch (section.type) {
      case 'header':
        return <div className="section">Header</div>
      case 'about':
        return <About content={section.content} settings={section.settings} />
      case 'plans':
        return <Join />
      case 'promo':
        return <Promo />
      case 'location':
        return <Location />
      case 'feedback':
        return <Feedback />

      case 'inst':
        return <Insta />

      case 'footer':
        return <Footer />

      default:
        return section.type
    }
  }

  const renderSettingsForm = section => {
    switch (section.type) {
      case 'about':
        return (
          <AboutSettingsForm
            initialValues={section.settings}
            onSubmit={settings => {
              updateSection({ settings }, currentSectionIndex)
              closeSettingsDrawer()
            }}
            onCancel={closeSettingsDrawer}
          />
        )
      default:
        return (
          <div>
            <br />
            <SkeletonShape abcId="shape" width="100%" height="3rem" />
            <br />
            <br />
            <SkeletonShape abcId="shape" width="100%" height="3rem" />
            <br />
            <br />
            <SkeletonShape abcId="shape" width="100%" height="3rem" />
            <br />
            <br />
            <SkeletonShape abcId="shape" width="100%" height="3rem" />
            <br />
            <br />
            <SkeletonShape abcId="shape" width="100%" height="3rem" />
            <br />
            <br />
            <SkeletonShape abcId="shape" width="100%" height="3rem" />
          </div>
        )
    }
  }

  const renderContentForm = section => {
    switch (section.type) {
      case 'about':
        return (
          <AboutContentForm
            initialValues={section.content}
            onSubmit={content => {
              updateSection({ content }, currentSectionIndex)
              closeContentDrawer()
            }}
            onCancel={closeContentDrawer}
          />
        )
      default:
        return section.type
    }
  }

  return (
    <div className={`editor${loading ? ' loading' : ''}`}>
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
        >
          {renderSection(section)}
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
        {isSettingsDrawerOpen && renderSettingsForm(sections[currentSectionIndex])}
      </Drawer>
      <Drawer
        width="small"
        showCloseButton
        visible={isContentDrawerOpen}
        onDismiss={closeContentDrawer}
        title="Content"
      >
        {isContentDrawerOpen && renderContentForm(sections[currentSectionIndex])}
      </Drawer>
    </div>
  )
}
