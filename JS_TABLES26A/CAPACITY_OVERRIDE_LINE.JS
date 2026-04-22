// CAPACITY_OVERRIDE_LINE.js

window.CAPACITY_OVERRIDE_LINE = {
  "tables": {
    "CAPACITY_OVERRIDE_LINE": {
      "columns": {
        "CAPACITY_OVERRIDE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "CAPACITY_OVERRIDE"
},
        "SEQUENCE_NO": {
          "type": "NUMBER(4)",
          "nullable": false,
          "key_value": true
},
        "OVERRIDE_TYPE": {
          "type": "VARCHAR2(20)",
          "nullable": false,
          "values": [
                    "SHIPMENT",
                    "EQUIPMENT"
          ],
          "info": "Defines whether the capacity override is for shipment or equjpment group."
},
        "TRANSPORT_MODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "TRANSPORT_MODE"
},
        "EQUIPMENT_GROUP_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "EQUIPMENT_GROUP"
},
        "MAX_WEIGHT": {
          "type": "NUMBER",
          "nullable": true
},
        "MAX_WEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
},
        "MAX_WEIGHT_BASE": {
          "type": "NUMBER",
          "nullable": true
},
        "MAX_VOLUME": {
          "type": "NUMBER",
          "nullable": true
},
        "MAX_VOLUME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
},
        "MAX_VOLUME_BASE": {
          "type": "NUMBER",
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
},
        "SERVPROV_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SERVPROV"
}
      },
      "fk_tables": []
    }
  }
};