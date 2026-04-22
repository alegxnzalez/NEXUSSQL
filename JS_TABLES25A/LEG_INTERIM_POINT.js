// LEG_INTERIM_POINT.js

window.LEG_INTERIM_POINT = {
  "tables": {
    "LEG_INTERIM_POINT": {
      "columns": {
        "LEG_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "LEG",
          "info": "Contains the GID for the leg. "
        },
        "SEQ_NO": {
          "type": "NUMBER(8)",
          "nullable": false,
          "key_value": true,
          "info": "Contains the sequence number for the leg. "
        },
        "LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "LOCATION",
          "info": "Contains the GID for the location for the leg. "
        },
        "SPECIAL_SERVICE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SPECIAL_SERVICE",
          "info": "The special service needed for this interim point. It will be added to the corresponding shipment stop special service. "
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
