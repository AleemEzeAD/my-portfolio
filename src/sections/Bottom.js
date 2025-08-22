import tageIcon from '../assets/images/icons/tage.png'; 

const TagSection = () => {
  return (
    <section className="tage-section py-5">
      <div className="container">
        <div className="d-flex align-items-center gap-3 tage">
          <hr className="flex-grow-1" />
          <img src={tageIcon} alt="tage" />
          <hr className="flex-grow-1" />
        </div>
      </div>
    </section>
  );
};

export default TagSection;
