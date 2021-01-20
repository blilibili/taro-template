import Taro from '@tarojs/taro'
import { View, Image, Input } from '@tarojs/components'
import { AtCheckbox } from 'taro-ui'
import * as service from './service'
import './home.scss'

export default class Index extends Taro.Component {
  config = {
    navigationBarTitleText: '备忘录'
  }

  constructor () {
    super(...arguments)

    this.state = {
      counter: 60,
      isCanSend: true,
      content: '备忘录',
      checkedList: [],
      loginForm: {
        phone: '',
        code: '',
        loginType: 2
      }
    }
    this.checkboxOption = [{
      value: 'list1',
      label: '同意 《用户协议及隐私政策》',
      desc: ''
    }]
  }

  componentDidMount() {

  }


  render () {
    const {  } = this.state

    return (
      <View className='page page-index'>
        
      </View>
    )
  }
}
