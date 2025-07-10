import * as React from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Link } from 'gatsby'; 
import { StaticImage } from 'gatsby-plugin-image'
import './style.css';
import MenuBar from '../components/layout.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const IndexPage = () => {
  return (
    <div>
      <MenuBar></MenuBar>
      <main>
            <section className="hero-section text-center text-md-start position-relative overflow-hidden">

        <div className="background-shapes">

          <StaticImage src="../images/header.jpg" alt="Fundo orgânico" layout="fullWidth" className="bg-image" />
        
        </div>

        
        <div className="molecule-image-container d-none d-md-block"> 

          <StaticImage src="../images/molecule-img.png" alt="Molécula" className="img-fluid molecule-img" />
         
        </div>


        <div className="container position-relative z-1 py-5">
          <div className="row justify-content-md-start justify-content-center">
            <div className="col-lg-6 col-md-8">
 
              <h1 className="display-4 fw-bold mb-3">A database of peptide-protein interactions</h1>

              <p className="mb-8">
                PROPEDIA is a database of peptide-protein complexes, clustered in three methodologies: 
                based on <strong>peptide sequences</strong>, based on <strong>structure interface</strong>, 
                and based on <strong>binding sites</strong>. 
                PROPEDIA main goal is to give new insights into peptide design of biotechnological interests.
              </p>

  
              <div className="d-flex flex-column flex-md-row justify-content-md-start justify-content-center gap-3">
                <Link to="#" className="btn btn-primary btn-lg">Explore v2.3</Link>
                <Link to="#" className="btn btn-outline-secondary btn-lg">Back to Propedia v1.0</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

       <div id='info' className='container py-5'>
      <div className='row justify-content-center align-items-center g-4'>

        <div className='col-12 col-md-6 col-lg-3 text-success'>
      <div className='info-box p-4'> 
        <FontAwesomeIcon icon={["fas", "database"]} className='icon' /> 
        <div className='text-content'>
          <div className='number mb-1'>~49,300</div> 
          <div className='divider'></div>
          <div className='description text-success'>PEPTIDE COMPLEXES</div>
        </div>
      </div>
    </div>

    <div className='col-12 col-md-6 col-lg-3 text-success'>
      <div className='info-box p-4'>
        <FontAwesomeIcon icon={["fas", "font"]} className='icon' />
        <div className='text-content'>
          <div className='number mb-1'>~1,845</div>
          <div className='divider'></div>
          <div className='description text-success'>SEQUENCE CLUSTERS</div>
        </div>
      </div>
    </div>

    <div className='col-12 col-md-6 col-lg-3 text-success'>
      <div className='info-box p-4'>
        <FontAwesomeIcon icon={["fas", "bacon"]} className='icon' />
        <div className='text-content'>
          <div className='number mb-1'>~1,891</div>
          <div className='divider'></div>
          <div className='description text-success'><u>INTERFACE CLUSTERS</u></div>
        </div>
      </div>
    </div>

    <div className='col-12 col-md-6 col-lg-3 text-success'>
      <div className='info-box p-4'>
        <FontAwesomeIcon icon={["fas", "atom"]} className='icon' />
        <div className='text-content'>
          <div className='number mb-1'>~1,466</div>
          <div className='divider'></div>
          <div className='description text-success'>BINDING SITE CLUSTERS</div>
        </div>
      </div>
    </div>
      </div>

      <p className='text-end mt-4 text-muted small'>*Last updated on: Nov 2022</p>

    </div>
      </main>
    </div>
  );
};

export const Head = () => <title>Propedia</title>


export default IndexPage