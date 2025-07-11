import * as React from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Link } from 'gatsby';
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
            <Link to='../'>
          <StaticImage
          src="../images/logo_propedia.svg" 
          alt="Logo Propedia"
          width={380}></StaticImage>
          </Link>
          </div>
          <ul className="menu nav ms-auto mb-2 mb-lg-0 nav-pills">

            <li className="nav-item me-3 fs-5"> <Link to="">Explore</Link>
            </li>

            <li className="nav-item me-3 fs-5"> <Link to="">Search</Link></li>

            <li className="nav-item me-3 fs-5"> <Link to="">Clusters</Link></li>

            <li className="nav-item me-3 fs-5"> <Link to="../downloads">Download</Link></li>

            <li className="nav-item me-3 fs-5"> <Link to="">About</Link></li>
          </ul>
      </header>
    </div>
  );
};
const FooterPage = () => {
  return(
    <div>
   <footer className="main-footer bg-dark">
          <div className="container py-5">
            <div className="row align-items-center">
  
               <div className="col-12 col-md-8 col-lg-6 d-flex align-items-center mb-4 mb-md-0">
                <StaticImage
                  src="../images/lbs.svg"
                  alt="LBS Logo"
                  layout="fixed"
                  width={70}
                  className="me-4 flex-shrink-0"
                />
                <div className="lbs-info text-white">
                  <h3 className="fw-bold fs-5 mb-1">Laboratório de Bioinformática e Sistemas (LBS)</h3>
                  <p className="mb-0">Universidade Federal de Minas Gerais (UFMG), Brazil</p>
                  <p className="mb-0">Av. Pres. Antônio Carlos 6627 - Pampulha, Belo Horizonte - MG, 31270-901 | Instituto de Ciências Exatas (ICEx),</p>
                  <p className="mb-0">Departamento de Ciência da Computação (DCC)</p>
                  <p className="mb-0 mt-2">Anexo I, 4º andar, Sala: 4340 | +55 31 3409-5090 | <a href="mailto:bioinfo.dcc.ufmg@gmail.com">bioinfo.dcc.ufmg@gmail.com</a></p>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-6 d-flex justify-content-md-end justify-content-center align-items-center flex-wrap">
                <StaticImage
                  src="../images/ufmg_w.svg" 
                  alt="UFMG Logo"
                  layout="fixed"
                  width={200} 
                  className="me-md-4 mb-3 mb-md-0"
                />
                <StaticImage
                  src="../images/dcc_w.svg" 
                  alt="DCC Logo"
                  layout="fixed"
                  width={200} 
                  className="mb-3 mb-md-0"
                />
              </div>
  
            </div>
          </div>
  
          <div className="bottom-footer py-3 text-center text-white small">
            ©2025 LBS | Created by <Link to="#" className="text-white text-decoration-underline">Diego Mariano</Link> and <Link to="#" className="text-white text-decoration-underline">Pedro Martins</Link> | Maintained by <Link to="#" className="text-white text-decoration-underline">LBS-IT team</Link>.
          </div>
        </footer>
  </div>
  );
};
export { MenuBar, FooterPage };
