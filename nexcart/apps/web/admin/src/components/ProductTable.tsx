import { Button, Input } from '@nexcart/nexcart-design-system';
import {
    Search, Plus, SlidersHorizontal, MoreHorizontal, ChevronDown,
} from 'lucide-react';

export type Product = {
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

type ProductTableProps = {
    searchInput: string;
    onSearchChange: (value: string) => void;
    selected: Set<string>;
    onToggleRow: (id: string) => void;
};

const ProductTable = ({
                          searchInput,
                          onSearchChange,
                          selected,
                          onToggleRow,
                      }: ProductTableProps) => (
    <>
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
                    onChange={onSearchChange}
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
                                    onChange={() => onToggleRow(p.id)}
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
    </>
);

export default ProductTable;
