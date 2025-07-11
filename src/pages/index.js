import * as React from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Link } from 'gatsby'; 
import { StaticImage } from 'gatsby-plugin-image'
import './style.css';
import { MenuBar, FooterPage } from '../components/layout.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PolarArea } from 'react-chartjs-2';
import { chartData, chartOptions } from '../utils/chart-config.js';
import { faStar } from '@fortawesome/free-solid-svg-icons';



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

    <section className="citation-section py-5">
          <div className="container">
            <div className="citation-box p-4">
              <h2 className="mb-3">How to cite:</h2>
              <p>
                Pedro M. Martins, Lucianna H. Santos, Diego Mariano, Fellipe C. Queiroz, Luana L. Bastos, Isabela de S. Gomes,
                Pedro H. C. Fischer, Rafael E. O. Rocha, Sabrina A. Silveira, Leonardo H. F. de Lima,
                Mariana T. Q. de Magalhães, Maria C. A. Oliveira & Raquel C. de Melo-Minardi (2021).{' '}
                <Link to="https://bmcbioinformatics.biomedcentral.com/articles/10.1186/s12859-020-03881-z">
                  Propedia: a database for protein-peptide identification based on a hybrid clustering algorithm.
                </Link>{' '}
                BMC Bioinformatics, 22(1), 1-20.
              </p>              
            </div>
          </div>
        </section>
        

         <section className="datasets-section py-5">
          <div className="container">
            <div className="d-flex align-items-center mb-4">
              <span className="badge bg-success me-2 fs-6">New</span>
              <h2 className="mb-0 me-3">Browse by specific datasets</h2>
              <Link to="#" className="btn btn-outline-primary btn-sm">View all</Link>
            </div>

            <p className="lead mb-5">
              Propedia is composed of many datasets of protein-peptide complexes. You can explore and construct your queries clicking on "View all" button or browse by the most accessed datasets shown below.
            </p>

            <div className="row g-4">
              <div className="col-12 col-lg-6">
               <div className="chart-container" style={{ height: '400px', width: '100%' }}> 
                  <PolarArea data={chartData} options={chartOptions} />
                </div>
                <div className="chart-labels d-flex flex-wrap justify-content-center justify-content-lg-start mt-3">
                  {chartData.labels.map((label, index) => (
                    <span key={label} className="chart-label me-3 mb-2">
                      <span className="color-box me-1" style={{ backgroundColor: chartData.datasets[0].backgroundColor[index] }}></span>
                      {label}
                    </span>
                  ))}
                </div>
              </div>

              <div className="col-12 col-lg-6">
                <div className="row g-3">
                  <div className="col-6">
                    <div className="dataset-card text-center p-3 border border-3 border-start-0 border-end-0 border-bottom-0 border-warning">
                      <FontAwesomeIcon icon={["fas", "flask"]} className='dataset-icon mb-2' />
                      <p className="mb-0 dataset-name">PROPEDIA</p>
                      <p className="fw-bold mb-0 dataset-db-name">ANTIMICROBIALDB</p>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="dataset-card text-center p-3 border border-3 border-start-0 border-end-0 border-bottom-0 border-danger">
                      <FontAwesomeIcon icon={["fas", "fire"]} className='dataset-icon mb-2' />
                      <p className="mb-0 dataset-name">PROPEDIA</p>
                      <p className="fw-bold mb-0 dataset-db-name">VIRALDB</p>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="dataset-card text-center p-3 border border-3 border-start-0 border-end-0 border-bottom-0 border-primary">
                      <FontAwesomeIcon icon={["fas", "ban"]} className='dataset-icon mb-2' />
                      <p className="mb-0 dataset-name">PROPEDIA</p>
                      <p className="fw-bold mb-0 dataset-db-name">ENZYMEDB</p>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="dataset-card text-center p-3 border border-3 border-start-0 border-end-0 border-bottom-0 border-success">
                      <FontAwesomeIcon icon={["fas", "water"]} className='dataset-icon mb-2' />
                      <p className="mb-0 dataset-name">PROPEDIA</p>
                      <p className="fw-bold mb-0 dataset-db-name">MEMBRANEDB</p>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="dataset-card text-center p-3 border border-3 border-start-0 border-end-0 border-bottom-0 border-info">
                      <FontAwesomeIcon icon={["fas", "venus-mars"]} className='dataset-icon mb-2' />
                      <p className="mb-0 dataset-name">PROPEDIA</p>
                      <p className="fw-bold mb-0 dataset-db-name">HORMONEDB</p>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="dataset-card text-center p-3 border border-3 border-start-0 border-end-0 border-bottom-0 border-secondary">
                      <FontAwesomeIcon icon={["fas", "seedling"]} className='dataset-icon mb-2' />
                      <p className="mb-0 dataset-name">PROPEDIA</p>
                      <p className="fw-bold mb-0 dataset-db-name">PLANTDB</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
         
<div className="table-container-styled table-responsive mb-5"> 
   <h1 className="mb-4">Complex samples</h1>
    <table className="table table-hover table-striped"> 
        <thead className="table-dark"> 
            <tr>
                <th scope="col">Complex<sup className="text-danger">*</sup></th> 
                <th scope="col">Peptide size</th>
                <th scope="col">Receptor size</th>
                <th scope="col">Resolution (Å)</th>
                <th scope="col">Protein Name</th>
                <th scope="col">Classification</th>
                <th scope="col">Clusters</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><Link to="#">1eez-C-A</Link></td>
                <td>9</td>
                <td>275</td>
                <td>2.3</td>
                <td>CRYSTAL STRUCTURE DETERMINATION OF HLA-A2.1 COMPLEXED TO GP2 PEPTIDE VARIANT(D2,V5L)</td>
                <td>IMMUNE SYSTEM</td>
                <td>
                    <span className="badge bg-success me-1">Cluster S67</span><br/>
                    <span className="badge bg-danger me-1">Cluster I0</span><br/>
                    <span className="badge bg-primary">Cluster B6</span>
                </td>
            </tr>
            <tr>
                <td><Link to="#">1qyb-E-A</Link></td>
                <td>5</td>
                <td>122</td>
                <td>1.9</td>
                <td>NITY POINT MUTANT OF YWTE2 BOUND TO FXFG NUCLEOPORIN REPEAT</td>
                <td>NUCLEAR TRANSPORT</td>
                <td></td> {/* Célula vazia, como na imagem */}
            </tr>
            <tr>
                <td><Link to="#">2b9i-C-A</Link> <FontAwesomeIcon icon={faStar} className="text-warning" /></td> 
                <td>339</td>
                <td>2.3</td>
                <td>CRYSTAL STRUCTURE OF FUS3 WITH A DOCKING MOTIF FROM FAR1</td>
                <td>TRANSFERASE</td>
                <td>
                    <span className="badge bg-success me-1">Cluster S967</span><br/>
                    <span className="badge bg-danger me-1">Cluster I245</span><br/>
                    <span className="badge bg-primary">Cluster B35</span>
                </td>
            </tr>
            <tr>
                <td><Link to="#">2e7i-P-F</Link></td>
                <td>9</td>
                <td>175</td>
                <td>2.5</td>
                <td>STRUCTURE OF A HIGH-AFFINITY MUTANT OF THE 2C TCR IN COMPLEX WITH LDLQ/L9</td>
                <td>IMMUNE SYSTEM</td>
                <td></td>
            </tr>
            <tr>
                <td><Link to="#">2w3o-D-B</Link></td>
                <td>8</td>
                <td>103</td>
                <td>1.9</td>
                <td>CRYSTAL STRUCTURE OF THE HUMAN PWWP FHA DOMAIN IN COMPLEX WITH AN KRCC1 DERIVED PHOSPHOPEPTIDE</td>
                <td>HYDROLASE/TRANSFERASE/PEPTIDE</td>
                <td></td>
            </tr>
            <tr>
                <td><Link to="#">3uxq-B-A</Link> <FontAwesomeIcon icon={faStar} className="text-warning" /></td>
                <td>16</td>
                <td>168</td>
                <td>1.9</td>
                <td>CRYSTAL STRUCTURE OF RPXANK</td>
                <td>TRANSCRIPTION</td>
                <td>
                    <span className="badge bg-success me-1">Cluster S424</span><br/>
                    <span className="badge bg-danger me-1">Cluster I173</span><br/>
                    <span className="badge bg-primary">Cluster B175</span>
                </td>
            </tr>
            <tr>
                <td><Link to="#">4ub0-a-d</Link></td>
                <td>40</td>
                <td>354</td>
                <td>2.0</td>
                <td>NATIVE STRUCTURE OF PHOTOSYSTEM II (DATASET-2) BY A FEMTOSECOND X-RAY LASER</td>
                <td>ELECTRON TRANSPORT, PHOTOSYNTHESIS</td>
                <td></td>
            </tr>
            <tr>
                <td><Link to="#">4wvt-D-A</Link></td>
                <td>6</td>
                <td>80</td>
                <td>2.0</td>
                <td>CRYSTAL STRUCTURE OF KAP-BRD2 DOMAIN COMPLEXED WITH LIGAND BOUND</td>
                <td>APOPTOSIS</td>
                <td></td>
            </tr>
            <tr>
                <td><Link to="#">4y70-A-Y</Link></td>
                <td>4</td>
                <td>213</td>
                <td>2.4</td>
                <td>Yeast 20S PROTEASOME in complex with AC-LAV-EP</td>
                <td>HYDROLASE/HYDROLASE INHIBITOR</td>
                <td></td>
            </tr>
            <tr>
                <td><Link to="#">5crn-C-A</Link> <FontAwesomeIcon icon={faStar} className="text-warning" /></td>
                <td>17</td>
                <td>357</td>
                <td>2.0</td>
                <td>CRYSTAL STRUCTURE OF THE BRD DOMAIN OF HD-PTP IN A COMPLEX WITH THE CORE REGION OF STAM2</td>
                <td>PROTEIN TRANSPORT</td>
                <td>
                    <span className="badge bg-success me-1">Cluster S312</span><br/>
                    <span className="badge bg-danger me-1">Cluster I407</span><br/>
                    <span className="badge bg-primary">Cluster B227</span>
                </td>
            </tr>
        </tbody>
    </table>
</div>
      </main>
                
      <footer>
        <FooterPage></FooterPage>
      </footer>
    </div>
  );
};

export const Head = () =>
  <>
  <title>Propedia</title>
  <link rel="icon" href="../images/logo_propedia.svg" /> 
  </> 


export default IndexPage