import { Switch } from "@heroui/react";
import {useTheme} from "@heroui/use-theme";
import { IconMoon, IconMoonFilled, IconSunFilled } from "@tabler/icons-react";

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme("dark")
  return (
    <div>
      <Switch size="sm" classNames={{thumb:"black"}} thumbIcon={theme=="dark"?<IconMoonFilled></IconMoonFilled>:<IconSunFilled></IconSunFilled>} isSelected={theme=="dark"?true:false} onChange={()=>{theme=="light"?setTheme('dark'):setTheme('light')}}></Switch>
    </div>
  )
};