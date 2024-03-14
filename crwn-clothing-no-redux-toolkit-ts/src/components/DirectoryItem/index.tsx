import "./styles.scss";

interface DirectoryItemProps {
  category: {
    id: string;
    imageUrl: string;
    title: string;
  }
}

export function DirectoryItem({ category: { id, imageUrl, title } }: DirectoryItemProps) {
  return (
    <div key={id} className="directory-item-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="body">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
}
