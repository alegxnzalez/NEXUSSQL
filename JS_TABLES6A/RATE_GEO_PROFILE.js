// RATE_GEO_PROFILE.js

window.RATE_GEO_PROFILE = {
  "tables": {
    "RATE_GEO_PROFILE": {
      "columns": {
        "RATE_GEO_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "Internal Id of the rate geo profile "
        },
        "RATE_GEO_PROFILE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "External Id of the rate geo profile "
        },
        "RATE_GEO_PROFILE_NAME": {
          "type": "VARCHAR2(120)",
          "nullable": true,
          "info": "Name of the rate geo profile "
        },
        "IS_COMPATIBLE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "Boolean indicator for whether the profile is a list of compatible rate geos or incompatible rate geos"
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
        "RATE_GEO",
        "RATE_GEO_PROFILE_D",
        "TRACKING_LOCATION_RT"
      ]
    }
  }
};
