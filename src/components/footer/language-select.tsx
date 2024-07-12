import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

export default function LanguageSelect() {
  return (
    <Select defaultValue='en'>
      <SelectTrigger className="w-20 border-none shadow-none hover:bg-secondary">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="en" defaultChecked>
          US
        </SelectItem>
        <SelectItem value="br">BR</SelectItem>
      </SelectContent>
    </Select>
  )
}
