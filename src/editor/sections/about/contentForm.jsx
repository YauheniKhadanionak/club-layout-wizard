import { useState } from 'react'
import { Button, Form } from '@abc/protonpack'
import { BackgroundPicker } from '../../components/BackgroundPicker'

export const AboutContentForm = ({ initialValues, onSubmit, onCancel }) => {
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
          outlined
          label="Title"
          name="title"
          value={state.title}
          onChange={getHandler('title')}
        />
        <Form.Input
          outlined
          label="Description"
          name="description"
          value={state.description}
          onChange={getHandler('description')}
        />
        <BackgroundPicker
          label="Background Image"
          value={state.background}
          name="background"
          onChange={getHandler('background')}
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
