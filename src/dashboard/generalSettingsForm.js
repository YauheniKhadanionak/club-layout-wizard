import { useState } from 'react'
import { Button, Form } from '@abc/protonpack'

export const GeneralSettingsForm = ({ initialValues, onSubmit, onCancel }) => {
  const [state, setState] = useState(initialValues)

  const getHandler = name => event => setState({ ...state, [name]: event.target.value })

  const handleSubmit = event => {
    onSubmit(state)
    event.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit}>
      <Form.Layout>
        <Form.Input
          isRequired
          outlined
          label="Site Title"
          name="title"
          value={state.title}
          onChange={getHandler('title')}
        />
        <Form.Textarea
          isRequired
          maxLength={140}
          showCounter
          outlined
          label="Site Description"
          name="description"
          value={state.description}
          onChange={getHandler('description')}
        />
        <Form.Input
          outlined
          label="Domain"
          disabled
          name="domain"
          value={state.domain}
          onChange={getHandler('domain')}
        />
      </Form.Layout>

      <Form.ActionsLayout className="formActions">
        <Button type="submit">Save</Button>
        <Button mode="secondary" onClick={() => onCancel()}>
          Cancel
        </Button>
      </Form.ActionsLayout>
    </form>
  )
}
