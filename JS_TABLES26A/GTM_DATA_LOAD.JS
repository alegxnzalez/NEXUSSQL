// GTM_DATA_LOAD.js

window.GTM_DATA_LOAD = {
  "tables": {
    "GTM_DATA_LOAD": {
      "description": "GTM Data Load status and results.",
      "columns": {
        "GTM_DATA_LOAD_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
},
        "GTM_DATA_LOAD_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "GTM_DATA_LOAD_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "GTM_DATA_LOAD_TYPE"
},
        "GTM_DATA_VERSION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_DATA_VERSION"
},
        "LOAD_TYPE": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
                    "F",
                    "P"
          ]
},
        "STATUS": {
          "type": "VARCHAR2(30)",
          "nullable": true
},
        "NUM_RECORDS": {
          "type": "NUMBER(10)",
          "nullable": true
},
        "NUM_PROCESSED": {
          "type": "NUMBER(10)",
          "nullable": true
},
        "NUM_ERRORS": {
          "type": "NUMBER(10)",
          "nullable": true
},
        "LOG_PROCESS_ID": {
          "type": "NUMBER",
          "nullable": true
},
        "START_TIME": {
          "type": "DATE",
          "nullable": true
},
        "END_TIME": {
          "type": "DATE",
          "nullable": true
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
        "GTM_CONTENT_SET_D",
        "GTM_DATA_LOAD_ATTRIBUTE",
        "GTM_DATA_LOAD_DETAIL"
]
    }
  }
};