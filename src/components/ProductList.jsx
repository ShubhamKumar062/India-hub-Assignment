import { Search, Bookmark, Filter, ShoppingCart, Info, CheckSquare, Plus, Bell } from 'lucide-react';

const ProductList = ({ items }) => {
  return (
    <div className="product-list-container">
       <div className="toolbar">
           <h2 className="toolbar-title">New Releases (20)</h2>
           <div className="toolbar-actions">
               <Search className="action-icon" size={20} />
               <Bookmark className="action-icon" size={20} />
               <Filter className="action-icon" size={20} />
               <div className="selected-count">Selected (2)</div>
               <ShoppingCart className="action-icon" size={20} />
               <Bell className="action-icon" size={20} />
               <button className="btn-view-graph">View Graph</button>
           </div>
       </div>

       <div className="data-table-wrapper">
           <table className="data-table">
               <thead>
                   <tr>
                       <th className="th-main">New Releases (20)</th>
                       <th>Range</th>
                       <th>Unit</th>
                       <th>Coverage</th>
                       <th>Actions</th>
                   </tr>
               </thead>
               <tbody>
                   {items.map((item) => (
                       <tr key={item.id}>
                           <td className="td-main">
                               <div className="item-name">{item.name}</div>
                               <div className="item-meta">
                                   <span className="meta-tag">{item.category}</span>
                                   <span className="meta-sub"> / Accounts</span>
                               </div>
                           </td>
                           <td className="td-range">
                               <div className="range-text">Jan 2011 - Apr 2024</div>
                               <div className="range-sub">Quarterly</div>
                           </td>
                           <td className="td-unit">
                               <span className="unit-badge">USD</span>
                           </td>
                           <td className="td-coverage">
                               <div className="coverage-indicators">
                                   <span className="indicator red">S</span>
                                   <span className="indicator orange">F</span>
                               </div>
                           </td>
                           <td className="td-actions">
                               <div className="action-buttons">
                                   <button className="btn-action"><CheckSquare size={16} /></button>
                                   <button className="btn-action btn-add"><Plus size={16} /></button>
                                   <button className="btn-action"><Bell size={16} /></button>
                                   <button className="btn-action"><Info size={16} /></button>
                               </div>
                           </td>
                       </tr>
                   ))}
               </tbody>
           </table>
       </div>
    </div>
  );
};

export default ProductList;
