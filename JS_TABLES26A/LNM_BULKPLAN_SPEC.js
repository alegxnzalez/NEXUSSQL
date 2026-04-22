// LNM_BULKPLAN_SPEC.js

window.LNM_BULKPLAN_SPEC = {
  "tables": {
    "LNM_BULKPLAN_SPEC": {
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
        "BULKPLAN_SPEC_XID": {
          "type": "VARCHAR2(101)",
          "nullable": false
},
        "BULKPLAN_SPEC_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
},
        "GROUPBY": {
          "type": "VARCHAR2(50)",
          "nullable": true
},
        "RUN_IN_SERIES": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ]
}
      },
      "fk_tables": [
        "LNM_BULKPLAN_SPEC_D",
        "LNM_SCENARIO_BULKPLAN",
        "LNM_SCENARIO_BULKPLAN_SPEC"
]
    }
  }
};