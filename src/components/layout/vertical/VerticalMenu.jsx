// MUI Imports
import { useTheme } from '@mui/material/styles'

// Third-party Imports
import PerfectScrollbar from 'react-perfect-scrollbar'

// Component Imports
import { Menu, SubMenu, MenuItem, MenuSection } from '@menu/vertical-menu'

// Hook Imports
import useVerticalNav from '@menu/hooks/useVerticalNav'

// Styled Component Imports
import StyledVerticalNavExpandIcon from '@menu/styles/vertical/StyledVerticalNavExpandIcon'

// Style Imports
import menuItemStyles from '@core/styles/vertical/menuItemStyles'
import menuSectionStyles from '@core/styles/vertical/menuSectionStyles'

const RenderExpandIcon = ({ open, transitionDuration }) => (
  <StyledVerticalNavExpandIcon open={open} transitionDuration={transitionDuration}>
    <i className='ri-arrow-right-s-line' />
  </StyledVerticalNavExpandIcon>
)

const menuData = [
  {
    label: 'Main',
    subMenu: [
      {
        label: 'Dashboard',
        icon: <i className='ri-dashboard-line' />,
        menuItems: [{ label: 'Dashboard' }]
      },
      {
        label: 'Patients',
        icon: <i className='ri-user-heart-line' />,
        menuItems: [{ label: 'Quick Register' }, { label: 'Patient Records' }, { label: 'Patient Messages' }]
      },
      {
        label: 'Doctors',
        icon: <i className='ri-stethoscope-line' />,
        menuItems: [{ label: 'Doctor Records' }, { label: 'Doctor Schedule' }]
      },
      {
        label: 'Appointments',
        icon: <i className='ri-calendar-check-line' />,
        menuItems: [{ label: 'Appointments' }]
      },
      {
        label: 'My Appointment',
        icon: <i className='ri-calendar-line' />,
        menuItems: [{ label: 'My Appointment' }]
      }
    ]
  },
  {
    label: 'Administrative',
    subMenu: [
      {
        label: 'Users & Permissions',
        icon: <i className='ri-user-settings-line' />,
        menuItems: [
          { label: 'Log Audit' },
          { label: 'Manage Role' },
          { label: 'Manage Users' },
          { label: 'Manage Permissions' }
        ]
      }
    ]
  },
  {
    label: 'Operational',
    subMenu: [
      {
        label: 'Oncology',
        icon: <i className='ri-virus-line' />,
        menuItems: [{ label: 'Tumour Board' }]
      }
    ]
  },
  {
    label: 'Technical',
    subMenu: [
      {
        label: 'Branches',
        icon: <i className='ri-building-line' />,
        menuItems: [{ label: 'Branch Management' }]
      }
    ]
  }
]

const VerticalMenu = ({ scrollMenu }) => {
  // Hooks
  const theme = useTheme()
  const verticalNavOptions = useVerticalNav()
  const { isBreakpointReached } = useVerticalNav()

  // Vars
  const { transitionDuration } = verticalNavOptions
  const ScrollWrapper = isBreakpointReached ? 'div' : PerfectScrollbar

  return (
    // eslint-disable-next-line lines-around-comment
    /* Custom scrollbar instead of browser scroll, remove if you want browser scroll only */
    <ScrollWrapper
      {...(isBreakpointReached
        ? {
            className: 'bs-full overflow-y-auto overflow-x-hidden',
            onScroll: container => scrollMenu(container, false)
          }
        : {
            options: { wheelPropagation: false, suppressScrollX: true },
            onScrollY: container => scrollMenu(container, true)
          })}
    >
      <Menu
        popoutMenuOffset={{ mainAxis: 10 }}
        menuItemStyles={menuItemStyles(verticalNavOptions, theme)}
        renderExpandIcon={({ open }) => <RenderExpandIcon open={open} transitionDuration={transitionDuration} />}
        renderExpandedMenuItemIcon={{ icon: <i className='ri-circle-line' /> }}
        menuSectionStyles={menuSectionStyles(verticalNavOptions, theme)}
      >
        {menuData.map((section, index) => (
          <MenuSection key={index} label={section.label}>
            {section.subMenu.map((sub, subIndex) =>
              sub.menuItems.length === 1 ? (
                <MenuItem key={subIndex} href={sub.menuItems[0].href} icon={sub.icon}>
                  {sub.menuItems[0].label}
                </MenuItem>
              ) : (
                <SubMenu key={subIndex} label={sub.label} icon={sub.icon}>
                  {sub.menuItems.map((item, itemIndex) => (
                    <MenuItem key={itemIndex} label={item.label} href={item.href}>
                      {item.label}
                    </MenuItem>
                  ))}
                </SubMenu>
              )
            )}
          </MenuSection>
        ))}
      </Menu>
    </ScrollWrapper>
  )
}

export default VerticalMenu
