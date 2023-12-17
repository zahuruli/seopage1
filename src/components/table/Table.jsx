import React, { useEffect, useState } from 'react';
import qs from 'qs';
import { Table } from 'antd';
import axios from 'axios';
const columns = [
  {
    title: '#',
    dataIndex: 'id',
    sorter: true,
    width: '4vw',
  },
  {
    title: 'Name',
    dataIndex: 'client_name',
    sorter: true,
    width: '5vw',
  },
  {
    title: 'Project Link',
    dataIndex: 'project_link',
    sorter: true,
    width: '5vw',
  },
  {
    title: 'Project Id',
    dataIndex: 'project_id',
    sorter: true,
    width: '5vw',
  },
  {
    title: 'Project Budget',
    dataIndex: 'value',
    sorter: true,
    width: '5vw',
  },
  {
    title: 'Bid Value',
    dataIndex: 'bid_value',
    sorter: true,
    width: '5vw',
  },
  {
    title: 'Created',
    dataIndex: '',
    sorter: true,
    width: '5vw',
  },
  {
    title: 'Craeted By',
    dataIndex: 'added_by',
    sorter: true,
    width: '5vw',
  },
  {
    title: 'Bidding Delay Time',
    dataIndex: 'bidding_minutes'+'min'+'bidding_seconds'+'sec',
    sorter: true,
    width: '5vw',
  },
  {
    title: 'Status',
    dataIndex: 'deal_status',
    sorter: true,
    width: '5vw',
  },

  {
    title: 'Action',
    dataIndex: 'client_name',
    sorter: true,
    width: '5vw',
  },


];
const getRandomuserParams = (params) => ({
  results: params.pagination?.pageSize,
  page: params.pagination?.current,
  ...params,
});
const TableComponent = () => {
    const apiUrl = 'https://erp.seopage1.net/api/leads';
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [tableParams, setTableParams] = useState({
    pagination: {
      current: 1,
      pageSize: 10,
    },
  });

  //data fetching:
  const dataFetch = async () => {
    try {
      const { data } = await axios.get(apiUrl)
      if (data) {
        setData(data.data)
      }
      setLoading(false);
      setTableParams({
        ...tableParams,
        pagination: {
          ...tableParams.pagination,
          total: data.data.length,
        },
      });

    } catch (error) {
      console.log('Error while fetching data')
    }
  }



//   const fetchData = () => {
//     setLoading(true);
//     fetch(apiUrl)
//       .then((res) => res.json())
//       .then(({ results }) => {
//         setData(results.data);
//         setLoading(false);
//         setTableParams({
//           ...tableParams,
//           pagination: {
//             ...tableParams.pagination,
//             total: 200,
//           },
//         });
//       });
//   };

  useEffect(() => {
    dataFetch();
  }, [JSON.stringify(tableParams)]);

  const handleTableChange = (pagination, filters, sorter) => {
    setTableParams({
      pagination,
      filters,
      ...sorter,
    });

    // `dataSource` is useless since `pageSize` changed
    if (pagination.pageSize !== tableParams.pagination?.pageSize) {
      setData([]);
    }
  };

  return (
    <Table
      columns={columns}
    //   rowKey={(record) => record.login.uuid}
      dataSource={data}
      pagination={tableParams.pagination}
      loading={loading}
      onChange={handleTableChange}
    />
  );
};
export default TableComponent;