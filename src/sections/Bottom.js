import tageIcon from '../assets/images/icons/tage.webp';

const TagSection = () => {
  return (
    <section className="tage-section py-lg-5 py-4">
      <div className="container">
        <div className="d-flex align-items-center gap-3 tage">
          <hr className="flex-grow-1" />
          <img width="" height="" src={tageIcon} alt="tage" loading="lazy" />
          <hr className="flex-grow-1" />
        </div>
      </div>
    </section>
  );
};

export default TagSection;
