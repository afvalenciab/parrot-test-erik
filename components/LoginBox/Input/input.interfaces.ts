export interface InputProps extends React.ComponentPropsWithoutRef<"input"> {
  fieldType?: string
  fieldName?: string
  fieldPlaceholder?: string
  fieldOnChange?: (e: HTMLInputElement) => void
}
