'use client'

// Third-party Imports
import classnames from 'classnames'

// Hook Imports
import useVerticalNav from '@menu/hooks/useVerticalNav'

// Util Imports
import { verticalLayoutClasses } from '@layouts/utils/layoutClasses'

const FooterContent = () => {
  // Hooks
  const { isBreakpointReached } = useVerticalNav()

  return (
    <div
      className={classnames(
        verticalLayoutClasses.footerContent,
        'flex items-center justify-between flex-wrap gap-4 text-xs'
      )}
    >
      {!isBreakpointReached && (
        <p>
          <span>{`© ${new Date().getFullYear()} Oncure Bio Solutions. All rights reserved.`}</span>
        </p>
      )}
    </div>
  )
}

export default FooterContent
