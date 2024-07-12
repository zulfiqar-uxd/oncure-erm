
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
        menuItems: [{ label: 'Online Appt.' }, { label: 'Walk-in Appt.' }]
      },
      {
        label: 'Email',
        icon: <i className='ri-mail-line' />,
        menuItems: [{ label: 'Email' }]
      },
      {
        label: 'Chat',
        icon: <i className='ri-chat-1-line' />,
        menuItems: [{ label: 'Chat' }]
      }
    ]
  },
  {
    label: 'Administrative',
    subMenu: [
      {
        label: 'Accounts',
        icon: <i className='ri-bill-line' />,
        menuItems: [{ label: 'Manage Billing' }, { label: 'Manage Payments' }, { label: 'Manage Discounts' }]
      },
      {
        label: 'Staffs',
        icon: <i className='ri-group-line' />,
        menuItems: [
          { label: 'Staff Record' },
          { label: 'Onboard & Offboard' },
          { label: 'Staff Attendance' },
          { label: 'Staff Salary' },
          { label: 'Staff Leave' }
        ]
      },
      {
        label: 'Users & Permissions',
        icon: <i className='ri-user-settings-line' />,
        menuItems: [
          { label: 'Log Audit' },
          { label: 'Manage Role' },
          { label: 'Manage Users' },
          { label: 'Manage Permissions' }
        ]
      },
      {
        label: 'Inventory',
        icon: <i className='ri-archive-line' />,
        menuItems: [{ label: 'Inventory Records' }, { label: 'Stock Alerts' }]
      }
    ]
  },
  {
    label: 'Operational',
    subMenu: [
      {
        label: 'Health Packages',
        icon: <i className='ri-heart-pulse-line' />,
        menuItems: [{ label: 'Manage Packages' }, { label: 'Package Analytics' }]
      },
      {
        label: 'Oncology',
        icon: <i className='ri-virus-line' />,
        menuItems: [{ label: 'Cancer Screening' }, { label: 'Second Opinion' }, { label: 'Tumour Board' }]
      },
      {
        label: 'Fitness & Diet',
        icon: <i className='ri-empathize-line' />,
        menuItems: [{ label: 'Diet Assessment' }, { label: 'Fitness Assessment' }]
      },
      {
        label: 'Dentcure',
        icon: <i className='ri-tooth-line' />,
        menuItems: [{ label: 'Dental Assessment' }]
      },
      {
        label: 'External Lab',
        icon: <i className='ri-flask-line' />,
        menuItems: [{ label: 'Investigation Records' }, { label: 'Lab Management' }]
      },
      {
        label: 'CRM',
        icon: <i className='ri-customer-service-2-line' />,
        menuItems: [
          { label: 'Website Leads' },
          { label: 'Cold Leads' },
          { label: 'Follow-ups' },
          { label: 'Patient Feedback' }
        ]
      },
      {
        label: 'Patient Flow',
        icon: <i className='ri-flow-chart-line' />,
        menuItems: [{ label: 'Patient Flow' }]
      }
    ]
  },
  {
    label: 'Technical',
    subMenu: [
      {
        label: 'Oncure Website',
        icon: <i className='ri-apps-line' />,
        menuItems: [
          { label: 'Push Notification' },
          { label: 'Manage Blogs' },
          { label: 'Manage Offers' },
          { label: 'Manage Packages' },
          { label: 'Manage Doctors' },
          { label: 'Manage Branches' },
          { label: 'Manage Testimonials' }
        ]
      },
      {
        label: 'WhatsApp',
        icon: <i className='ri-whatsapp-line' />,
        menuItems: [
          { label: 'Diet Alerts' },
          { label: 'Appointment Reminder' },
          { label: 'Follow-Up Reminder' },
          { label: 'Custom Sender' }
        ]
      },
      {
        label: 'Branches',
        icon: <i className='ri-building-line' />,
        menuItems: [{ label: 'Branch Management' }, { label: 'Branch Analytics' }]
      },
      {
        label: 'Support System',
        icon: <i className='ri-instance-line' />,
        menuItems: [{ label: 'Ticketing System' }, { label: 'Complain or Report' }, { label: 'FAQ' }]
      },
      {
        label: 'Tools',
        icon: <i className='ri-tools-line' />,
        menuItems: [{ label: 'To-Do' }, { label: 'Task Planner' }, { label: 'Doc Generator' }]
      }
    ]
  },
  {
    label: 'System',
    subMenu: [
      {
        label: 'Announcement',
        icon: <i className='ri-megaphone-line' />,
        menuItems: [{ label: 'System Alert' }, { label: 'Clinic Alert' }]
      },
      {
        label: 'System Vault',
        icon: <i className='ri-safe-line' />,
        menuItems: [{ label: 'EMR Vault' }, { label: 'External Credentials' }]
      },
      {
        label: 'System Analytics',
        icon: <i className='ri-bar-chart-line' />,
        menuItems: [
          { label: 'Patient Satisfaction Meter' },
          { label: 'Package Usage' },
          { label: 'Patient Visit Trends' },
          { label: 'Financial Analytics' }
        ]
      }
    ]
  }
]
