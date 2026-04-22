// THRESHOLD.js

window.THRESHOLD = {
  "tables": {
    "THRESHOLD": {
      "description": "This table stores different thresholds",
      "columns": {
        "THRESHOLD_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
},
        "THRESHOLD_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "DATA_QUERY_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "DATA_QUERY_TYPE"
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
        "AGENT",
        "COMPLEX_EXPRESSION_DETAIL",
        "THRESHOLD_PROFILE_D",
        "THRESHOLD_VALUE"
]
    }
  }
};