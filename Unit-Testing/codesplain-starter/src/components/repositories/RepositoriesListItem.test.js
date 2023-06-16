import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import RepositoriesListItem from './RepositoriesListItem';
import { MemoryRouter } from 'react-router'
import { async } from 'validate.js';

function renderComponent() {
    const repository = {
        full_name: 'facebook/react',
        language: 'JS',
        description: 'A js library',
        owner: {
          login: 'facebook',
        },
        name: 'react',
        html_url: 'https://github.com/facebook/react',
      };
    render(
    <MemoryRouter>
        <RepositoriesListItem repository={repository}  />
    </MemoryRouter>
    )

    return {repository};

}


test('Check if git hub link is rendered on screen',async ()=> {
    const repo = renderComponent();

    await screen.findByRole('img', {name: 'JS'});

    const link = screen.getByRole('link', {name: /github repository/i});
    expect(link).toHaveAttribute('href', repo.html_url);

})

test('shows a fileicon with the appropriate icon', async () => {
    const repo = renderComponent();
  
    const icon = await screen.findByRole('img', { name: 'Javascript' });
  
    expect(icon).toHaveClass('js-icon');
  });
  