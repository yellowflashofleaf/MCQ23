import React from 'react'
import dynamic from 'next/dynamic'

const TestPage = dynamic(() => import('../../../components/Layout/TestLayout'), {
  ssr: false
})

function index() {
  return (
    <TestPage/>
  )
}

export default index