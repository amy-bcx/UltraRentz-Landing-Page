import React from "react";

const hours = new Date().getHours();
const day = hours < 12 ? "Morning" : hours <= 17 ? "Afternoon" : "Evening";
const timeOfDay = hours < 12 ? "#f5b22a" : hours <= 17 ? "#fe2df4" : "#491af6";
const rentApp =
  hours < 12
    ? "Renting App System"
    : hours <= 17
    ? "Seamless Renting App"
    : "Renting System";

function MainPage() {
  return (
    <div className="mainContainer">
      <div className="main1">
        <h1>ULTRARENTZ</h1>
        <h3>
          Good <span style={{ color: timeOfDay }}>{day}</span> and Welcome to
          UltraRentz
        </h3>
        <h3>
          {" "}
          The next generation{" "}
          <span style={{ color: timeOfDay }}>{rentApp}</span>
        </h3>
      </div>
      <div className="main2">
        <div className="main2L">
          <h3>Where you can secure and monetise your rent deposit</h3>
          <button className="btnL" type="button">
            Secure Rent Deposit
          </button>
          <button className="btnR" type="button">
            Monetise your Rent Deposit
          </button>
        </div>
        <div className="main2R">
          <img
            className="icons"
            src="https://images.unsplash.com/photo-1558882224-dda166733046?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
      </div>
      <div className="divP">
        <p>We received ${Math.floor(Math.random() * 10)} of funding so far. </p>
      </div>
      <div className="main3">
        <div className="main3L">
          <h3>The 1st Globally Decentralised Rent Deposit Payment Platform!</h3>
          <ul>
            <li>Escrow Payments with a Multisig</li>
            <li>Rent profit returns through DeFi</li>
            <li>Swift dispute outcomes through a DAO</li>
          </ul>
        </div>
        <div className="main3R">
          <img
            className="icons"
            src="https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
      </div>
      <div className="main4">
        <div>
          <h2 id="m4h2">GOALS</h2>
        </div>
        <div className="main4Container">
          <div className="main4Img">
            <img
              className="icons"
              src="https://images.unsplash.com/photo-1728825445493-1a6e89164511?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <h3>SECURE WEB3 PAYMENTS</h3>
            <h4>
              RENT DEPOSITS WILL BE SECURELY HELD IN AN ESCROW SMART CONTRACT
            </h4>
          </div>
          <div className="main4Img">
            <img
              className="icons"
              src="https://images.unsplash.com/photo-1462045504115-6c1d931f07d1?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <h3>RENT DEPOSIT MONETISATION</h3>
            <h4>
              A STAKING CONTRACT WILL PROVIDE RENTERS AND LANDLORDS PROFIT
            </h4>
          </div>
          <div className="main4Img">
            <img
              className="icons"
              src="https://images.unsplash.com/photo-1730121630824-6485ca5ef6f3?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <h3>RENT DEPOSIT DAO</h3>
            <h4>DISPUTES WILL BE DECIDED WITHIN 2-5 DAYS</h4>
          </div>
        </div>
      </div>

      <div className="main4">
        <div>
          <h2 id="m4h2">GLOBAL CHALLENGE OF RENT DEPOSITS</h2>
        </div>
        <div className="main5Container">
          <div className="main4Img">
            <img
              className="icons"
              src="https://images.unsplash.com/photo-1622126195600-41efc0b028e2?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />

            <h4>Students lose 32 million when they move out</h4>
          </div>
          <div className="main4Img">
            <img
              className="icons"
              src="https://images.unsplash.com/photo-1583428217317-0e134175c127?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />

            <h4>17% of rent deposits don’t cover damages and rent arrears</h4>
          </div>
          <div className="main4Img">
            <img
              className="icons"
              src="https://images.unsplash.com/photo-1509660933844-6910e12765a0?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />

            <h4>
              16 % of renters felt their landlord had illegally deducted their
              rent deposits
            </h4>
          </div>
        </div>
      </div>

      <div className="main6">
        <div>
          <h2 id="m6h2">USE CASES</h2>
        </div>
        <div className="main6Container">
          <div className="main6L">
            <h3 className="bDk">
              "I recently returned a property where the damage exceeded the
              deposit by multiples. The deposit was custodial via My Deposits."
            </h3>
            <h4 className="bDk">Anonymous</h4>
          </div>
          <div className="main6M">
            <h3 className="bDk">
              "Private landlords have without fail tried to keep my deposit, one
              letting agent stated they would charge me for the bathroom being
              of an unacceptable standard, the photo evidence provided was a
              single hair in the toilet bowl."
            </h3>
            <h4 className="bDk">Anonymous</h4>
          </div>
          <div className="main6R">
            <h3 className="bDk">
              "We had to take our landlord to court because he was just ignoring
              our requests to get our deposit back. We knew it wasn't in a
              scheme, and had tried to get this addressed during the tenancy so
              had emails proving that he knew it should be but was ignoring our
              requests to do it. We had to pay court fees of over £300 to even
              get it heard, and although the landlord has to pay these if you
              win the case that is a lot of money to have to pay especially when
              the case isn't necessarily quick. The landlord ignored the court
              summons so it took multiple attempts and us being very determined
              to get the case to actually happen. Despite all this, when we did
              get the case heard and the landlord was told to pay our deposit
              more than a year after we moved out, he received no fine."
            </h3>
            <h4 className="bDk">Anonymous</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MainPage;

/*<img
className="icons"
src="https://cdn.iconscout.com/icon/premium/png-512-thumb/home-8105643-6516978.png?f=webp&w=256"
/>

<img
className="icons"
src="https://cdn.iconscout.com/icon/premium/png-512-thumb/fund-raising-9340713-7637305.png?f=webp&w=256"
/>

<img
className="icons"
src="https://cdn.iconscout.com/icon/premium/png-512-thumb/address-book-8105577-6517040.png?f=webp&w=256"
/>*/
