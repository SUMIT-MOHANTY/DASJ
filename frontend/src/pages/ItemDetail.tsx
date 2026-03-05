import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

interface Item { id: number; name: string; description?: string; }

const ItemDetail: React.FC = () => {
  const { id } = useParams();
  const [item, setItem] = useState<Item | null>(null);
  useEffect(() => {
    if (id) {
      fetch(`/api/v1/items/${id}`)
        .then(res => res.json())
        .then(data => setItem(data.data));
    }
  }, [id]);
  if (!item) return <div>Loading...</div>;
  return (
    <div>
      <h2>{item.name}</h2>
      <p>{item.description}</p>
      <Link to={`/items/${item.id}/edit`}>Edit</Link>
    </div>
  );
};

export default ItemDetail;
