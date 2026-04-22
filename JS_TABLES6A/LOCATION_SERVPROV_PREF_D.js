// LOCATION_SERVPROV_PREF_D.js

window.LOCATION_SERVPROV_PREF_D = {
  "tables": {
    "LOCATION_SERVPROV_PREF_D": {
      "columns": {
        "LOCATION_SERVPROV_PREF_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "LOCATION_SERVPROV_PREF",
          "info": "The location service provider preference GID. "
        },
        "LOCATION_SERVPROV_PREF_D_SEQ": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true,
          "info": "Sequence with in a particular location service provider preference GID. "
        },
        "DAY_OF_WEEK": {
          "type": "NUMBER(3)",
          "nullable": false,
          "info": "The day of week. "
        },
        "BEGIN": {
          "type": "NUMBER(10)",
          "nullable": false,
          "info": "The begin time. "
        },
        "PREFERENCE_LEVEL": {
          "type": "NUMBER(3)",
          "nullable": false,
          "info": "The preference level. "
        },
        "DURATION": {
          "type": "NUMBER(10)",
          "nullable": false,
          "info": "The duration of the time window. "
        },
        "MAX_SLOT": {
          "type": "NUMBER(3)",
          "nullable": true,
          "info": "The maximum number of slots during this time. "
        },
        "LOCATION_RESOURCE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION_RESOURCE",
          "info": "Indicates the resource that preference defined on. "
        },
        "IS_STANDING": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ],
          "info": "Indicates if the defined preference is for standing appointment. "
        },
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Database domain where this data is stored. "
        },
        "INSERT_USER": {
          "type": "VARCHAR2(128)",
          "nullable": false,
          "info": "The user ID of the data insert user. "
        },
        "INSERT_DATE": {
          "type": "DATE",
          "nullable": false,
          "info": "Date and time of data insert. "
        },
        "UPDATE_USER": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "The user ID of the data update user. "
        },
        "UPDATE_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "Date and time of the most recent data update."
        }
      },
      "fk_tables": []
    }
  }
};
