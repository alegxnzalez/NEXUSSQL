// RATE_LOAD_FIELD_MASTER_PK.js

window.RATE_LOAD_FIELD_MASTER_PK = {
  "tables": {
    "RATE_LOAD_FIELD_MASTER_PK": {
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
        "TABLE_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "key_value": true
},
        "COLUMN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "key_value": true
},
        "PK_ORDER": {
          "type": "NUMBER",
          "nullable": false,
          "info": "PK order of the columns."
}
      },
      "fk_tables": []
    }
  }
};