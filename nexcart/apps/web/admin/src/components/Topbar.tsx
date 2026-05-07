import { Input, ProductImageCard } from '@nexcart/nexcart-design-system';
import { Search, Bell, Settings } from 'lucide-react';

type TopbarProps = {
    searchInput: string;
    onSearchChange: (value: string) => void;
};

const Topbar = ({ searchInput, onSearchChange }: TopbarProps) => (
    <nav className="nx-admin--navbar">
        <div className="nx-admin--navbar__left">
            <h1 className="nx-admin--header">NexCart</h1>
        </div>
        <div className="nx-admin--navbar__center">
            <Input
                title=""
                placeholder="Search..."
                iconEnd={<Search />}
                value={searchInput}
                onChange={onSearchChange}
            />
        </div>
        <div className="nx-admin--navbar__right">
            <button className="nx-admin--icon-btn"><Bell /></button>
            <button className="nx-admin--icon-btn"><Settings /></button>
            <div className="nx-admin--avatar">
                <ProductImageCard
                    label=""
                    image="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?w=80"
                />
            </div>
        </div>
    </nav>
);

export default Topbar;
