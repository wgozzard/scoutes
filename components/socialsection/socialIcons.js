import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import Link from 'next/link';

const SocialCard = props => {
  const { facebook, tweeter, instagram, youtube } = props.profile;
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
        {facebook && (
          <Link href={facebook}>
            <a>
              <FacebookIcon fontSize="large" style={{ margin: 10 }} color="primary" />
            </a>
          </Link>
        )}
        {tweeter && (
          <Link href={tweeter}>
            <a>
              <TwitterIcon fontSize="large" style={{ color: 'rgb(29, 161, 242)', margin: 10 }} />
            </a>
          </Link>
        )}
        {instagram && (
          <Link href={instagram}>
            <a>
              <InstagramIcon fontSize="large" style={{ color: 'rgb(225, 48, 108)', margin: 10 }} />
            </a>
          </Link>
        )}
        {youtube && (
          <Link href={youtube}>
            <a>
              <YouTubeIcon fontSize="large" style={{ margin: 10 }} color="secondary" />
            </a>
          </Link>
        )}
      </div>
    </div>
  );
};

export default SocialCard;
