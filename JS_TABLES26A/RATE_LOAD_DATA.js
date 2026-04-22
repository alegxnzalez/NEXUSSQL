// RATE_LOAD_DATA.js

window.RATE_LOAD_DATA = {
  "tables": {
    "RATE_LOAD_DATA": {
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
        "RATE_LOAD_DATA_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
},
        "RATE_LOAD_DATA_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "RATE_LOAD_CONFIG_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false
},
        "RATE_GEO_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "RATE_GEO"
},
        "RATE_OFFERING_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "RATE_OFFERING"
},
        "RATE_LOAD_PROCESS_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "RATE_LOAD_PROCESS"
},
        "RATE_LOAD_MESSAGE": {
          "type": "VARCHAR2(300)",
          "nullable": true
},
        "MARKED_FOR_PURGE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "info": "this column will identifies the rows which will be purged"
}
      },
      "fk_tables": [
        "RATE_LOAD_DATA_D",
        "RATE_LOAD_DATA_STATUS",
        "RATE_LOAD_D_BREAKS"
]
    }
  }
};