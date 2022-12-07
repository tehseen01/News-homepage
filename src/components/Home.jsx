import "../SASS/home.scss";
import { desktop, mobile, laptop, retro, gaming } from "./import";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main>
      <picture>
        <source media="(min-width: 768px)" srcSet={desktop} />
        <img src={mobile} alt="" />
      </picture>
      <h1>The Bright Future of Web 3.0?</h1>
      <p className="discription">
        We dive into the next evolution of the web that claims to put the power
        of the platforms back into the hands of the people. But is it really
        fulfilling its promise? <br />
        <Link>Read more</Link>
      </p>
      <aside>
        <span>New</span>
        <Link>
          <h2>Hydrogen VS Electric Cars</h2>
        </Link>
        <p className="after">Will hydrogen-fueled cars ever catch up to EVs?</p>
        <Link>
          <h2>The Downsides of AI Artistry</h2>
        </Link>
        <p className="after">
          What are the possible adverse effects of on-demand AI image
          generation?
        </p>
        <Link>
          <h2>Is VC Funding Drying Up?</h2>
        </Link>
        <p>
          Private funding by VC firms is down 50% YOY. We take a look at what
          that means.
        </p>
      </aside>

      <div className="articles col-1">
        <img src={retro} alt="retro" />
        <span>01</span>
        <Link>
          <h3>Reviving Retro PCs</h3>
        </Link>
        <p>What happens when old PCs are given modern upgrades?</p>
      </div>

      <div className="articles col-2">
        <img src={laptop} alt="laptop" />
        <span>02</span>
        <Link>
          <h3>Top 10 Laptops of 2022</h3>
        </Link>
        <p>Our best picks for various needs and budgets.</p>
      </div>

      <div className="articles col-3">
        <img src={gaming} alt="gaming" />
        <span>03</span>
        <Link>
          <h3>The Growth of Gaming</h3>
        </Link>
        <p>How the pandemic has sparked fresh opportunities.</p>
      </div>
    </main>
  );
};

export default Home;
