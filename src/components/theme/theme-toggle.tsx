'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import posthog from 'posthog-js'

import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { getDictionary } from '@/lib/i18n/get-dictionary'

interface ThemeToggleProps {
  dictionary: Awaited<ReturnType<typeof getDictionary>>['theme']
}

export function ThemeToggle({ dictionary }: ThemeToggleProps) {
  const { setTheme } = useTheme()

  function handleThemeChange(theme: 'light' | 'dark' | 'system') {
    posthog.capture(`theme_button-${theme}_clicked`)

    setTheme(theme)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => handleThemeChange('light')}>{dictionary.light}</DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleThemeChange('dark')}>{dictionary.dark}</DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleThemeChange('system')}>{dictionary.system}</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
