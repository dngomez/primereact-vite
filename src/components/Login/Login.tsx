import { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Auth/AuthProvider";
import { Card } from 'primereact/Card';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';

interface LocationInterface {
  from: {
    pathname: string;
  }
}

export default function Login() {
  let navigate = useNavigate();
  let location = useLocation();
  let auth = useContext(AuthContext);

  const from = (location.state as LocationInterface)?.from?.pathname ?? "/";

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    auth.signin(username, password,
      // Send them back to the page they tried to visit when they were
      // redirected to the login page. Use { replace: true } so we don't create
      // another entry in the history stack for the login page.  This means that
      // when they get to the protected page and click the back button, they
      // won't end up back on the login page, which is also really nice for the
      // user experience.
      () => navigate(from, { replace: true })
    );
  }

  return (
    <div className="grid">
      <div className="col-6 col-offset-3">
        <Card>
          <form onSubmit={handleSubmit}>
            <div className="field">
              <label htmlFor="firstname1">Username</label>
              <span className="p-input-icon-right w-full">
                <i className="pi pi-user" />
                <InputText value={username} className='w-full' placeholder='Username' onChange={(e) => setUsername(e.target.value)} />
              </span>
            </div>
            <div className="field">
              <label htmlFor="lastname1">Password</label>
              <Password value={password} className='w-full' inputClassName='w-full' placeholder='Password' onChange={(e) => setPassword(e.target.value)} toggleMask />
            </div>
            <Button label="Submit" icon="pi pi-check" />
          </form>
        </Card>
      </div>
    </div>
  );
}