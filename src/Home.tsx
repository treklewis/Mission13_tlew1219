import styles from './Home.module.css';

function TopBanner(props: any) {
  return (
    <>
      <div className="row">
        <div className="col-4">
          <img src="./JoelHiltonHeadshot (1).jpg" alt="Joel" />
        </div>
        <div className="col align-self-center text-start">
          <h1 className={styles.h1}>{props.saying}</h1>
        </div>
        <div></div>
      </div>
    </>
  );
}

export default TopBanner;
