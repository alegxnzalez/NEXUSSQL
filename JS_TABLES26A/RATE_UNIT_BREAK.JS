// RATE_UNIT_BREAK.js

window.RATE_UNIT_BREAK = {
  "tables": {
    "RATE_UNIT_BREAK": {
      "columns": {
        "RATE_UNIT_BREAK_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
},
        "RATE_UNIT_BREAK_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "RATE_UNIT_BREAK_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "RATE_UNIT_BREAK_PROFILE"
},
        "RATE_UNIT_BREAK_MAX": {
          "type": "VARCHAR2(101)",
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
        "ACCESSORIAL_COST_UNIT_BREAK",
        "RATE_GEO_COST_UNIT_BREAK"
]
    }
  }
};