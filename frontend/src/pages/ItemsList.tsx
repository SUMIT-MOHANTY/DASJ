import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface Item { id: number; name: string; }

const ItemsList: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  useEffect(() => {
    fetch('/api/v1/items')
      .then(res => res.json())
      .then(data => setItems(data.data.items || []));
  }, []);
  return (
    <div>
      <h2>Items</h2>
      <Link to="/items/new">Create New</Link>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <Link to={`/items/${item.id}`}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemsList;
