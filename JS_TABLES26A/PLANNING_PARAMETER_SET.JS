// PLANNING_PARAMETER_SET.js

window.PLANNING_PARAMETER_SET = {
  "tables": {
    "PLANNING_PARAMETER_SET": {
      "columns": {
        "PLANNING_PARAMETER_SET_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "Unique global identifier for a set of planning parameters."
},
        "PLANNING_PARAMETER_SET_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "External identifier for a set of planning parameters."
},
        "PLANNING_PARAMETER_SET_DESC": {
          "type": "VARCHAR2(256)",
          "nullable": true,
          "info": "Description of the planning parameter set."
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
        "CR_PROJECT",
        "DOMAIN_SETTING",
        "FLEET_BULK_PLAN",
        "LNM_PROJECT",
        "LNM_SCENARIO",
        "PLANNING_PARAMETER",
        "P_PROJECT",
        "P_SOLUTION",
        "SHIPMENT",
        "X_LANE"
]
    }
  }
};