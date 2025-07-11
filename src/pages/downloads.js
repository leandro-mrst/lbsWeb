import * as React from 'react'; 
import { MenuBar, FooterPage } from '../components/layout.js'

const DownloadPage = () => {
    return(
        <div>
            <MenuBar></MenuBar>
            <main></main>

            <FooterPage></FooterPage>
        </div>
    )
}
export const Head = () => <title>PropediaDownload</title>


export default DownloadPage