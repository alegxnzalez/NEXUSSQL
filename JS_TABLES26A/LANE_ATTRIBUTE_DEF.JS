// LANE_ATTRIBUTE_DEF.js

window.LANE_ATTRIBUTE_DEF = {
  "tables": {
    "LANE_ATTRIBUTE_DEF": {
      "description": "Defines a new lane attribute id",
      "columns": {
        "LANE_ATTRIBUTE_DEF_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
},
        "LANE_ATTRIBUTE_DEF_XID": {
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
        "LANE_ATTRIBUTE",
        "LANE_ATTRIBUTE_DEF_D"
]
    }
  }
};