import { useContext } from 'react';
import { AuthContext } from './Auth/AuthProvider';
import { Card } from 'primereact/Card';
import { Button } from 'primereact/button';

export default function Home() {
  let auth = useContext(AuthContext);

  const header = (
    <img alt="Card" src="../../images/other/noirlab.jpeg" onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} />
  );

  const footer = (
    <span>
      <Button label="Save" icon="pi pi-check" />
      <Button label="Cancel" icon="pi pi-times" className="p-button-secondary ml-2" />
    </span>
  );

  return (
    <div className="flex flex-wrap justify-content-center">
      <Card title={`You are logged in as ${auth.user.username}`} subTitle={`Welcome, your current password is ${auth.user.password}`} className="w-8"></Card>
      <Card title="Home Page" subTitle="Subtitle" style={{ width: '25em' }} footer={footer} header={header} className='w-8'>
        <p className="m-0" style={{ lineHeight: '1.5' }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
        </p>
      </Card>
    </div>
  )
}