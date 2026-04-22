// P_LANE_BUSINESSUNIT_DEF.js

window.P_LANE_BUSINESSUNIT_DEF = {
  "tables": {
    "P_LANE_BUSINESSUNIT_DEF": {
      "description": "Table to store lane business unit definition.",
      "columns": {
        "BUSINESS_UNIT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
},
        "BUSINESS_UNIT_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
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
        "P_LANE_BUSINESSUNIT"
]
    }
  }
};