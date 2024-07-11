import { useTranslation } from 'react-i18next'

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

export default function LanguageSelect() {
  const { i18n } = useTranslation()

  function handleLanguageChange(language: string) {
    i18n.changeLanguage(language)
  }

  return (
    <Select defaultValue="en" onValueChange={handleLanguageChange}>
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
