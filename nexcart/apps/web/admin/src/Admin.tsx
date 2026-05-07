import './Admin.css';
import '@nexcart/nexcart-design-system/style.css';
import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import ProductTable from './components/ProductTable';

function Admin() {
    const [searchInput, setSearchInput] = useState('');
    const [selected, setSelected] = useState<Set<string>>(new Set(['2']));
    const [activeNav, setActiveNav] = useState('Product');

    const toggleRow = (id: string) => {
        setSelected((prev) => {
            const next = new Set(prev);
            next.has(id) ? next.delete(id) : next.add(id);
            return next;
        });
    };

    return (
        <div className="nx-admin">
            <Sidebar activeNav={activeNav} onNavChange={setActiveNav} />
            <div className="nx-admin__main">
                <Topbar searchInput={searchInput} onSearchChange={setSearchInput} />
                <ProductTable
                    searchInput={searchInput}
                    onSearchChange={setSearchInput}
                    selected={selected}
                    onToggleRow={toggleRow}
                />
            </div>
        </div>
    );
}

export default Admin;
