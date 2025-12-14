import { Switch } from "@heroui/react";
import {useTheme} from "@heroui/use-theme";
import { IconMoon, IconMoonFilled, IconSunFilled } from "@tabler/icons-react";

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme()
  return (
    <div>
      <Switch size="sm" classNames={{thumb:"black"}} thumbIcon={theme=="dark"?<IconMoonFilled></IconMoonFilled>:<IconSunFilled></IconSunFilled>} defaultSelected onChange={()=>{theme=="light"?setTheme('dark'):setTheme('light')}}></Switch>
    </div>
  )
};