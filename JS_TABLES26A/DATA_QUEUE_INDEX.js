// DATA_QUEUE_INDEX.js

window.DATA_QUEUE_INDEX = {
  "tables": {
    "DATA_QUEUE_INDEX": {
      "description": "Defines an index potentially required by a data queue poller",
      "columns": {
        "DATA_QUEUE_INDEX_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "Index ID"
},
        "DATA_QUEUE_INDEX_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "TABLE_NAME": {
          "type": "VARCHAR2(30)",
          "nullable": false,
          "info": "Oracle table holding the index"
},
        "INDEX_DESCRIPTION": {
          "type": "VARCHAR2(500)",
          "nullable": true,
          "info": "Detailed description of the index's use"
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
      "fk_tables": [
        "DATA_QUEUE_INDEX_COL",
        "DATA_QUEUE_POLLER_INDEX"
]
    }
  }
};