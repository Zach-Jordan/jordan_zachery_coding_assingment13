export interface DropdownProps {
  options: string[]
  disabled?: boolean
  onChange?: (selectedOption: string) => void
}
