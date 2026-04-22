// VEHICLE_TYPE.js

window.VEHICLE_TYPE = {
  "tables": {
    "VEHICLE_TYPE": {
      "columns": {
        "VEHICLE_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "Unique identifier."
},
        "VEHICLE_TYPE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "External Identifier"
},
        "DOOR_HEIGHT": {
          "type": "NUMBER",
          "nullable": false,
          "info": "Vehicle door height."
},
        "DOOR_HEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": false,
          "info": "Unit of measure"
},
        "DOOR_HEIGHT_BASE": {
          "type": "NUMBER",
          "nullable": false,
          "info": "Comparison value"
},
        "DOOR_WIDTH": {
          "type": "NUMBER",
          "nullable": false,
          "info": "Vehicle door width"
},
        "DOOR_WIDTH_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": false,
          "info": "Unit of measure"
},
        "DOOR_WIDTH_BASE": {
          "type": "NUMBER",
          "nullable": false,
          "info": "Comparison value"
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
        "INTERIM_FLIGHT",
        "INTERIM_FLIGHT_INSTANCE",
        "VEHICLE_TYPE_EQP_GRP_COMP"
]
    }
  }
};