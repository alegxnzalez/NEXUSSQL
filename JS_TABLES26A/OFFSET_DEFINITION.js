// OFFSET_DEFINITION.js

window.OFFSET_DEFINITION = {
  "tables": {
    "OFFSET_DEFINITION": {
      "description": "This table is used to create the offset profile entries for the user company. It specifies the schedules, time periods, holiday events etc. for the entire year for the company. These entries are used by the GC3 engine when scheduling the pickup or delivery of an order",
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
        "OFFSET_DEFINITION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "is the unique identifier for offset."
},
        "OFFSET_DEFINITION_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "is the unique external identifier for  offset."
},
        "DESCRIPTION": {
          "type": "VARCHAR2(120)",
          "nullable": true,
          "info": "It describes name/purpose of the offset"
}
      },
      "fk_tables": [
        "DM_RULE_D",
        "OFFSET_DEFINITION_D",
        "OFFSET_DEFINITION_OVERRIDE"
]
    }
  }
};