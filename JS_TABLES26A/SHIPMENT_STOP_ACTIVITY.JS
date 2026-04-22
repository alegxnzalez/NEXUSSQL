// SHIPMENT_STOP_ACTIVITY.js

window.SHIPMENT_STOP_ACTIVITY = {
  "tables": {
    "SHIPMENT_STOP_ACTIVITY": {
      "columns": {
        "SHIPMENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "SHIPMENT_STOP"
},
        "STOP_NUM": {
          "type": "NUMBER(3)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "SHIPMENT_STOP"
},
        "ACTIVITY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "ACTIVITY"
},
        "ACTIVITY_DURATION": {
          "type": "NUMBER",
          "nullable": true
},
        "ACTIVITY_DURATION_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
},
        "ACTIVITY_DURATION_BASE": {
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
}
      },
      "fk_tables": []
    }
  }
};