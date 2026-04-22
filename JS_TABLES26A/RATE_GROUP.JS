// RATE_GROUP.js

window.RATE_GROUP = {
  "tables": {
    "RATE_GROUP": {
      "description": "The list of values for rate types.  For example, the rates might be standard, or they might be the carrier's special discount rate.  This table is referred to in the RATE_OFFERING table. Example: standard, discount",
      "columns": {
        "RATE_GROUP_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,'.' and XID."
},
        "RATE_GROUP_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "GC3 Unique identifier for the entity. Is used for creating the GID"
},
        "RATE_GROUP_NAME": {
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
        "RATE_OFFERING"
]
    }
  }
};