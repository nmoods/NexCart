import {
    LayoutGrid, Trophy, Sheet, Building2,
    ShoppingBag, Calendar, MessageCircle, LifeBuoy, ChevronDown,
} from 'lucide-react';

const NAV = [
    { icon: <LayoutGrid size={18} />, label: 'Overview' },
    { icon: <Trophy size={18} />,     label: 'Leaderboard' },
    { icon: <Sheet size={18} />,      label: 'Spreadsheets' },
    { icon: <Building2 size={18} />,  label: 'Administration' },
];

type SidebarProps = {
    activeNav: string;
    onNavChange: (label: string) => void;
};

const Sidebar = ({ activeNav, onNavChange }: SidebarProps) => (
    <aside className="nx-admin__sidebar">
        <ul className="nx-admin__nav">
            {NAV.map((item) => (
                <li
                    key={item.label}
                    className={`nx-admin__nav-item ${activeNav === item.label ? 'is-active' : ''}`}
                    onClick={() => onNavChange(item.label)}
                >
                    {item.icon}
                    <span>{item.label}</span>
                </li>
            ))}

            <li className="nx-admin__nav-item nx-admin__nav-item--group">
                <ShoppingBag size={18} />
                <span>Sales</span>
                <ChevronDown size={16} className="nx-admin__nav-chevron" />
            </li>
            <li
                className={`nx-admin__nav-subitem ${activeNav === 'Product' ? 'is-active' : ''}`}
                onClick={() => onNavChange('Product')}
            >
                <span>Product</span>
                <span className="nx-admin__nav-count">252</span>
            </li>
            <li
                className={`nx-admin__nav-subitem ${activeNav === 'Orders' ? 'is-active' : ''}`}
                onClick={() => onNavChange('Orders')}
            >
                <span>Orders</span>
                <span className="nx-admin__nav-count">4</span>
            </li>

            <li className="nx-admin__nav-item" onClick={() => onNavChange('Schedule')}>
                <Calendar size={18} />
                <span>Schedule</span>
            </li>
        </ul>

        <p className="nx-admin__nav-heading">TEAMS</p>
        <ul className="nx-admin__nav">
            <li className="nx-admin__nav-item">
                <MessageCircle size={18} />
                <span>Message</span>
            </li>
            <li className="nx-admin__nav-item">
                <LifeBuoy size={18} />
                <span>Support</span>
            </li>
        </ul>
    </aside>
);

export default Sidebar;
