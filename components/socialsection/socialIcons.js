import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';

const SocialCard = () => {
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',

        marginTop: 30,
        marginBottom: 30,
      }}
    >
      <h1>jhon Smiths social media</h1>
      <div>
        <FacebookIcon color="primary" />
        <TwitterIcon style={{ color: 'rgb(29, 161, 242)' }} />
        <InstagramIcon style={{ color: 'rgb(225, 48, 108)' }} />
        <YouTubeIcon color="secondary" />
      </div>
    </div>
  );
};

export default SocialCard;
