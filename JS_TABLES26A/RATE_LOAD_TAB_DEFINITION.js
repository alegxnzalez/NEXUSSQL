// RATE_LOAD_TAB_DEFINITION.js

window.RATE_LOAD_TAB_DEFINITION = {
  "tables": {
    "RATE_LOAD_TAB_DEFINITION": {
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
        "RATE_LOAD_TAB_DEFINITION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
},
        "RATE_LOAD_TAB_DEFINITION_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "GC3 Unique identifier for the entity. Is used for creating the GID."
},
        "TAB_SEQUENCE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Defines the sequence in which this tab will be displayed in the rate load definition."
},
        "TEMPLATE_RATE_GEO_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "RATE_GEO",
          "info": "Defines template rate geo for the given rate load definition."
},
        "IS_INCLUDE": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "Defines whether the rate geo is included in the rate load definition."
},
        "RATE_LOAD_DEFINITION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "RATE_LOAD_DEFINITION",
          "info": "Reference to rate load definition GID."
}
      },
      "fk_tables": [
        "RATE_LOAD_TEMPLATE_RR_D"
]
    }
  }
};