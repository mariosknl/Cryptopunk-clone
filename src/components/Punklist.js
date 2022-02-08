import CollectionCard from "./CollectionCard";
import "./Punklist.css";

const Punklist = ({ punkListData }) => {
  return (
    <div className="punklist">
      {punkListData.map((punk) => (
        <CollectionCard
          key={punk.token_id}
          id={punk.token_id}
          name={punk.name}
          traits={punk.traits}
          image={punk.image_url}
        />
      ))}
    </div>
  );
};

export default Punklist;
