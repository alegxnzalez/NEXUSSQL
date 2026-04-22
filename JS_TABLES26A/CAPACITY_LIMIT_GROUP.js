// CAPACITY_LIMIT_GROUP.js

window.CAPACITY_LIMIT_GROUP = {
  "tables": {
    "CAPACITY_LIMIT_GROUP": {
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
        "CAPACITY_LIMIT_GROUP_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
},
        "CAPACITY_LIMIT_GROUP_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "DESCRIPTION": {
          "type": "VARCHAR2(256)",
          "nullable": true
}
      },
      "fk_tables": [
        "CAPACITY_LIMIT",
        "CAPACITY_USAGE",
        "LEG_CONSOLIDATION_GROUP"
]
    }
  }
};