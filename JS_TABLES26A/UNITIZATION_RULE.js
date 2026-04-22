// UNITIZATION_RULE.js

window.UNITIZATION_RULE = {
  "tables": {
    "UNITIZATION_RULE": {
      "columns": {
        "UNITIZATION_RULE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
},
        "UNITIZATION_RULE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "X_LANE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "X_LANE"
},
        "UNITIZATION_CONDITION_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": true
},
        "STUFF_LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION"
},
        "STUFF_LOCATION_TYPE": {
          "type": "VARCHAR2(30)",
          "nullable": true,
          "values": [
                    "ORIGIN",
                    "POL"
          ]
},
        "DESTUFF_LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION"
},
        "DESTUFF_LOCATION_TYPE": {
          "type": "VARCHAR2(30)",
          "nullable": true,
          "values": [
                    "DESTINATION",
                    "POD"
          ]
},
        "TRANSPORT_MODE_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "MODE_PROFILE"
},
        "REFERENCE_NO": {
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
      "fk_tables": []
    }
  }
};