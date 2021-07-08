import { Form, Text } from '@abc/protonpack'
import './styles.css'

export const FormSection = props => {
  const { title, children } = props

  return (
    <div className="formSection">
      <Text className="title">{title}</Text>
      <Form.Layout>{children}</Form.Layout>
    </div>
  )
}
