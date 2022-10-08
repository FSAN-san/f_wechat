import { createPage } from '../../util/other'

interface IData {
  num: number
}
interface IMethods {
  setNum(): void
}
createPage<IData, IMethods>({
  data: {
    num: 0
  },
  methods: {
    setNum () {
      console.log(this);
    }
  },
  onReady() {
    console.log('页面初次加载完毕');
  },
  onLoad() {
    console.log('页面正在加载');
  },
  onShow() {
    console.log('页面已打开');
  }
})