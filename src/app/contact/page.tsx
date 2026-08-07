import Image from 'next/image';
import Link from 'next/link';

export default function Contact() {
  return (
    <div id="contactPageContainer">
      <header>
        <nav>
          <div className="navbar-container">
            <div className="navbar-logo-container">
              <Link href="/">
                <Image src="/StreetKnitsLogo4.svg" alt="StreetKnits logo" className="navbar-logo-image" width={48} height={48} />
              </Link>
                <Link href="/">
                  <span className="navbar-logo-text">StreetKnits</span>
                </Link>
              </div>
              <div className="navbar-links">
                <Link href="/donate">Donate</Link>
                <Link href="/contact" id="contactPageNavBarContactText">Contact</Link>
              </div>
            </div>
        </nav>
      </header>

      <main>
        <section id="contactPageCloud1Container" className="cloudScalableVectorGraphicContainer">
                <Image src="/cloud2.svg" alt="cloud" width={120} height={80} />
                <p>
                  Thank you for taking the time to visit our website, we really appreciate it. 
                  If you would like to contact StreetKnits, please email us and we will respond promptly.
                </p>
        </section>
  
        <section id="contactPageCloud2Container" className="cloudScalableVectorGraphicContainer"> 
          <Image src="/cloud3.svg" alt="cloud" width={120} height={80} />
          <h1> 
            Email:
          </h1>
          <p>
            streetknits2013@gmail.com
          </p>
        </section>

        <section id="contactPageCloud3Container" className="cloudScalableVectorGraphicContainer">     
                <Image src="/cloud1.svg" alt="cloud" width={120} height={80} />
                <p>
                  Check out the feed from our Facebook page down below. Feel free to like, comment, and share!
                </p>
        </section>

        <section id="contactPageCloud4Container" className="cloudScalableVectorGraphicContainer">
          <Image src="/cloud4.svg" alt="cloud" width={120} height={80} />
            <iframe
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fwww.streetknits.org&tabs=timeline&width=385&height=750&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=false&appId"
            width={385}
            height={800}
            />
        </section>


      </main>

      <footer>
        <p> 
          A website redesign by Nicholas Immenschuh
        </p>
      </footer>
    </div>
  );
}