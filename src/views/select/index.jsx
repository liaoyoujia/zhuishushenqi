import React, { Component } from 'react'
import { Row, Col, Select, Form, Input, Button, Table } from 'antd'
import './index.css'
const FormItem = Form.Item
const Option = Select.Option

class index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pageNum: 1,
      tableData: []
    }
  }
  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <div className="product">
        <Row gutter={10}>
          <Col span={8}>
            <Row gutter={10}>
              <Form>
                <Col span={12}>
                  <FormItem>
                    {getFieldDecorator('searchType', {
                      initialValue: 'productName'
                    })(
                      <Select>
                        <Option value="productName">按商品名称</Option>
                        <Option value="productId">按商品ID</Option>
                      </Select>
                    )}
                  </FormItem>
                </Col>
                <Col span={12}>
                  <FormItem>
                    {getFieldDecorator('key', {
                      initialValue: '',
                      rules: [
                        {
                          required: true,
                          message: '请输入需要搜索的值'
                        }
                      ]
                    })(<Input placeholder="请输入需要搜索的值" />)}
                  </FormItem>
                </Col>
              </Form>
            </Row>
          </Col>
          <Button
            className="search-btn"
            icon="search"
            type="primary"
            // onClick={handleSearch}
          >
            搜索
          </Button>
          <Button
            icon="reload"
            // onClick={resetForm}
          >
            重置
          </Button>
          <Button type="dashed" className="add-product" icon="plus">
            添加商品
          </Button>
        </Row>
        <RenderTable />
      </div>
    )
  }
}
const RenderTable = () => {
  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      render: text => <a href="javascript:;">{text}</a>
    },
    {
      title: '商品名称',
      dataIndex: 'name'
    },
    {
      title: '价格',
      dataIndex: 'price'
    },
    {
      title: '状态',
      dataIndex: 'status',
      render: status => {
        const onSale = status === 1
        return <div>{onSale ? '在售' : '下架'}</div>
      }
    },
    {
      title: '操作',
      dataIndex: 'operate'
    }
  ]
  const data = [
    {
      key: '1',
      name: 'John ',
      id: 32,
      price: 1900,
      status: 1,
      operate: '上架'
    },
    {
      key: '2',
      name: 'John ',
      id: 32,
      price: 1600,
      status: 2,
      operate: '上架'
    },
    {
      key: '3',
      name: 'John ',
      id: 32,
      price: 1500,
      status: 3,
      operate: '上架'
    },
    {
      key: '4',
      name: 'John ',
      id: 32,
      price: 1300,
      status: 4,
      operate: '上架'
    },
    {
      key: '5',
      name: 'John ',
      id: 32,
      price: 1200,
      status: 1,
      operate: '上架'
    }
  ]

  // rowSelection object indicates the need for row selection
  const rowSelection = {
    type: 'radio',
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        'selectedRows: ',
        selectedRows
      )
    },
    getCheckboxProps: record => ({
      disabled: record.name === 'Disabled User', // Column configuration not to be checked
      name: record.name
    })
  }
  return (
    <Table
      rowSelection={rowSelection}
      bordered
      columns={columns}
      dataSource={data}
    />
  )
}
const WrappedHorizontalLoginForm = Form.create()(index)

export default WrappedHorizontalLoginForm
