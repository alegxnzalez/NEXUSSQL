// RATE_PREFERENCE.js

window.RATE_PREFERENCE = {
  "tables": {
    "RATE_PREFERENCE": {
      "columns": {
        "RATE_PREFERENCE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "Unique identifier of preferred carriers for a lane or zone. "
        },
        "RATE_PREFERENCE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "info": "External identifier of the preferred carriers for a lane or zone. "
        },
        "RATE_PREFERENCE_NAME": {
          "type": "VARCHAR2(120)",
          "nullable": true,
          "info": "Name of the preferred carriers for a lane or zone. "
        },
        "X_LANE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "X_LANE",
          "info": "The lane for which this preference is in effect. "
        },
        "RATE_ZONE_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "RATE_ZONE_PROFILE",
          "info": "The zone for which this preference is in effect. "
        },
        "EFFECTIVE_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "The date the preferred carriers list becomes effective. "
        },
        "EXPIRATION_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "The date the preferred carriers list expire."
        },
        "PERSPECTIVE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "B",
            "S",
            "A"
          ]
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
        "RATE_PREFERENCE_DETAIL"
      ]
    }
  }
};
