import { useAuthContext } from '@asgardeo/auth-react';
import React from 'react';
import { FaPowerOff } from "react-icons/fa";


export const Navigation = (props:any) => {
  const { signIn, signOut } = useAuthContext();
  const isLogin = props.data



  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          <a className='navbar-brand page-scroll' href='/'>
          <img src="img/logo.png" className="img-nav-logo" alt="" />{" "}
          </a>{' '}
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <a target="_blank"  rel="noopener noreferrer" href='https://wso2.com/asgardeo/' >
                Concerts
              </a>
            </li>
            <li>
              <a target="_blank"  rel="noopener noreferrer" href='https://wso2.com/asgardeo/' >
                Movie & Drama
              </a>
            </li>
            <li>
              <a target="_blank"  rel="noopener noreferrer" href='https://wso2.com/asgardeo/' >
                Games
              </a>
            </li>
            <li>
              <a target="_blank"  rel="noopener noreferrer" href='https://wso2.com/asgardeo/' >
                Others
              </a>
            </li>
            { isLogin != "True" ?
            <button
                  onClick={ () => signIn() }
                  className='btn btn-custom btn-lg'
                >
                  Log In
                </button>

            :
            <button
                  onClick={ () => signOut() }
                  className='btn btn-custom btn-lg'
                >
                 <FaPowerOff />
                </button>
          }

          </ul>
        </div>
      </div>
    </nav>
  )
}
