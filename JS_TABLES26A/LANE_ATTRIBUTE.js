// LANE_ATTRIBUTE.js

window.LANE_ATTRIBUTE = {
  "tables": {
    "LANE_ATTRIBUTE": {
      "description": "Allows specification of arbitrary pieces of structured information to be attached to a lane",
      "columns": {
        "X_LANE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "X_LANE"
},
        "LANE_ATTRIBUTE_DEF_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "LANE_ATTRIBUTE_DEF",
          "info": "Defines which attribute is being specified"
},
        "LANE_ATTRIBUTE_VALUE": {
          "type": "VARCHAR2(128)",
          "nullable": false,
          "key_value": true,
          "info": "Specifies the value of the attribute - which must be an acceptable value as defined in the LANE_ATTRIBUTE_DEF_D table"
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