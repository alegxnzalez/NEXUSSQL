// CONSOL_GROUP.js

window.CONSOL_GROUP = {
  "tables": {
    "CONSOL_GROUP": {
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
        "CONSOL_GROUP_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "The GID for the consol_group."
},
        "CONSOL_GROUP_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "The XID for the consol_group."
},
        "MAX_NUM_EQUIPMENT": {
          "type": "NUMBER",
          "nullable": false,
          "info": "Maximum number of equipment for all the consols with this consol group."
},
        "MAX_WEIGHT": {
          "type": "NUMBER",
          "nullable": false,
          "info": "Maximum weight for all the consols with this consol group."
},
        "MAX_WEIGHT_BASE": {
          "type": "NUMBER",
          "nullable": false
},
        "MAX_WEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": false
},
        "MAX_VOLUME": {
          "type": "NUMBER",
          "nullable": false,
          "info": "Maximum volume for all the consols with this consol group."
},
        "MAX_VOLUME_BASE": {
          "type": "NUMBER",
          "nullable": false
},
        "MAX_VOLUME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": false
},
        "EQUIPMENT_REFERENCE_UNIT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "EQUIPMENT_REFERENCE_UNIT",
          "info": "The GID for the equipment reference unit being defined."
},
        "MAX_NUM_REFERENCE_UNITS": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Maximum number of equipment reference units for all the consols with this consol group."
}
      },
      "fk_tables": [
        "CONSOL"
]
    }
  }
};