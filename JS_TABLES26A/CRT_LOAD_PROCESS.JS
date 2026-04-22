// CRT_LOAD_PROCESS.js

window.CRT_LOAD_PROCESS = {
  "tables": {
    "CRT_LOAD_PROCESS": {
      "columns": {
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
        "CRT_LOAD_PROCESS_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
},
        "CRT_LOAD_PROCESS_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "RATE_LOAD_PROCESS_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "RATE_LOAD_PROCESS"
},
        "P_BID_ROUND_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "P_BID_ROUND"
},
        "SERVPROV_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "SERVPROV"
},
        "UPLOAD_LOG_PROCESS_ID": {
          "type": "NUMBER",
          "nullable": true
},
        "RATE_LOAD_LOG_PROCESS_ID": {
          "type": "NUMBER",
          "nullable": true
}
      },
      "fk_tables": [
        "CRT_LOAD_PROCESS_STATUS",
        "P_BID"
]
    }
  }
};