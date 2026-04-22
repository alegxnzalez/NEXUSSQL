// LOCATION_ROLE.js

window.LOCATION_ROLE = {
  "tables": {
    "LOCATION_ROLE": {
      "description": "The role(s) played by the location. For e.g., a location can be a supermarket, loading station and unloading station.",
      "columns": {
        "LOCATION_ROLE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "LOCATION_ROLE_GID contains the unique identifier for the location role. Examples of roles include airport, carrier and port."
},
        "LOCATION_ROLE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "LOCATION_ROLE_XID contains the unique external identifier for the location role."
},
        "LOCATION_ROLE_NAME": {
          "type": "VARCHAR2(120)",
          "nullable": true,
          "info": "LOCATION_ROLE_NAME contains the name for the location role."
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
        "ACTIVITY_TIME",
        "LEG",
        "LOAD_CONFIG_RULE",
        "LOCATION_ROLE_PROFILE",
        "LOCATION_ROUTING_RULES",
        "SHIPMENT_STOP"
]
    }
  }
};