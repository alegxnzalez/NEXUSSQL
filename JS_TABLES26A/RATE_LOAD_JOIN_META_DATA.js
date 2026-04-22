// RATE_LOAD_JOIN_META_DATA.js

window.RATE_LOAD_JOIN_META_DATA = {
  "tables": {
    "RATE_LOAD_JOIN_META_DATA": {
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
        "JOIN_ITEM": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
},
        "TABLE_NAME1": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "key_value": true
},
        "TABLE_NAME2": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "key_value": true
},
        "COLUMN_NAME1": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "key_value": true
},
        "COLUMN_NAME2": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "key_value": true
}
      },
      "fk_tables": []
    }
  }
};