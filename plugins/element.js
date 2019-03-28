import Vue from 'vue'
import { Button, Input, Select, Option, Loading, Message, Table, TableColumn, Dialog, Popover, Pagination, Tooltip } from 'element-ui'
export default () => {
  Vue.use(Button)
  Vue.use(Input)
  Vue.use(Select)
  Vue.use(Option)
  Vue.use(Loading)
  Vue.use(Table)
  Vue.use(Pagination)
  Vue.prototype.$message = Message
  Vue.component(Message.name, Message)
  Vue.component(TableColumn.name, TableColumn)
  Vue.component(Dialog.name, Dialog)
  Vue.component(Popover.name, Popover)
  Vue.component(Tooltip.name, Tooltip)
}
