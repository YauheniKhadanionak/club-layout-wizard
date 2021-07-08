import { useState } from 'react'
import { Button, Form } from '@abc/protonpack'

import { FormSection } from '../../components/FormSection'

export const HeaderSettingsForm = ({ initialValues, onSubmit, onCancel }) => {
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
          label="Menu Height"
          name="height"
          value={state.height}
          onChange={value => setState({ ...state, height: value })}
          suffix="px"
        />
        <Form.Select
          outlined
          label="Menu Position Behavior"
          value={{ value: '', label: 'Static' }}
          options={[]}
          disabled
        />
        <Form.ColorPicker
          outlined
          label={{ color: 'BG Color', hex: 'HEX Code' }}
          value="#000000"
          disabled
        />
      </FormSection>
      <FormSection title="Menu Items">
        <Form.Select
          outlined
          label="Menu Items Alignment"
          value={{ value: '', label: 'Left' }}
          options={[]}
          disabled
        />
        <Form.Select
          outlined
          label="Menu Items Font Size"
          value={{ value: '', label: '20px' }}
          options={[]}
          disabled
        />
        <Form.ColorPicker
          outlined
          label={{ color: 'Text Color', hex: 'HEX Code' }}
          value="#ffffff"
          disabled
        />
        <Form.Select
          outlined
          label="Menu Items Font Weight (Default)"
          value={{ value: '', label: 'Bold' }}
          options={[]}
          disabled
        />
        <Form.Select
          outlined
          label="Menu Items Font Weight (Hover)"
          value={{ value: '', label: 'ExtraBold' }}
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
