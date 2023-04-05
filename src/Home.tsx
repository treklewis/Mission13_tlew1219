import styles from './Home.module.css';

function TopBanner(props: any) {
  return (
    <>
      <div className="row">
        <div className="col"></div>
        <div className="col">
          <div className="card" style={{ width: '50rem' }}>
            <img
              className="card-img-top"
              src="./JoelHiltonHeadshot (1).jpg"
              alt="joel"
            />
            <div className="card-body">
              <h5 className="card-title">Joel Hilton Movie Collection</h5>
              <p className={styles.p}>
                Welcome to Joel Hilton's movie collection. Browse the collection
                by clicking on the Movies tab or go to Joel's podcast by going
                to the podcast link.
              </p>
            </div>
          </div>
        </div>
        <div className="col"></div>
      </div>
    </>
  );
}

export default TopBanner;
