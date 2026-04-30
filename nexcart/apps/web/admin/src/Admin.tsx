import './Admin.css';
import { Button, Input, ProductImageCard } from '@nexcart/nexcart-design-system';
import '@nexcart/nexcart-design-system/style.css';
import {
    Search, Settings, Bell, LayoutGrid, Trophy, Sheet, Building2,
    ShoppingBag, Calendar, MessageCircle, LifeBuoy, ChevronDown,
    Plus, SlidersHorizontal, MoreHorizontal, ArrowUp,
} from 'lucide-react';
import { useState } from 'react';

type Product = {
    id: string;
    name: string;
    brand: string;
    sku: string;
    stock: number;
    var: number;
    price: string;
    image: string;
};

const PRODUCTS: Product[] = [
    { id: '1', name: 'Men AlRism Jersey Short-Sleeve Polo …', brand: 'Uniqlo', sku: '10000', stock: 50,  var: 10, price: '$14.90', image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=80' },
    { id: '2', name: '© Novoneyra Text Patch T-Shirt',          brand: 'Zara',   sku: '10001', stock: 120, var: 2,  price: '$35.90', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=80' },
    { id: '3', name: 'T-shirt with Motif',                       brand: 'H&M',    sku: '10002', stock: 26,  var: 4,  price: '$7.99',  image: 'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=80' },
    { id: '4', name: 'Men Dry Pique Short-Sleeve Polo Shirt',    brand: 'Uniqlo', sku: '10003', stock: 87,  var: 6,  price: '$50.00', image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=80' },
    { id: '5', name: 'Apollinaire Text T-Shirt',                 brand: 'Zara',   sku: '10004', stock: 96,  var: 11, price: '$35.90', image: 'https://images.unsplash.com/photo-1622445275576-721325763afe?w=80' },
    { id: '6', name: 'Organic cotton T-shirt',                   brand: 'Mango',  sku: '10005', stock: 32,  var: 1,  price: '$15.99', image: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=80' },
    { id: '7', name: 'T-shirt with Printed Design',              brand: 'H&M',    sku: '10006', stock: 14,  var: 5,  price: '$12.99', image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=80' },
];

const NAV = [
    { icon: <LayoutGrid size={18} />, label: 'Overview' },
    { icon: <Trophy size={18} />,     label: 'Leaderboard' },
    { icon: <Sheet size={18} />,      label: 'Spreadsheets' },
    { icon: <Building2 size={18} />,  label: 'Administration' },
];

function Admin() {
    const [searchInput, setSearchInput] = useState('');
    const [selected, setSelected] = useState<Set<string>>(new Set(['2']));
    const [activeNav, setActiveNav] = useState('Product');

    const toggleRow = (id: string) => {
        const next = new Set(selected);
        next.has(id) ? next.delete(id) : next.add(id);
        setSelected(next);
    };

    return (
        <div className="nx-admin">
            <aside className="nx-admin__sidebar">
                <ul className="nx-admin__nav">
                    {NAV.map((item) => (
                        <li
                            key={item.label}
                            className={`nx-admin__nav-item ${activeNav === item.label ? 'is-active' : ''}`}
                            onClick={() => setActiveNav(item.label)}
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
                        onClick={() => setActiveNav('Product')}
                    >
                        <span>Product</span>
                        <span className="nx-admin__nav-count">252</span>
                    </li>
                    <li
                        className={`nx-admin__nav-subitem ${activeNav === 'Orders' ? 'is-active' : ''}`}
                        onClick={() => setActiveNav('Orders')}
                    >
                        <span>Orders</span>
                        <span className="nx-admin__nav-count">4</span>
                    </li>

                    <li className="nx-admin__nav-item" onClick={() => setActiveNav('Schedule')}>
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
            <div className="nx-admin__main">
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
                            onChange={setSearchInput}
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

                <div className="nx-admin__toolbar">
                    <div className="nx-admin__toolbar-left">
                        <label className="nx-admin__select">
                            Show: <select><option>All Products</option></select>
                        </label>
                    </div>
                    <div className="nx-admin__toolbar-right">
                        <Button variant="primary">
                            <Plus size={16} /> New Product
                        </Button>
                        <button className="nx-admin--icon-btn"><SlidersHorizontal size={18} /></button>
                        <label className="nx-admin__select">
                            Sort by: <select><option>Default</option></select>
                        </label>
                    </div>
                </div>

                <div className="nx-admin__table-card">
                    <div className="nx-admin__table-search">
                        <Input
                            title=""
                            placeholder="Search by Name, Brand, Variant etc..."
                            iconStart={<Search />}
                            value={searchInput}
                            onChange={setSearchInput}
                        />
                        <Button variant="secondary">
                            Action <ChevronDown size={14} />
                        </Button>
                    </div>

                    <table className="nx-admin__table">
                        <thead>
                        <tr>
                            <th><input type="checkbox" /></th>
                            <th>PAYMENT NUMBER</th>
                            <th>BRAND</th>
                            <th>#ID</th>
                            <th>STOCK</th>
                            <th>VAR</th>
                            <th>PRICE</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        {PRODUCTS.map((p) => {
                            const isSelected = selected.has(p.id);
                            return (
                                <tr key={p.id} className={isSelected ? 'is-selected' : ''}>
                                    <td>
                                        <input
                                            type="checkbox"
                                            checked={isSelected}
                                            onChange={() => toggleRow(p.id)}
                                        />
                                    </td>
                                    <td className="nx-admin__cell-product">
                                        <img src={p.image} alt="" />
                                        <span>{p.name}</span>
                                    </td>
                                    <td>{p.brand}</td>
                                    <td>{p.sku}</td>
                                    <td>{p.stock}</td>
                                    <td>{p.var}</td>
                                    <td>{p.price}</td>
                                    <td>
                                        <button className="nx-admin--icon-btn">
                                            <MoreHorizontal size={18} />
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Admin;