import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { test } from 'node:test'

const app = readFileSync(new URL('../src/App.jsx', import.meta.url), 'utf8')
const index = readFileSync(new URL('../index.html', import.meta.url), 'utf8')

test('home page exposes the required ASC sections and calls to action', () => {
  for (const expected of [
    'Ensemble, bougeons Ablon-sur-Seine.',
    'Notre mission',
    'Activités',
    'Adhésion',
    'Vie locale',
    'Contact',
    '25€',
    '35€',
  ]) {
    assert.match(app, new RegExp(expected.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')))
  }
})

test('page metadata is configured for the association', () => {
  assert.match(index, /<html lang="fr">/)
  assert.match(index, /ASC Ablon-sur-Seine/)
})
