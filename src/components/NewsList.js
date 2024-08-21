import "./NewsList.css";
import Rating from "./Rating";
import NewsForm from "./NewsForm";
import { useState } from "react";

function formatDate(value) {
  const date = new Date(value);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
}

function NewsListItem({ item, onDelete, onEdit }) {
  const handleDeleteClick = () => {
    onDelete(item.aid);
  };
  const { img, title, rating, date, content } = item;

  const handleEdit = () => {
    onEdit(item.aid);
  };
  return (
    <div className="NewsListItem">
      <img className="NewsListItem-img" src={img} alt={title} />
      <div>
        <h1>{title}</h1>
        <Rating value={rating} />
        <p>{formatDate(date)}</p>
        <p>{content}</p>
        <button onClick={handleEdit}>수정</button>
        <button onClick={handleDeleteClick}>삭제</button>
      </div>
    </div>
  );
}

function NewsList({ items, onDelete }) {
  const [editingId, setEditingId] = useState(null);
  const handleCancel = () => setEditingId(null);

  return (
    <ul className="NewsList">
      {items.map((item) => {
        if (item.aid === editingId) {
          const { img, title, rating, content } = item;
          const initialValues = { title, rating, content, imgFile: null };
          return (
            <li key={item.aid}>
              <NewsForm
                initialValues={initialValues}
                initialPreview={img}
                onCancel={handleCancel}
              />
            </li>
          );
        }
        return (
          <li key={item.aid}>
            <NewsListItem
              item={item}
              onDelete={onDelete}
              onEdit={setEditingId}
            />
          </li>
        );
      })}
    </ul>
  );
}

export default NewsList;
