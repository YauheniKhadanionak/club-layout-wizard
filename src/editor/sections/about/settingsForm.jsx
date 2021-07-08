import { useState } from 'react'
import { Button, Form } from '@abc/protonpack'
import { FormSection } from '../../components/FormSection'

export const AboutSettingsForm = ({ initialValues, onSubmit, onCancel }) => {
  const [state, setState] = useState(initialValues)

  const handleSubmit = event => {
    onSubmit(state)
    event.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit}>
      <FormSection title="Main settings">
        <Form.NumericInput
          outlined
          label="Height"
          name="height"
          value={state.height}
          onChange={value => setState({ ...state, height: value })}
          suffix="px"
        />
        <Form.Select
          outlined
          label="Backgroung Image Position"
          value={{ value: '', label: 'Center Center' }}
          options={[]}
          disabled
        />
        <Form.Select
          outlined
          label="Backgroung Scroll Effect"
          value={{ value: '', label: 'Static' }}
          options={[]}
          disabled
        />
      </FormSection>
      <FormSection title="Button">
        <Form.ColorPicker
          outlined
          label={{ color: 'Text Color', hex: 'HEX Code' }}
          value="#ffffff"
          disabled
        />
        <Form.ColorPicker
          outlined
          label={{ color: 'Button Color', hex: 'HEX Code' }}
          value="#06A9F6"
          disabled
        />
        <Form.Input outlined label="Border Radius" value="4px" disabled />
        <Form.Select
          outlined
          label="Button Font Size"
          value={{ value: '', label: '16px' }}
          options={[]}
          disabled
        />
        <Form.Select
          outlined
          label="Button Font Weight"
          value={{ value: '', label: '16px' }}
          options={[]}
          disabled
        />
      </FormSection>
      <Form.ActionsLayout className="drawerActions">
        <Button type="submit">Save</Button>
        <Button mode="secondary" onClick={() => onCancel()}>
          Cancel
        </Button>
      </Form.ActionsLayout>
    </form>
  )
}
