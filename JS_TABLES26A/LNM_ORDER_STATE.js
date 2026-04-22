// LNM_ORDER_STATE.js

window.LNM_ORDER_STATE = {
  "tables": {
    "LNM_ORDER_STATE": {
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
        "OBJECT_TYPE": {
          "type": "VARCHAR2(30)",
          "nullable": false,
          "key_value": true,
          "values": [
                    "ORDER RELEASE",
                    "ORDER MOVEMENT"
          ]
},
        "SCENARIO_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
},
        "BULKPLAN_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "LNM_SCENARIO_BULKPLAN"
},
        "BULKPLAN_SPEC_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
},
        "ORDER_ID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
},
        "ORDER_STATUS": {
          "type": "VARCHAR2(50)",
          "nullable": false
}
      },
      "fk_tables": []
    }
  }
};