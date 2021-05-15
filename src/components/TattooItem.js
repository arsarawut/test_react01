import './TattooItem.css';

function TattoooItem(props) {
  const { tattoo, onTattooClick } = props;
  return (
    <div className="tattoo-item">
      <img src={tattoo.thumbnailUrl} onClick={() => {onTattooClick(tattoo)}} alt="" />
      <h4>{tattoo.title}</h4>
    </div>
  );
}

export default TattoooItem;