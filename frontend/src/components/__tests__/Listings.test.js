import {
  render, fireEvent, screen, waitFor,
} from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import {
  rest,
} from 'msw';
import {
  setupServer,
} from 'msw/node';

// import LoginScreen from '../Login';
import App from '../App';
//  import {request} from '../../../../backend/src/app';

const URL = '/getAllListings';
const URL1 = '/getAllListings:search';

const server = setupServer(
  rest.get(URL, (req, res, ctx) => {
    return res(ctx.json(
      [
        {
          imageinfo: {
            imageUrl: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80',
            description: 'BMW 435i Good Condition Used',
          },
        },
        {
          imageinfo: {
            imageUrl: 'https://images.hgmsites.net/hug/mercedes-benz-s600-guard_100475149_h.jpg',
            description: 'Mercedes Benz S600 New Perfect Condition',
          },
        },
      ],
    ));
  }),
  rest.get(URL1, (req, res, ctx) => {
    return res(ctx.json(
      [
        {
          imageinfo: {
            imageUrl: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80',
            description: 'BMW 435i Good Condition Used',
          },
        },
        {
          imageinfo: {
            imageUrl: 'https://images.hgmsites.net/hug/mercedes-benz-s600-guard_100475149_h.jpg',
            description: 'Mercedes Benz S600 New Perfect Condition',
          },
        },
        {
          imageinfo: {
            imageUrl: 'https://media.ed.edmunds-media.com/toyota/rav4-hybrid/2019/oem/2019_toyota_rav4-hybrid_4dr-suv_limited_fq_oem_1_1600.jpg',
            description: 'Toyota 2020 RAV4 Used Condition',
          },
        },
      ],
    ));
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
test('show listings', async () => {
  render(<App />);
  fireEvent.click(screen.getByText('Show Listings'));
  await waitFor(() => screen.getByText('BMW 435i Good Condition Used'));
});

test('show searched listings', async () => {
  render(<App />);
  fireEvent.click(screen.getByText('Show Listings'));
  await waitFor(() =>
    screen.getByText('Mercedes Benz S600 New Perfect Condition'));
  userEvent.type(screen.getByPlaceholderText('Search'), 'Toyota');
  const button = document.getElementById('searchb');
  userEvent.type(button, '{enter}');
  await waitFor(() => screen.getByText('Toyota 2020 RAV4 Used Condition'));
});

test('search before listings are shown', async () => {
  render(<App />);
  userEvent.type(screen.getByPlaceholderText('Search'), 'Toyota');
  const button = document.getElementById('searchb');
  userEvent.type(button, '{enter}');
  await waitFor(() => screen.getByText('Show Listings'));
});

/**
  test('login', async () => {
    /* server.use(
      rest.post(URL, (req, res, ctx) => {
        console.log('returning success');
        return res(ctx.json({
          name: 'Molly Member', accessToken: 'testingAccessToken',
        }));
      }),
    );
    render(<App />);
    fireEvent.click(screen.getByText('Sign In'));
    userEvent.type(screen.getByPlaceholderText('Email'), 'molly@books.com');
    userEvent.type(screen.getByPlaceholderText('Password'), 'mollymember');
    userEvent.click(screen.getByText('Login'));
    await waitFor(() => screen.getByText('Molly Member'));
    userEvent.click(screen.getByText('Logout'));
  }); */

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
  }); */

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

