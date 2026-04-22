// P_LOCATION_GROUP.js

window.P_LOCATION_GROUP = {
  "tables": {
    "P_LOCATION_GROUP": {
      "columns": {
        "P_LOCATION_GROUP_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
},
        "P_LOCATION_GROUP_XID": {
          "type": "VARCHAR2(50)",
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
      "fk_tables": [
        "LANE_SUMMARY_STAT",
        "P_LOCATION_GROUP_DETAIL"
]
    }
  }
};