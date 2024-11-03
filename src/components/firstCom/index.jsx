
import img1 from '../../assets/images/v2-9b3f958df6148a27bae8d3099df68ed8_1440w.webp'
import img2 from '../../assets/images/v2-305a0f810dcfda0af9714d85f054329d_1440w.webp'
const img3 = require('../../assets/images/v2-267217db1a16cf81a50184ea7d520289_1440w.webp')

const FirstCom = () => {
    return (
        <>
            <h3>在react页面中引入图片</h3>
            <img width={500} height={200} src={img1}></img>
            <img width={500} height={200} src={img2}></img>
            <img src={img3} />
        </>
    )
}


export default FirstCom