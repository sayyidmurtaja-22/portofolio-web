import React from 'react';
import { render, screen } from '@testing-library/react';
import { expect, test, vi } from 'vitest';
import Resume from './Resume';

test('contact offers direct email when no delivery API is configured', () => {
  vi.stubEnv('VITE_API_URL', '');
  render(<Resume />);
  expect(screen.getByRole('link', { name: 'Email Me' })).toHaveAttribute('href', 'mailto:sayyid.tw@gmail.com');
  expect(screen.queryByRole('button', { name: 'Send Message' })).not.toBeInTheDocument();
  vi.unstubAllEnvs();
});
