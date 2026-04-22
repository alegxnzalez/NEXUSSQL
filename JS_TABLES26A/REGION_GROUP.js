// REGION_GROUP.js

window.REGION_GROUP = {
  "tables": {
    "REGION_GROUP": {
      "columns": {
        "REGION_GROUP_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
},
        "REGION_GROUP_XID": {
          "type": "VARCHAR2(50)",
          "nullable": true
},
        "REGION_GROUP_NAME": {
          "type": "VARCHAR2(120)",
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
        "CR_FLEET",
        "CR_PROJECT",
        "RATE_OFFERING",
        "REGION_GROUP_D"
]
    }
  }
};