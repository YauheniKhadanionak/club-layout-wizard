import { useState } from 'react'
import { Button, Form } from '@abc/protonpack'

export const AboutSettingsForm = ({ initialValues, onSubmit, onCancel }) => {
  const [state, setState] = useState(initialValues)

  const handleSubmit = event => {
    onSubmit(state)
    event.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit}>
      <Form.Layout>
        <Form.NumericInput
          outlined
          label="Height"
          name="height"
          value={state.height}
          onChange={value => setState({ ...state, height: value })}
          suffix="px"
        />
      </Form.Layout>

      <Form.ActionsLayout className="drawerActions">
        <Button type="submit">Save</Button>
        <Button mode="secondary" onClick={() => onCancel()}>
          Cancel
        </Button>
      </Form.ActionsLayout>
    </form>
  )
}
