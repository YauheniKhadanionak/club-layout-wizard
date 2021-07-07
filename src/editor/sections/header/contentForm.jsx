import { useState } from 'react'
import { Button, Form } from '@abc/protonpack'
import { BackgroundPicker } from '../../components/BackgroundPicker'

export const HeaderContentForm = ({ initialValues, onSubmit, onCancel }) => {
  const [state, setState] = useState(initialValues)

  const getHandler = name => event => setState({ ...state, [name]: event.target.value })

  const handleSubmit = event => {
    onSubmit(state)
    event.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit}>
      <Form.Layout>

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
