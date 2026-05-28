import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { test } from 'node:test'

const app = readFileSync(new URL('../src/App.jsx', import.meta.url), 'utf8')
const index = readFileSync(new URL('../index.html', import.meta.url), 'utf8')

test('home page exposes the required ASC premium sections and calls to action', () => {
  for (const expected of [
    'Un club local pour faire bouger toutes les générations.',
    'Sport, nature & convivialité',
    'Notre mission',
    'Activités',
    'Adhésion',
    'Vie locale',
    'Contact',
    'Rejoindre l’association',
    '25€',
    '35€',
    '/logo-asc.png',
  ]) {
    assert.match(app, new RegExp(expected.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')))
  }
})

test('page metadata and favicon are configured for the association', () => {
  assert.match(index, /<html lang="fr">/)
  assert.match(index, /ASC Ablon-sur-Seine/)
  assert.match(index, /favicon\.ico/)
  assert.match(index, /favicon-32x32\.png/)
  assert.match(index, /apple-touch-icon\.png/)
})
