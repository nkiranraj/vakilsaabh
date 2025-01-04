import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const NavigationMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubMenus, setOpenSubMenus] = useState({});

  const toggleSubMenu = (id) => {
    setOpenSubMenus(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const menuItems = [
    { id: 'home', label: 'Home', href: '/' },
    {
      id: 'consult',
      label: 'Consult an Expert',
      submenu: [
        { label: 'Talk to a Lawyer', href: '/talk-to-a-lawyer' },
        { label: 'Talk to a Chartered Accountant', href: '/talk-to-a-chartered-accountant' },
        { label: 'Talk to a IP/Trademark Lawyer', href: '/talk-to-a-ip-trademark-lawyer' }
      ]
    },
    { id: 'appointment', label: 'Request For Appointment', href: '/request-for-appointment' },
    {
      id: 'services',
      label: 'Services',
      submenu: [
        {
          label: 'Business Setup and Corporate Structuring',
          submenu: [
            { label: 'Business Loan', href: '/business-loan' },
            { label: 'DPR Service', href: '/dpr-service' },
            { label: 'Business Idea Evaluation', href: '/business-idea-evaluation' },
            { label: 'Business Model Canvas', href: '/business-model-canvas' },
            { label: 'Fundraising', href: '/fundraising' },
            { label: 'Pitch Deck', href: '/pitch-deck' }
          ]
        },
        {
          label: 'Lawyer Services',
          submenu: [
            { label: 'Trademark Lawyer', href: '/trademark-lawyer' },
            { label: 'Intellectual Property Lawyer', href: '/intellectual-property-lawyer' },
            { label: 'Litigation Lawyer', href: '/litigation-lawyer' },
            { label: 'Family Lawyer', href: '/family-lawyer' },
            { label: 'Immigration Lawyer', href: '/immigration-lawyer' },
            { label: 'Banking Lawyer', href: '/banking-lawyer' },
            { label: 'Divorce Lawyer', href: '/divorce-lawyer' },
            { label: 'Consumer Court Lawyer', href: '/consumer-court-lawyer' },
            { label: 'Labour Lawyer', href: '/labour-lawyer' },
            { label: 'Criminal Lawyer', href: '/criminal-lawyer' }
          ]
        }
      ]
    },
    { id: 'forum', label: 'Forum', href: '/forum' },
    { id: 'about', label: 'About Us', href: '/about-us' },
    { id: 'contact', label: 'Contact', href: '/contact' },
    { id: 'account', label: 'My Account', href: '/my-account' }
  ];

  const renderSubmenu = (items, level = 0) => (
    <ul className={`${level === 0 ? 'absolute' : 'relative'} bg-white shadow-lg rounded-lg py-2 ${level === 0 ? 'top-full left-0' : ''} min-w-[200px] z-50`}>
      {items.map((item, index) => (
        <li key={index} className="relative">
          {item.submenu ? (
            <div>
              <button
                onClick={() => toggleSubMenu(item.label)}
                className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center justify-between"
              >
                {item.label}
                <span className="ml-2">›</span>
              </button>
              {openSubMenus[item.label] && (
                <div className={`${level === 0 ? 'absolute left-full top-0' : 'relative'}`}>
                  {renderSubmenu(item.submenu, level + 1)}
                </div>
              )}
            </div>
          ) : (
            <a
              href={item.href}
              className="block px-4 py-2 hover:bg-gray-100 text-gray-700 hover:text-gray-900"
            >
              {item.label}
            </a>
          )}
        </li>
      ))}
    </ul>
  );

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="text-xl font-bold text-gray-800">
              VakilSaabh
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex">
            <ul className="flex space-x-4">
              {menuItems.map((item) => (
                <li key={item.id} className="relative group">
                  {item.submenu ? (
                    <div>
                      <button
                        onClick={() => toggleSubMenu(item.id)}
                        className="px-3 py-2 text-gray-700 hover:text-gray-900 flex items-center"
                      >
                        {item.label}
                        <span className="ml-1">▼</span>
                      </button>
                      {openSubMenus[item.id] && renderSubmenu(item.submenu)}
                    </div>
                  ) : (
                    <a
                      href={item.href}
                      className="px-3 py-2 text-gray-700 hover:text-gray-900"
                    >
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-gray-900"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {menuItems.map((item) => (
              <div key={item.id}>
                {item.submenu ? (
                  <div>
                    <button
                      onClick={() => toggleSubMenu(item.id)}
                      className="w-full text-left px-3 py-2 text-gray-700 hover:text-gray-900 flex items-center justify-between"
                    >
                      {item.label}
                      <span>▼</span>
                    </button>
                    {openSubMenus[item.id] && (
                      <div className="pl-4">
                        {item.submenu.map((subItem, index) => (
                          <div key={index}>
                            {subItem.submenu ? (
                              <div>
                                <button
                                  onClick={() => toggleSubMenu(subItem.label)}
                                  className="w-full text-left px-3 py-2 text-gray-700 hover:text-gray-900 flex items-center justify-between"
                                >
                                  {subItem.label}
                                  <span>▼</span>
                                </button>
                                {openSubMenus[subItem.label] && (
                                  <div className="pl-4">
                                    {subItem.submenu.map((subSubItem, idx) => (
                                      <a
                                        key={idx}
                                        href={subSubItem.href}
                                        className="block px-3 py-2 text-gray-700 hover:text-gray-900"
                                      >
                                        {subSubItem.label}
                                      </a>
                                    ))}
                                  </div>
                                )}
                              </div>
                            ) : (
                              <a
                                href={subItem.href}
                                className="block px-3 py-2 text-gray-700 hover:text-gray-900"
                              >
                                {subItem.label}
                              </a>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    href={item.href}
                    className="block px-3 py-2 text-gray-700 hover:text-gray-900"
                  >
                    {item.label}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavigationMenu;