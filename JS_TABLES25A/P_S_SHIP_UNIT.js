// P_S_SHIP_UNIT.js

window.P_S_SHIP_UNIT = {
  "tables": {
    "P_S_SHIP_UNIT": {
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
        "NMFC_CLASS_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "NMFC_CLASS",
          "info": "This refers to the standard NMFC class ids. "
        },
        "WEIGHT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Ship unit weight. "
        },
        "WEIGHT_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "WEIGHT_UOM_CODE": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "P_SHIPMENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "P_SHIPMENT",
          "info": "Sourcing shipment id."
        },
        "P_S_SHIP_UNIT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "P_S_SHIP_UNIT_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        }
      },
      "fk_tables": [
        "P_S_SHIP_UNIT_LINE"
      ]
    }
  }
};
