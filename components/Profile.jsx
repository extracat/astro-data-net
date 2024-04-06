const api = new (require('../controllers/api'))();
import useSWR from 'swr';

export default function Profile() {
  const { data: swrData, error: swrError } = useSWR(`/v1/passport`, api.get, {fallbackData: 'loading...' });

  if (swrError) return <span>SWR error: Failed to load data</span>;
  if (swrData.error) return <span></span>;

  let email = ''
  if (swrData.payload) {
    email = swrData.payload.user_email;
  } 

  return (
    <span>
      {email}
    </span>
  )
}