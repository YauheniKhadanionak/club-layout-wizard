import { Button, Form, IconEdit, IconTrash } from '@abc/protonpack'
import { SectionBackground } from '../SectionBackground'
import './styles.css'

export const BackgroundPicker = props => {
  const { value, label, onChange, ...rest } = props

  return (
    <div className="filePickerContainer">
      <label class="filePickerLabel">{label}</label>

      <div className="filePickerPreview">
        {value ? (
          <>
            <div className="filePickerButtons">
              <Button color="textPrimary" size="tiny" onClick={() => {}}>
                <IconEdit />
              </Button>
              <Button
                color="textPrimary"
                size="tiny"
                onClick={() => onChange({ target: { value: '' } })}
              >
                <IconTrash />
              </Button>
            </div>
            <SectionBackground src={value} />
          </>
        ) : (
          <label for="filepicker" className="filePicker">
            <Button size="medium" uppercase rounded>
              <input
                id="filepicker"
                type="file"
                accept="image/*,video/*"
                value={value}
                onChange={onChange}
                {...rest}
              />
              Choose file
            </Button>
          </label>
        )}
      </div>
    </div>
  )
}
