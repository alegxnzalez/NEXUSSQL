// APP_SERVER_DATA_QUEUE_DEF.js

window.APP_SERVER_DATA_QUEUE_DEF = {
  "tables": {
    "APP_SERVER_DATA_QUEUE_DEF": {
      "description": "Directs data queue workload to specific SCA clusters",
      "columns": {
        "APP_SERVER_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "APP_SERVER",
          "info": "Cluster handling the data queue"
},
        "DATA_QUEUE_DEF_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "DATA_QUEUE_DEF",
          "info": "Data queue"
},
        "LOAD_BALANCE_THREADS": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "If N, the number of polling threads should be based only on the data queue thread count. If Y, it should take into account the load balance weight of the particular cluster machine (i.e. # = thread count * load balance weight)"
},
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "INSERT_USER": {
          "type": "VARCHAR2(128)",
          "nullable": false
},
        "INSERT_DATE": {
          "type": "DATE",
          "nullable": false
},
        "UPDATE_USER": {
          "type": "VARCHAR2(128)",
          "nullable": true
},
        "UPDATE_DATE": {
          "type": "DATE",
          "nullable": true
}
      },
      "fk_tables": []
    }
  }
};