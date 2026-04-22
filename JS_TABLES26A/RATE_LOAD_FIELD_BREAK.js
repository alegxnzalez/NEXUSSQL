// RATE_LOAD_FIELD_BREAK.js

window.RATE_LOAD_FIELD_BREAK = {
  "tables": {
    "RATE_LOAD_FIELD_BREAK": {
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
        "RATE_LOAD_FIELD_BREAK_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
},
        "RATE_LOAD_FIELD_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "RATE_LOAD_FIELD",
          "info": "Reference to rate load field GID."
},
        "PK_VALUE": {
          "type": "VARCHAR2(400)",
          "nullable": false,
          "info": "Created sourcing cost PK value."
},
        "RATE_LOAD_FIELD_BREAK_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "GC3 Unique identifier for the entity. Is used for creating the GID."
}
      },
      "fk_tables": [
        "RATE_LOAD_D_BREAKS"
]
    }
  }
};