import '../../../node_modules/flag-icons/css/flag-icons.min.css'

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

interface CountryBoxProps {
  countryCode: 'us' | 'br'
}

function CountryBox({ countryCode }: CountryBoxProps) {
  return (
    <div className="flex gap-2">
      <span className={`fi fi-${countryCode}`} />
      <span>{countryCode.toUpperCase()}</span>
    </div>
  )
}

export default function LanguageSelect() {
  return (
    <Select defaultValue="us">
      <SelectTrigger className="w-24 border-none shadow-none hover:bg-[hsl(var(--secondary))]">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="us" defaultChecked>
          <CountryBox countryCode="us" />
        </SelectItem>
        <SelectItem value="br">
          <CountryBox countryCode="br" />
        </SelectItem>
      </SelectContent>
    </Select>
  )
}
