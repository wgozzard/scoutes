import Link from 'next/link';

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: '#e60e0e',
        color: 'white',
        paddingTop: 50,
        borderTop: '1px solid white',
      }}
    >
      <p
        style={{
          textAlign: 'center',
        }}
      >
        Copyright © 2021 ScoutsProfile - All Rights Reserved.
      </p>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',

          alignItems: 'center',

          marginTop: 20,
        }}
      >
        <Link href="https://www.freeprivacypolicy.com/live/93294b3b-7ac4-41b5-8e7f-82b9e40477be">
          <a>
            <h4>Privacy policy - Terms and Conditions</h4>
          </a>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
