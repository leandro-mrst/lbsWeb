import * as React from 'react'; 
import { MenuBar, FooterPage } from '../components/layout.js'
import { Link } from 'gatsby';
import './downloads.css'

const DownloadPage = () => {
    return(
        <div>
            <MenuBar></MenuBar>
             <main className="container my-5"> 
                <h1 className="mb-4">
                    Propedia v2.3 <span className="badge bg-warning text-dark ms-2">New</span> 
                </h1>

                <div className="table-responsive"> 
                    <table className="table table-hover table-striped"> 
                        <thead className="table-primary"> 
                            <tr>
                                <th scope="col">File</th>
                                <th scope="col">Description</th>
                                <th scope="col">File size</th>
                                <th scope="col">Download</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Peptides (28,581)</td>
                                <td>PDB File (zip)</td>
                                <td>97MB</td>
                                <td><Link to="/downloads/peptides2_3.zip">peptides2_3.zip</Link></td> 
                            </tr>
                            <tr>
                                <td>Receptors (35,478)</td>
                                <td>PDB File (zip)</td>
                                <td>1.6GB</td>
                                <td><Link to="/downloads/repeceptor2_3.zip">repeceptor2_3.zip</Link></td>
                            </tr>
                            <tr>
                                <td>Complexes (49,300)</td>
                                <td>PDB File (zip)</td>
                                <td>2.4GB</td>
                                <td><Link to="/downloads/complex2_3.zip">complex2_3.zip</Link></td>
                            </tr>
                            <tr>
                                <td>Interfaces (49,300)</td>
                                <td>PDB File (zip)</td>
                                <td>39.1MB</td>
                                <td><Link to="/downloads/interface2_3.zip">interface2_3.zip</Link></td>
                            </tr>
                            <tr>
                                <td>Sequences</td>
                                <td>FASTA File (zip)</td>
                                <td>368MB</td>
                                <td><Link to="/downloads/sequences2_3.zip">sequences2_3.zip</Link></td>
                            </tr>
                            <tr>
                                <td>Structural signatures (case study 1 and 2)</td>
                                <td>CSV File (zip)</td>
                                <td>1.4MB</td>
                                <td><Link to="/downloads/peptides_signature.zip">peptides_signature.zip</Link></td>
                            </tr>
                        </tbody>
                    </table>
                </div> 
                 <h1 className="mb-4">Propedia v.1</h1> {/* Este H1 está duplicado como na imagem original */}
                <h2 className="mb-3">Download CSV File</h2>
                <div className="table-responsive mb-5">
                    <table className="table table-hover table-striped">
                        <thead className="table-primary">
                            <tr>
                                <th scope="col">File</th>
                                <th scope="col">Description</th>
                                <th scope="col">File size</th>
                                <th scope="col">Download</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Complexes</td>
                                <td>CSV File</td>
                                <td>12M</td>
                                <td><Link to="/downloads/complex.csv">complex.csv</Link></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* TABELA 4: Download PDB Files */}
                <h2 className="mb-3">Download PDB Files</h2>
                <div className="table-responsive mb-5">
                    <table className="table table-hover table-striped">
                        <thead className="table-primary">
                            <tr>
                                <th scope="col">File</th>
                                <th scope="col">Description</th>
                                <th scope="col">File size</th>
                                <th scope="col">Download</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Complexes</td>
                                <td>PDB format</td>
                                <td>860M</td>
                                <td><Link to="/downloads/complex.zip">complex.zip</Link></td>
                            </tr>
                            <tr>
                                <td>Peptides</td>
                                <td>PDB format</td>
                                <td>43M</td>
                                <td><Link to="/downloads/peptide.zip">peptide.zip</Link></td>
                            </tr>
                            <tr>
                                <td>Receptors</td>
                                <td>PDB format</td>
                                <td>592M</td>
                                <td><Link to="/downloads/receptor.zip">receptor.zip</Link></td>
                            </tr>
                            <tr>
                                <td>Interfaces</td>
                                <td>PDB format</td>
                                <td>55M</td>
                                <td><Link to="/downloads/interface.zip">interface.zip</Link></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* TABELA 5: Download Fasta Files */}
                <h2 className="mb-3">Download Fasta Files</h2>
                <div className="table-responsive mb-5">
                    <table className="table table-hover table-striped">
                        <thead className="table-primary">
                            <tr>
                                <th scope="col">File</th>
                                <th scope="col">Description</th>
                                <th scope="col">File size</th>
                                <th scope="col">Download</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Peptides</td>
                                <td>Fasta format</td>
                                <td>2.2M</td>
                                <td><Link to="/downloads/peptide.fasta">peptide.fasta</Link></td>
                            </tr>
                            <tr>
                                <td>Receptors</td>
                                <td>Fasta format</td>
                                <td>6.5M</td>
                                <td><Link to="/downloads/receptor.fasta">receptor.fasta</Link></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* TABELA 6: Download Database (MySQL) */}
                <h2 className="mb-3">Download Database (MySQL)</h2>
                <div className="table-responsive mb-5">
                    <table className="table table-hover table-striped">
                        <thead className="table-primary">
                            <tr>
                                <th scope="col">File</th>
                                <th scope="col">Description</th>
                                <th scope="col">File size</th>
                                <th scope="col">Download</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Database File</td>
                                <td>SQL format</td>
                                <td>5.4M</td>
                                <td><Link to="/downloads/propedia.sql">propedia.sql</Link></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </main>

            <FooterPage></FooterPage>
        </div>
    )
}
export const Head = () => <title>PropediaDownload</title>


export default DownloadPage