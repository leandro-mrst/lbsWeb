import * as React from 'react'; // React is correctly imported 
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS imported
import { Link } from 'gatsby'; // Link component from Gatsby imported
import { StaticImage } from 'gatsby-plugin-image'
import '../pages/style.css';

const MenuBar = () => {
  return (
    <div>
      <div className="my-custom-bg mb-0">
        <p className="text-center text-white mb-0">
          Please, cite{' '}
          <Link to="https://bmcbioinformatics.biomedcentral.com/articles/10.1186/s12859-020-03881-z#article-info">
            Martins et al., 2021
          </Link>{' '}
          and{' '} <Link to="https://www.frontiersin.org/journals/bioinformatics/articles/10.3389/fbinf.2023.1103103/full"
          >Martins et al., 2023.</Link>
        </p>
      </div>
      <header className="d-flex align-items-center bg-success mt-0 p-3"> 
          <div d-flex>
          <StaticImage
          src="../images/logo_propedia.svg" 
          alt="Logo Propedia"
          width={380}></StaticImage>
          </div>
          <ul className="menu nav ms-auto mb-2 mb-lg-0 nav-pills">

            <li className="nav-item me-3 fs-5"> <Link to="">Explore</Link>
            </li>

            <li className="nav-item me-3 fs-5"> <Link to="">Search</Link></li>

            <li className="nav-item me-3 fs-5"> <Link to="">Clusters</Link></li>

            <li className="nav-item me-3 fs-5"> <Link to="">Download</Link></li>

            <li className="nav-item me-3 fs-5"> <Link to="">About</Link></li>
          </ul>
      </header>
    </div>
  );
};

export { MenuBar };
