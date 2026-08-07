import Image from 'next/image';
import Link from 'next/link';

export default function DonatePage() {
  return (
    <div id="donatePageContainer">
      <header>
        <nav>
            <div className="navbar-container">
              <div className="navbar-logo-container">
                <Link href="/">
                  <Image src="/StreetKnitsLogo4.svg" alt="Streetknits Logo" className="navbar-logo-image" width={48} height={48} />
                </Link>
                <Link href="/">
                  <span className="navbar-logo-text">StreetKnits</span>
                </Link>
              </div>
              <div className="navbar-links">
                <Link href="/donate" id="donatePageNavBarDonateText">Donate</Link>
                <Link href="/contact">Contact</Link>
              </div>
            </div>
        </nav>
      </header>

      <main>
          <article>
            <section id="donatePageCloud1Container" className="cloudScalableVectorGraphicContainer">
                <Image src="/cloud1.svg" alt="cloud" width={120} height={80} />
                  <p>
                  We are a community of knitters who want to help keep people safe and warm during the winter. 
                  Would you like to join us? Donating knitted goods is a great place to start!
                  </p>
            </section>

            <section id="donatePageCloud2Container" className="cloudScalableVectorGraphicContainer">
                <Image src="/cloud2.svg" alt="cloud" width={120} height={80} />
                <p>
                  Send StreetKnits an email if you would like to mail knitwear or yarn. 
                  Also, if you are short on time and knitting supplies and prefer to donate in another way, 
                  monetary donations are helpful for buying yarn, needles, and organizing knitting workshops.
                </p>
            </section>
          
            <section id="donateSignContainer">
                <Image src="/donateSign4.svg" alt="sign" width={160} height={160} />
                <table>
                    <caption>
                      Donations
                    </caption> 
                  <thead>
                    <tr>
                      <th scope="col">Year</th>
                      <th scope="col">Name</th>
                      <th scope="col">Items</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                        <td>2014</td>
                        <td>Simpson Housing Services (Minneapolis, MN)</td>
                        <td>56</td>
                    </tr>
                    <tr>
                      <td>2015</td>
                      <td>New Community Shelter (Green Bay, WI)</td>
                      <td>185</td>
                    </tr>
                    <tr>
                        <td>2016</td>
                        <td>New Community Shelter (Green Bay, WI)</td>
                        <td>262</td>
                    </tr>
                    <tr>
                      <td>2017</td>
                      <td>New Community Shelter (Green Bay, WI)</td>
                      <td>262</td>
                    </tr>
                    <tr>
                      <td>2018</td>
                      <td>Food and Shelter (Norman, OK)</td>
                      <td>285</td>
                    </tr>
                    <tr>
                      <td>2019</td>
                      <td>Food and Shelter (Norman, OK)</td>
                      <td>338</td>
                    </tr>
                    <tr>
                      <td>2020</td>
                      <td>Food and Shelter (Norman, OK)</td>
                      <td>354</td>
                    </tr>
                    <tr>
                      <td>2021</td>
                      <td>Food and Shelter (Norman, OK)</td>
                      <td>408</td>
                    </tr>
                    <tr>
                      <td>2022</td>
                      <td>Food and Shelter (Norman, OK)</td>
                      <td>416</td>
                    </tr>
                    <tr>
                      <td>2023</td>
                      <td>Food and Shelter (Norman, OK)</td>
                      <td>742</td>
                    </tr>
                    <tr>
                      <td>2024</td>
                      <td>Food and Shelter (Norman, OK)</td>
                      <td>362</td>
                    </tr>
                    <tr>
                      <td>2025</td>
                      <td>In Progress</td>
                      <td>...</td>
                    </tr>
                  </tbody>
                </table>
                <h1>Venmo: &quot;accountName&quot;</h1>
            </section>
        </article>
      </main>

      <footer>
        <p> 
          A website redesign by Nicholas Immenschuh
        </p>
      </footer>
    </div>
  );
}