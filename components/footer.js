const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: '#e60e0e',
        color: 'white',
        paddingTop: 50,
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
        <h4>Privacy policy</h4>
        <span> - </span>
        <h4>Terms and Conditions</h4>
      </div>
    </footer>
  );
};

export default Footer;
