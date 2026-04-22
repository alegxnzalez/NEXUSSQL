// DEPOT_PROFILE.js

window.DEPOT_PROFILE = {
  "tables": {
    "DEPOT_PROFILE": {
      "columns": {
        "DEPOT_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "DEPOT_PROFILE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": true
        },
        "DEPOT_PROFILE_NAME": {
          "type": "VARCHAR2(120)",
          "nullable": true
        },
        "DESCRIPTION": {
          "type": "VARCHAR2(4000)",
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
        "DEPOT_PROFILE_D",
        "ITINERARY",
        "LEG"
      ]
    }
  }
};
