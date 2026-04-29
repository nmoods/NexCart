import './Admin.css';
import { Button, Input, ProductImageCard } from '@nexcart/nexcart-design-system';
import '@nexcart/nexcart-design-system/style.css';
import { Search, Settings, Bell } from 'lucide-react';
import { useState } from 'react';

function Admin() {
    const [searchInput, setSearchInput] = useState('');

    return (
        <>
            <nav className="nx-admin--navbar">
                <div className="nx-admin--navbar__left">
                    <h1 className="nx-admin--header">
                        NexCart
                    </h1>
                </div>
                <div className="nx-admin--navbar__center">
                    <Input
                        title=""
                        placeholder="Search..."
                        iconEnd={<Search />}
                        value={searchInput}
                        onChange={(value) => setSearchInput(value)}
                    />
                </div>
                <div className="nx-admin--navbar__right">
                    <button className="nx-admin--icon-btn">
                        <Bell />
                    </button>
                    <button className="nx-admin--icon-btn">
                        <Settings />
                    </button>
                    <div className="nx-admin--avatar">
                        <ProductImageCard
                            label=""
                            image="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWRtaW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                        />
                    </div>
                </div>
            </nav>
            <section className="nx-admin--section">
                <div className="nx-admin--menubar">
                    <Button variant="primary">Mi</Button>
                    <Button variant="primary">Bombo</Button>
                    <Button variant="primary">Clat</Button>
                </div>
                <div className="nx-admin--content"></div>
            </section>
        </>
    );
}

export default Admin;