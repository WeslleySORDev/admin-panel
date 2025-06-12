import { Label } from "@/src/components/ui/label"
import { Input } from "@/src/components/ui/input"
import { Textarea } from "@/src/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/src/components/ui/select"

interface BaseFieldProps {
  label: string
  name: string
  required?: boolean
  className?: string
}

interface InputFieldProps extends BaseFieldProps {
  type?: "text" | "email" | "tel" | "number" | "password"
  placeholder?: string
  defaultValue?: string | number
  step?: string
  min?: string
}

interface TextareaFieldProps extends BaseFieldProps {
  placeholder?: string
  defaultValue?: string
  rows?: number
}

interface SelectFieldProps extends BaseFieldProps {
  placeholder?: string
  defaultValue?: string
  options: { value: string; label: string }[]
}

export function InputField({
  label,
  name,
  type = "text",
  placeholder,
  defaultValue,
  required,
  className,
  step,
  min,
}: InputFieldProps) {
  return (
    <div className={className}>
      <Label htmlFor={name}>{label}</Label>
      <Input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        defaultValue={defaultValue}
        required={required}
        step={step}
        min={min}
      />
    </div>
  )
}

export function TextareaField({
  label,
  name,
  placeholder,
  defaultValue,
  required,
  className,
  rows = 4,
}: TextareaFieldProps) {
  return (
    <div className={className}>
      <Label htmlFor={name}>{label}</Label>
      <Textarea
        id={name}
        name={name}
        placeholder={placeholder}
        defaultValue={defaultValue}
        required={required}
        rows={rows}
      />
    </div>
  )
}

export function SelectField({
  label,
  name,
  placeholder,
  defaultValue,
  required,
  className,
  options,
}: SelectFieldProps) {
  return (
    <div className={className}>
      <Label htmlFor={name}>{label}</Label>
      <Select name={name} defaultValue={defaultValue} required={required}>
        <SelectTrigger>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}
