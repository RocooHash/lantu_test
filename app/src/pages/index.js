import styles from './index.css';
import {Link} from "umi";
import {useAsyncFn} from 'react-use';
import fly from "flyio";
import {Button} from 'antd';
import React from 'react';

export default function () {
  const [state, fetch] = useAsyncFn(async () => {
    await fly.post(
      '/jsonrpc', {
        "jsonrpc": "2.0",
        "method": "Counter.Incr",
        "params": {
          "delta": 2
        },
        "id": 1
      })
    let response = await fly.post('/jsonrpc/', {
      "jsonrpc": "2.0",
      "method": "Counter.Get",
      "params": {},
      "id": 1
    })
    return response.data
  },);
  return (
    <div className={styles.normal}>
      <div className={styles.welcome}/>
      <Link to="/a">Users Page</Link>
      {JSON.stringify(state)}
      <Button type="primary" onClick={fetch}>Get Count</Button>
    </div>
  );
}
