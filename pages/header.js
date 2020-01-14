import Head from 'next/head'
import '../public/test.css'
import {Button} from 'antd'


function Header() {
    return (
        <>
            <Head>
                <title>技术胖太胖了!</title>
                <meta charSet='utf-8'/>
            </Head>
            <div>JSPang.com</div>

            <Button>我是按钮</Button>
        </>
    )
}

export default Header