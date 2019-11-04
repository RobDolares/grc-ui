/*******************************************************************************
 * Licensed Materials - Property of IBM
 * (c) Copyright IBM Corporation 2018, 2019. All Rights Reserved.
 *
 * Note to U.S. Government Users Restricted Rights:
 * Use, duplication or disclosure restricted by GSA ADP Schedule
 * Contract with IBM Corp.
 *******************************************************************************/
'use strict'

import React from 'react'
import { ResourceTable } from '../../../../src-web/components/common/ResourceTable'
import renderer from 'react-test-renderer'
import { BrowserRouter } from 'react-router-dom'
import * as reducers from '../../../../src-web/reducers'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import apolloClient from '../../../../lib/client/apollo-client'
import { ApolloProvider } from 'react-apollo'
import { Provider } from 'react-redux'
import { resourceType, itemIds, items, staticResourceData } from './CommonTestingData'

describe('ResourceTable no search', () => {
  it('renders as expected', () => {
    const fn = jest.fn()
    const preloadedState = window.__PRELOADED_STATE__
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    const middleware = [thunkMiddleware]
    const store = createStore(combineReducers(reducers), preloadedState, composeEnhancers(
      applyMiddleware(...middleware)
    ))
    const history = {
      'length': 50,
      'action': 'POP',
      'location': {
        'pathname': '/multicloud/policies/all',
        'search': '',
        'hash': '',
        'key': 's4wxvc'
      }
    }
    const component = renderer.create(
      <ApolloProvider client={apolloClient.getClient()}>
        <Provider store={store}>
          <BrowserRouter>
            <ResourceTable
              staticResourceData={staticResourceData}
              page={1}
              pageSize={10}
              sortDirection={'asc'}
              handleSort={fn}
              totalFilteredItems={13}
              changeTablePage={fn}
              handleSearch={fn}
              searchValue={''}
              items={items}
              itemIds={itemIds}
              expandableTable={true}
              listSubItems={true}
              placeHolderText={'Search policies'}
              highLightRowName={''}
              history={history}
              resourceType={resourceType}
            />
          </BrowserRouter>
        </Provider>
      </ApolloProvider>
    )
    expect(component.toJSON()).toMatchSnapshot()
  })
})

describe('ResourceTable no search', () => {
  it('renders as expected', () => {
    const fn = jest.fn()
    const preloadedState = window.__PRELOADED_STATE__
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    const middleware = [thunkMiddleware]
    const store = createStore(combineReducers(reducers), preloadedState, composeEnhancers(
      applyMiddleware(...middleware)
    ))
    const history = {
      'length': 50,
      'action': 'POP',
      'location': {
        'pathname': '/multicloud/policies/all',
        'search': '',
        'hash': '',
        'key': 's4wxvc'
      }
    }
    const component = renderer.create(
      <ApolloProvider client={apolloClient.getClient()}>
        <Provider store={store}>
          <BrowserRouter>
            <ResourceTable
              staticResourceData={staticResourceData}
              page={1}
              pageSize={10}
              sortDirection={'asc'}
              handleSort={fn}
              totalFilteredItems={13}
              changeTablePage={fn}
              handleSearch={fn}
              searchValue={''}
              items={items}
              itemIds={itemIds}
              expandableTable={true}
              listSubItems={true}
              placeHolderText={'Search policies'}
              highLightRowName={''}
              history={history}
              resourceType={resourceType}
            />
          </BrowserRouter>
        </Provider>
      </ApolloProvider>
    )
    expect(component.toJSON()).toMatchSnapshot()
  })
})

describe('ResourceTable with search', () => {
  it('renders as expected', () => {
    const fn = jest.fn()
    const preloadedState = window.__PRELOADED_STATE__
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    const middleware = [thunkMiddleware]
    const store = createStore(combineReducers(reducers), preloadedState, composeEnhancers(
      applyMiddleware(...middleware)
    ))
    const history = {
      'length': 50,
      'action': 'POP',
      'location': {
        'pathname': '/multicloud/policies/all',
        'search': '',
        'hash': '',
        'key': 's4wxvc'
      }
    }
    const component = renderer.create(
      <ApolloProvider client={apolloClient.getClient()}>
        <Provider store={store}>
          <BrowserRouter>
            <ResourceTable
              staticResourceData={staticResourceData}
              page={1}
              pageSize={10}
              sortDirection={'asc'}
              handleSort={fn}
              totalFilteredItems={13}
              changeTablePage={fn}
              handleSearch={fn}
              searchValue={'policy'}
              items={items}
              itemIds={itemIds}
              expandableTable={true}
              listSubItems={true}
              placeHolderText={'Search policies'}
              highLightRowName={''}
              history={history}
              resourceType={resourceType}
            />
          </BrowserRouter>
        </Provider>
      </ApolloProvider>
    )
    expect(component.toJSON()).toMatchSnapshot()
  })
})

describe('ResourceTable not expandable', () => {
  it('renders as expected', () => {
    const fn = jest.fn()
    const preloadedState = window.__PRELOADED_STATE__
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    const middleware = [thunkMiddleware]
    const store = createStore(combineReducers(reducers), preloadedState, composeEnhancers(
      applyMiddleware(...middleware)
    ))
    const history = {
      'length': 50,
      'action': 'POP',
      'location': {
        'pathname': '/multicloud/policies/all',
        'search': '',
        'hash': '',
        'key': 's4wxvc'
      }
    }
    const component = renderer.create(
      <ApolloProvider client={apolloClient.getClient()}>
        <Provider store={store}>
          <BrowserRouter>
            <ResourceTable
              staticResourceData={staticResourceData}
              page={1}
              pageSize={20}
              sortDirection={'asc'}
              handleSort={fn}
              totalFilteredItems={13}
              changeTablePage={fn}
              handleSearch={fn}
              searchValue={'policy'}
              items={items}
              itemIds={itemIds}
              expandableTable={false}
              listSubItems={false}
              placeHolderText={'Search policies'}
              highLightRowName={''}
              history={history}
              resourceType={resourceType}
            />
          </BrowserRouter>
        </Provider>
      </ApolloProvider>
    )
    expect(component.toJSON()).toMatchSnapshot()
  })
})