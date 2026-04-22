// P_S_SHIP_UNIT_LINE.js

window.P_S_SHIP_UNIT_LINE = {
  "tables": {
    "P_S_SHIP_UNIT_LINE": {
      "description": "This table is used to capture ship unit lines for Sourcing.",
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
        "P_S_SHIP_UNIT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "P_S_SHIP_UNIT",
          "info": "Sourcing ship unit id."
},
        "S_SHIP_UNIT_LINE_NO": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true,
          "info": "Souring ship unit line number."
},
        "NMFC_CLASS_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "NMFC_CLASS",
          "info": "This refers to the standard NMFC class ids."
},
        "WEIGHT": {
          "type": "NUMBER",
          "nullable": true,
          "info": "ship unit line weight."
},
        "WEIGHT_BASE": {
          "type": "NUMBER",
          "nullable": true
},
        "WEIGHT_UOM_CODE": {
          "type": "VARCHAR2(101)",
          "nullable": true
}
      },
      "fk_tables": []
    }
  }
};