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

const URL = '/createUser';

const server = setupServer(
  rest.post(URL, (req, res, ctx) => {
    // console.log("gets here");
    // console.log(req.body);
    // const {name, email, passwordd} = req.body;

    return res(ctx.json(req.body));
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
test('click Create User', async () => {
  render(<App />);
  fireEvent.click(screen.getByText('Sign In'));
  await waitFor(() => screen.getByText('Sign in here'));
  fireEvent.click(screen.getByText('Create Account'));
  await waitFor(() => screen.getByText('Create Account Here'));
  // userEvent.click(screen.getByText('Back'));
});

test('Create user', async () => {
  render(<App />);
  // fireEvent.click(screen.getByText('Sign In'));
  userEvent.type(screen.getByPlaceholderText('Name'), 'Bob');
  userEvent.type(screen.getByPlaceholderText('Email'), 'bob@email.com');
  userEvent.type(screen.getByPlaceholderText('Password'), 'password');
  await waitFor(() => userEvent.click(screen.getByText('Create')));

  await waitFor(() => screen.getByText('Bob'));
  userEvent.click(screen.getByText('Logout'));
});

/**

  test('wrong login', async () => {
    /* server.use(
      rest.post(URL, (req, res, ctx) => {
        console.log('returning 401 error');
        return res(ctx.status(401));
      }),
    );
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

