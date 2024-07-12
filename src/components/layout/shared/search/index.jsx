'use client'

// MUI Imports
import { IconButton } from '@mui/material'

// Hook Imports
import useVerticalNav from '@menu/hooks/useVerticalNav'
import { useSettings } from '@core/hooks/useSettings'

const NavSearch = () => {
  const { settings } = useSettings()
  const { isBreakpointReached } = useVerticalNav()

  return (
    <>
      {isBreakpointReached || settings.layout === 'horizontal' ? (
        <IconButton>
          <i className='ri-search-line text-textPrimary' />
        </IconButton>
      ) : (
        <div className='flex items-center gap-2 cursor-pointer'>
          <IconButton>
            <i className='ri-search-line text-textPrimary' />
          </IconButton>
          <div className='whitespace-nowrap select-none text-textDisabled'>Search ⌘K</div>
        </div>
      )}
    </>
  )
}

export default NavSearch
