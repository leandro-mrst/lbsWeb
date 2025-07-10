import * as React from 'react'; // React is correctly imported 
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS imported
import { Link } from 'gatsby'; // Link component from Gatsby imported
import { StaticImage } from 'gatsby-plugin-image'
import './style.css';
import MenuBar from '../components/layout.js'

// Step 2: Define your component
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

              <p className="lead mb-4">
                PROPEDIA is a database of peptide-protein complexes, clustered in three methodologies: based on **peptide sequences**, based on **structure interface**, and based on **binding sites**. PROPEDIA main goal is to give new insights into peptide design of biotechnological interests.
              </p>

  
              <div className="d-flex flex-column flex-md-row justify-content-md-start justify-content-center gap-3">
                <Link to="#" className="btn btn-primary btn-lg">Explore v2.3</Link>
                <Link to="#" className="btn btn-outline-secondary btn-lg">Back to Propedia v1.0</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      </main>
    </div>
  );
};
// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Propedia</title>

// Step 3: Export your component
export default IndexPage