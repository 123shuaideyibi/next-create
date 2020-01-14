import React from 'react'
import Link from 'next/link'
import Router from 'next/router'

const Home = () => {
  // routeChangeStart、routeChangeComplete、beforeHistoryChange、
  // hashChangeStart、hashChangeComplete

  Router.events.on('routeChangeStart', (...args) => {
    console.log('1.routeChangeStart->路由开始变化，参数为：', ...args)
  })

  Router.events.on('routeChangeComplete', (...args) => {
    console.log('2.routeChangeComplete->路由变化结束，参数为：', ...args)
  })

  Router.events.on('beforeHistoryChange', (...args) => {
    console.log('3.beforeHistoryChange->浏览器history触发之前，参数为：', ...args)
  })

  Router.events.on('routeChangeError', (...args) => {
    console.log('4.routeChangeError->路由发生错误，参数为：', ...args)
  })


  Router.events.on('hashChangeStart', (...args) => {
    console.log('5.hashChangeStart->hash开始变化，参数为：', ...args)
  })

  Router.events.on('hashChangeComplete', (...args) => {
    console.log('6.hashChangeComplete->hash结束变化，参数为：', ...args)
  })

  return (
    <>
      <div>我是首页</div>
      <Link href={{ pathname: '/xiaojiejie', query: { name: '结衣' } }}><a>选择结衣</a></Link><br />
      <Link href='/xiaojiejie?name=井空'><a>选择井空</a></Link><br/>

      {/* 关键代码 */}
      <Link href='#jspang'><a>选技术胖</a></Link>
    </>
  )
}


export default Home
