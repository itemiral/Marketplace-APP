import {
  render, fireEvent, screen, waitFor,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import {
  rest,
} from 'msw';
import {
  setupServer,
} from 'msw/node';

// import LoginScreen from '../Login';
import App from '../App';
//  import {request} from '../../../../backend/src/app';

const URL = '/authenticate';

const server = setupServer(
  rest.post(URL, (req, res, ctx) => {
    // console.log(req.body);
    const {email} = req.body;
    if (email === 'molly@books.com') {
      // console.log('no error');
      return res(ctx.json({name: 'Molly Member'}));
    }
    // console.log('returning 401 error');
    return res(ctx.status(401));
  }),
);

// return res(ctx.status(401));
// return res(ctx.json({name: 'Molly Member',
//  accessToken: 'testingAccessToken'}));

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());


/**
 */
test('click Login', async () => {
  render(<App />);
  fireEvent.click(screen.getByText('Sign In'));
  await waitFor(() => screen.getByText('Sign in here'));
  userEvent.click(screen.getByText('Back'));
});


/**
 */
test('login', async () => {
  /* server.use(
    rest.post(URL, (req, res, ctx) => {
      console.log('returning success');
      return res(ctx.json({
        name: 'Molly Member', accessToken: 'testingAccessToken',
      }));
    }),
  );*/
  render(<App />);
  fireEvent.click(screen.getByText('Sign In'));
  userEvent.type(screen.getByPlaceholderText('Email'), 'molly@books.com');
  userEvent.type(screen.getByPlaceholderText('Password'), 'mollymember');
  userEvent.click(screen.getByText('Login'));
  await waitFor(() => screen.getByText('Molly Member'));
  userEvent.click(screen.getByText('Logout'));
});

/**
 */
test('wrong login', async () => {
  /* server.use(
    rest.post(URL, (req, res, ctx) => {
      console.log('returning 401 error');
      return res(ctx.status(401));
    }),
  ); */
  render(<App />);
  fireEvent.click(screen.getByText('Sign In'));
  userEvent.type(screen.getByPlaceholderText('Email'), 'wrong@email');
  userEvent.type(screen.getByPlaceholderText('Password'), 'wrongPassword');
  userEvent.click(screen.getByText('Login'));
  await waitFor(() => screen.getByText('Sign in here'));
});

/**

test('Handles Server Error', async () => {
  server.use(
    rest.get(URL, (req, res, ctx) => {
      return res(ctx.status(500));
    }),
  );
  render(<Dummy />);
  fireEvent.click(screen.getByText('Get Dummy'));
  await waitFor(() => screen.getByText('ERROR: ', {exact: false}));
}); */
