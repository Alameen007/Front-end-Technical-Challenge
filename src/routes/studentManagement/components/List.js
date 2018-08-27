import React from 'react'
import moment from 'moment'
import { Table, Button, Popconfirm, Row, Col, Input, Icon, Divider } from 'antd'
import { Link } from 'dva/router'
import { search, upperCase, titleCase, compareFunction } from '../../../utils/util'

export class List extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      filteredList: this.props.dataSource,
      searchToken: '',
    }
  }

  componentWillReceiveProps (nextProps) {
    this.setState({
      searchToken: '',
      filteredList: nextProps.dataSource,
    })
  }

  handleSearch = (e) => {
    const filteredList = search(this.props.dataSource, e.target.value, [
      'id',
      'firstName',
      'lastName',
      'sessionOfAdmission',
    ])
    this.setState({
      searchToken: e.target.value,
      filteredList,
    })
  };

  render () {
    const { filteredList, searchToken } = this.state
    const {
      onUpdate,
      onDeleteItem,
      onAdd,
      loading,
      pagination,
      location,
      profilePage,
    } = this.props
    const columns = [
      {
        title: 'Student ID',
        dataIndex: 'studentId',
        key: 'id',
        className: 'leftAlign',
        render: (text, record) => (
          <Link to={`/profile/${record.studentId}`}>{titleCase(text)}</Link>
        ),
      },
      {
        title: 'First Name',
        dataIndex: 'firstName',
        className: 'leftAlign',
        key: 'firstName',
      },
      {
        title: 'Last Name',
        dataIndex: 'lastName',
        className: 'leftAlign',
        key: 'lastName',
      },
      {
        title: 'Session',
        dataIndex: 'sessionOfAdmission',
        className: 'leftAlign',
        key: 'sessionOfAdmission',
        render: (text, record) => {
          return record.sessionOfAdmission.sessionId
        },
      },
      {
        title: 'Gender',
        dataIndex: 'sex',
        className: 'leftAlign',
        key: 'sex',
      },
      {
        title: 'Date of Birth',
        dataIndex: 'dob',
        className: 'leftAlign',
        key: 'dob',
        render: (text) => {
          return `${moment(text)._d.getDay() + 1}-${moment(text)._d.getMonth() + 1}-${moment(text)._d.getFullYear()}`
        },
      },
      {
        title: 'Action',
        key: 'action',
        className: 'rightAlign actionColumn',
        render: (text, record) => (
          <span>
            <Button
              icon="edit"
              type="default"
              size="small"
              onClick={() => onUpdate(record)}
            >
              Edit
            </Button>
            <Divider type="vertical" />
            <Popconfirm
              title="Are you sure you want to delete？"
              okText="Yes"
              cancelText="No"
              placement="left"
              onConfirm={() => onDeleteItem(record.studentId)}
            >
              <Button icon="delete" type="danger" size="small">
                Delete
              </Button>
            </Popconfirm>
          </span>
        ),
      },
    ]
    return (
      <div>
        <Row>
          <Col style={{ marginBottom: '16px' }}>
            <Row>
              <Col span={12}>
                <Input
                  size="large"
                  style={{ width: 300 }}
                  placeholder="Search"
                  value={searchToken}
                  onChange={this.handleSearch}
                  suffix={
                    <Icon type="search" className="certain-category-icon" />
                  }
                />
              </Col>
              <Col span={4} offset={8} style={{ textAlign: 'right' }}>
                <Button onClick={onAdd} size="large" type="primary" icon="plus">
                  Add Student
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
        <Table
          pagination
          loading={loading}
          location={location}
          dataSource={filteredList}
          size="middle"
          columns={columns}
          rowKey={record => record.studentId}
          onRowClick={record => profilePage(record)}
          bordered
        />
      </div>
    )
  }
}

export default List
