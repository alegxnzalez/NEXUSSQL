// POWER_UNIT_TYPE.js

window.POWER_UNIT_TYPE = {
  "tables": {
    "POWER_UNIT_TYPE": {
      "description": "Define Power Unit types. Power Unit Types' other attributes can be defined in PU_TYPE_SPECIAL_SERVICE table and/or PU_TYPE_REMARK table.",
      "columns": {
        "POWER_UNIT_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "Power Unit Type, Primary key of the table."
},
        "POWER_UNIT_TYPE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "DESCRIPTION": {
          "type": "VARCHAR2(100)",
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
        "POWER_UNIT",
        "PU_TYPE_REMARK",
        "PU_TYPE_SPECIAL_SERVICE"
]
    }
  }
};