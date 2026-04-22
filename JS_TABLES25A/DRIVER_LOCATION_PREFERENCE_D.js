// DRIVER_LOCATION_PREFERENCE_D.js

window.DRIVER_LOCATION_PREFERENCE_D = {
  "tables": {
    "DRIVER_LOCATION_PREFERENCE_D": {
      "columns": {
        "LOCATION_PREF_SEQ_NO": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true,
          "info": "The auto-generated sequence number makes the primary key for this table "
        },
        "LOCATION_PREF_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "DRIVER_LOCATION_PREFERENCE",
          "info": "The Location Preference GID in OTM "
        },
        "LOCATION_PREF_TYPE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "1",
            "2"
          ],
          "info": "An Enumerate that indicates the preference condition. Values - 1 - Indicates 'Prefer' 2 Indicates 'Avoid' "
        },
        "LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION",
          "info": "Refers to the preferred / not-proferred Location GID "
        },
        "REGION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "REGION",
          "info": "Refers to the a preferred / not-proferred Region GID "
        },
        "LANE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LANE",
          "info": "Refers to the a preferred / not-proferred Lane GID "
        },
        "LOCATION_PREF_VALUE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Indicates the weightage for this location preference"
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
