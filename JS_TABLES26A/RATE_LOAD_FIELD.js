// RATE_LOAD_FIELD.js

window.RATE_LOAD_FIELD = {
  "tables": {
    "RATE_LOAD_FIELD": {
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
        "RATE_LOAD_FIELD_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
},
        "RATE_LOAD_FIELD_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "GC3 Unique identifier for the entity. Is used for creating the GID."
},
        "PK_VALUE": {
          "type": "VARCHAR2(400)",
          "nullable": true
},
        "RATE_LOAD_FIELD_MASTER_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "RATE_LOAD_FIELD_MASTER",
          "info": "Reference GID to rate load field master."
},
        "REF_PK_VALUE": {
          "type": "VARCHAR2(400)",
          "nullable": true
}
      },
      "fk_tables": [
        "P_CRT_CONFIG_D",
        "RATE_LOAD_CONFIG_D",
        "RATE_LOAD_DATA_D",
        "RATE_LOAD_FIELD_BREAK",
        "RATE_LOAD_TEMPLATE_RO_D",
        "RATE_LOAD_TEMPLATE_RR_D"
]
    }
  }
};