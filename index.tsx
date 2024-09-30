import React, { useEffect, useState } from "react";
import { Drawer, Table, Input, Alert, Form, Col, Row } from "doraemon";
import { ColumnProps } from "@zcy/doraemon/lib/table/interface";
import { WrappedFormUtils } from "@zcy/doraemon/lib/form/Form";
import "./style.less";

const FormItem = Form.Item;
const Search = Input.Search;

const formItemLayout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

interface PorpsType<T> {
  colums: ColumnProps<T>; // 表格列表
  dataSource: T; // 表格数据
  form: WrappedFormUtils; // form
  title?: string;
  visible?: boolean; // 弹窗开关
  alterMessage?: string; // 提示信息
  searchPlaceholder?: string; // 搜索框占位符
  assignNumber?: number; // 采购任务编号
  showAssignForm?: boolean; // 展示任务编号和名称
  showForm?: boolean; // 展示任务编号和名称
  /**
   * 例如：colums某项的key为content，且需要搜索该列的内容
   * 只需要过滤dataSource的内容，返回对应的数组
   * 组件内部会依据该数组进行setState
   * */
  onSearch?: (value: string) => T[]; // 搜索
  onClose?: () => void;
  onOk?: () => void;
}

const columns = [
  {
    title: "采购内容",
    dataIndex: "type",
    key: "type",
  },
  {
    title: "单价（元）",
    dataIndex: "no",
    key: "no",
  },
  {
    title: "数量",
    dataIndex: "way",
    key: "way",
  },
];

const dataSource = [
  {
    no: "1289302213",
    type: "采购1",
    way: "现金",
    status: "已完成",
    createDate: "2019-10-22",
    creater: "李四",
  },
  {
    no: "132131231",
    type: "采购2",
    way: "支付宝",
  },
];

const ChoiceGoodsModal: React.FC<PorpsType<any>> = (props) => {
  const {
    title,
    form,
    showForm = true,
    assignNumber = 121321312,
    visible = true,
    searchPlaceholder,
    alterMessage = "仅相同采购方式的采购内容合并创建任务",
    onClose,
    onOk,
    // dataSource
  } = props;
  const { getFieldDecorator } = props.form;
  const [tableData, setTableData] = useState<any[]>([]);
  const [select, setSelect] = useState<{
    rowKeys: any[];
    rows: string[];
  }>({
    rowKeys: [],
    rows: [],
  });

  useEffect(() => {
    setTableData(dataSource);
  }, [props]);

  function selectChange(rowKeys, rows) {
    setSelect({ rowKeys, rows });
  }

  function onSearch(value) {
    if (props?.onSearch) {
      const res = props?.onSearch(value);
      setTableData(res);
    } else {
      setTableData(dataSource.filter((item) => item.type.includes(value)));
    }
  }

  function handleOk() {
    /**
     *  任务名称：form.getFieldValue('assing')
     *  选择项：select.rows
     * */
  }

  function tableHeader() {
    return (
      <div className="table-header">
        <div className="slelect-num">
          已选择 <span style={{ fontWeight: 700 }}>{select.rows.length}</span>{" "}
          项
        </div>
        <Search
          placeholder={searchPlaceholder || "请输入"}
          onSearch={onSearch}
        />
      </div>
    );
  }

  return (
    <Drawer
      visible={visible}
      title={title || "取消采购"}
      width={640}
      style={{ overflow: "scroll" }}
      openConfirmBtn
      onClose={onClose}
      onCancel={onClose}
      onOk={handleOk}
    >
      <div className="choice-table">
        {alterMessage ? (
          <Alert
            className="alert"
            message={alterMessage}
            type="info"
            showIcon={true}
          />
        ) : null}
        {showForm ? (
          <Form layout="horizontal">
            <Row>
              <Col span={12}>
                <FormItem label="任务名称" {...formItemLayout}>
                  {getFieldDecorator("assing", {
                    rules: [{ required: true, message: "请输入采购名称" }],
                  })(<Input style={{ width: "180px" }} placeholder="请输入" />)}
                </FormItem>
              </Col>
              <Col span={12}>
                {assignNumber && (
                  <FormItem label="任务编号" {...formItemLayout}>
                    {assignNumber}
                  </FormItem>
                )}
              </Col>
            </Row>
          </Form>
        ) : null}
        <Table
          rowKey="no"
          columns={columns}
          rowSelection={{
            selectedRowKeys: select.rowKeys,
            onChange: selectChange,
          }}
          title={tableHeader}
          dataSource={tableData}
          pagination={false}
        />
      </div>
    </Drawer>
  );
};

export default Form.create()(ChoiceGoodsModal);
