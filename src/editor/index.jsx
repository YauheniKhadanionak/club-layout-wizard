import './styles.css'
import { useEffect, useState } from 'react'
import { SectionWrapper } from './SectionWrapper'
import { Insta, Footer, About, AboutContentForm, Empty } from './sections'
import { SECTION_INITIAL_DATA } from './constants'

import { Drawer } from '@abc/protonpack'
import { Feedback } from './sections/feedback'
import {Location} from "./sections/location";
import Promo from "./sections/promo";

export const Editor = () => {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => setLoading(false), 500)
  }, [])

  const [isContentDrawerOpen, setContentDrawerOpen] = useState(false)
  const [currentSectionIndex, setcurrentSectionIndex] = useState(undefined)
  const [sections, setSections] = useState(Object.values(SECTION_INITIAL_DATA))

  const openContentDrawer = index => {
    setcurrentSectionIndex(index)
    setContentDrawerOpen(true)
  }

  const closeContentDrawer = () => {
    setContentDrawerOpen(false)
  }

  const addSection = (section, index) => {
    setSections([...sections.slice(0, index), section, ...sections.slice(index + 1)])
  }

  const copySection = (index) => {
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
        return (
          <div style={{ height: section.settings.height }} className="section">
            Header
          </div>
        )
      case 'about':
        return <About content={section.content} settings={section.settings} />
      case 'plans':
        return (
          <div style={{ height: section.settings.height }} className="section">
            Plans
          </div>
        )
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
          openContentDrawer={openContentDrawer}
          addSection={addSection}
          copySection={copySection}
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
        visible={isContentDrawerOpen}
        onDismiss={closeContentDrawer}
        title="Content"
      >
        {isContentDrawerOpen && renderContentForm(sections[currentSectionIndex])}
      </Drawer>
    </div>
  )
}
