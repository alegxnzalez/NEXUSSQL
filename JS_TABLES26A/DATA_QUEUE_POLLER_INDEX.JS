// DATA_QUEUE_POLLER_INDEX.js

window.DATA_QUEUE_POLLER_INDEX = {
  "tables": {
    "DATA_QUEUE_POLLER_INDEX": {
      "description": "Defines an index required by the poller for efficient performance. If the index does not exist, GC3 throws an exception when then poller thread group is initialized.",
      "columns": {
        "DATA_QUEUE_POLLER_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "DATA_QUEUE_POLLER",
          "info": "Poller requiring the index"
},
        "DATA_QUEUE_INDEX_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "DATA_QUEUE_INDEX",
          "info": "Index ID"
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
},
        "OTM_RELEASE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "OTM_RELEASE"
}
      },
      "fk_tables": []
    }
  }
};