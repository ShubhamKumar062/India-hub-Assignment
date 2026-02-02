import { ChevronDown, ChevronRight, LayoutGrid } from 'lucide-react';

const Sidebar = ({ categories }) => {
  return (
    <aside className="sidebar">
       <div className="sidebar-header">
           <div className="sidebar-breadcrumb"> &lt; Economic Monitor</div>
       </div>
       
       <div className="sidebar-dropdown-header">
           <div className="dropdown-label">Category</div>
           <div className="dropdown-value">
               India & States <ChevronDown size={16} />
           </div>
       </div>

      <div className="sidebar-menu">
         <div className="menu-group">
             <div className="menu-item active">
                 Homepage
             </div>
             {categories.map((category, index) => (
                <div key={index} className="menu-item">
                    <span className="menu-text">{category}</span>
                    <ChevronRight size={14} className="menu-arrow"/>
                </div>
             ))}
             
             <div className="menu-item"><span className="menu-text">Foreign Trade</span><LayoutGrid size={14}/></div>
             <div className="menu-item"><span className="menu-text">Global Indicators</span></div>
         </div>
      </div>
    </aside>
  );
};

export default Sidebar;
