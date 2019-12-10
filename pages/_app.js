import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import {Provider} from 'react-redux'
import withRedux from 'next-redux-wrapper'
import reducers from '../reducers'
import thunk from 'redux-thunk'

const makeStore = (initialState = {}, options) => {
  return createStore(reducers, initialState, applyMiddleware(thunk))
}

const MyApp = ({Component, pageProps, store}) => {
	return (
		<Provider store={store}>
      <Component {...pageProps} />
	  </Provider>
	)
}

MyApp.getInitialProps = async ({Component, ctx}) => {
	const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {}
  return {pageProps}
}

export default withRedux(makeStore)(MyApp)