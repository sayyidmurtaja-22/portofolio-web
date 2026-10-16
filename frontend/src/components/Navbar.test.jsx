import React from 'react';
import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { expect, test, vi } from 'vitest';
import Navbar from './Navbar';

test('Escape closes the mobile menu, restores scrolling and returns focus', async () => {
  const user = userEvent.setup();
  render(<Navbar />);
  const toggle = screen.getByRole('button', { name: 'Toggle menu' });
  await user.click(toggle);
  expect(toggle).toHaveAttribute('aria-expanded', 'true');
  await user.keyboard('{Escape}');
  expect(toggle).toHaveAttribute('aria-expanded', 'false');
  expect(toggle).toHaveFocus();
  expect(document.body.style.overflow).toBe('');
});

test('switching to a desktop viewport releases the mobile scroll lock', async () => {
  const user = userEvent.setup();
  render(<Navbar />);
  const toggle = screen.getByRole('button', { name: 'Toggle menu' });
  await user.click(toggle);
  const media = window.matchMedia.mock.results.find(({ value }) => value.media === '(min-width: 768px)').value;
  const listener = media.addEventListener.mock.calls.find(([event]) => event === 'change')[1];
  fireEvent(window, new Event('resize'));
  act(() => listener({ matches: true }));
  await waitFor(() => expect(toggle).toHaveAttribute('aria-expanded', 'false'));
  expect(document.body.style.overflow).toBe('');
});

test('the nested contact section receives the active navigation indicator', () => {
  render(<><Navbar /><section id="resume"><div id="contact" /></section></>);
  for (const id of ['resume', 'contact']) {
    vi.spyOn(document.getElementById(id), 'getBoundingClientRect').mockReturnValue({ top: 100, bottom: 800 });
  }
  fireEvent.scroll(window);
  expect(screen.getByRole('button', { name: 'Contact', exact: true })).toHaveAttribute('aria-current', 'location');
  expect(screen.getByRole('button', { name: 'Resume', exact: true })).not.toHaveAttribute('aria-current');
});
