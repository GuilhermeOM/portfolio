import '../../../node_modules/flag-icons/css/flag-icons.min.css'

import { useTranslation } from 'react-i18next'

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
  const { i18n } = useTranslation()

  function handleLanguageChange(language: string) {
    i18n.changeLanguage(language)
  }

  return (
    <Select defaultValue="en" onValueChange={handleLanguageChange}>
      <SelectTrigger className="w-24 border-none shadow-none hover:bg-secondary">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="en" defaultChecked>
          <CountryBox countryCode="us" />
        </SelectItem>
        <SelectItem value="br">
          <CountryBox countryCode="br" />
        </SelectItem>
      </SelectContent>
    </Select>
  )
}
