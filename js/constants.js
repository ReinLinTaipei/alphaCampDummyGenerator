const names = {
  engineer: '工程師',
  designer: '設計師',
  entrepreneur: '創業家'
}
const styles = {
  engineer: 'text-white bg-success',
  designer: 'text-white bg-warning',
  entrepreneur: 'text-white bg-primary',
  dummy: 'text-white bg-dark',
  submit: 'btn-outline-danger'
}
const task = {
  engineer: ['加個按鈕', '加新功能', '切個版', '改一點code', '新增語系'],
  designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '換個顏色'],
  entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']
}
const phrase = ['很簡單', '很容易', '很快', '很基本', '沒問題', '這是你的專業']
const path = 'https://assets-lighthouse.s3.amazonaws.com/uploads/image/file'
const careers = [
  { career: 'engineer', image: `${path}/5668/angry-developer.jpg` },
  { career: 'designer', image: `${path}/5667/angry-designer.jpg` },
  { career: 'entrepreneur', image: `${path}/5669/angry-founder.jpg` }
]

module.exports = {
  names,
  task,
  phrase,
  careers,
  styles
}
