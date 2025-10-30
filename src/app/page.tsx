import Link from 'next/link';

export default function HomePage() {
  return (
    <div id="homePageContainer">
      <header>
        <nav>
            <div className="navbar-container">
              <div className="navbar-logo-container">
                <Link href="/">
                  <img src="../StreetKnitsLogo4.svg" alt="Streetknits Logo" className="navbar-logo-image"/>
                </Link>
                <Link href="/">
                  <span className="navbar-logo-text" id="homePageNavBarStreetKnitsText">StreetKnits</span>
                </Link>
              </div>
              <div className="navbar-links">
                <Link href="/donate">Donate</Link>
                <Link href="/contact">Contact</Link>
              </div>
            </div>
        </nav>
      </header>

      <main id="homePageBackgroundContainer">
        <article>
          <section>
            <h1>About Us</h1>
            <p>
                StreetKnits is a humanitarian knitting charity dedicated to warming bodies and hearts.
                Since 2013, StreetKnits is the passion and perpetual project of founder Silke Feltz,
                who aims not only to keep her neighbors warm, but also to help students, teachers, 
                and members of the community to find their knitting zen.
                Currently, StreetKnits operates from Norman, Oklahoma.
            </p>
          </section>
        </article>
      </main>

      <footer>
            <p> A website redesign by Nicholas Immenschuh</p>
      </footer>
      
    </div>
  );
}