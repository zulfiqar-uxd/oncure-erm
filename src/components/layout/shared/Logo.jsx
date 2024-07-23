'use client'

// Component Imports
import OncureIconLogo from '@core/svg/OncureIconLogo'
import OncureTextLogo from '@core/svg/OncureTextLogo'

// Hook Imports
import useVerticalNav from '@menu/hooks/useVerticalNav'
import { useSettings } from '@core/hooks/useSettings'

const Logo = () => {
  // Hooks
  const { isHovered } = useVerticalNav()
  const { settings } = useSettings()

  // Vars
  const { layout } = settings

  return (
    <div className='flex items-center min-bs-[24px]'>
      {!isHovered && layout == 'collapsed' ? (
        <OncureIconLogo className='text-[22px] text-primary' />
      ) : (
        <OncureTextLogo className='text-[22px] text-primary' />
      )}
    </div>
  )
}

export default Logo
