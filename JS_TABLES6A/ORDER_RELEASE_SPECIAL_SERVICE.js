// ORDER_RELEASE_SPECIAL_SERVICE.js

window.ORDER_RELEASE_SPECIAL_SERVICE = {
  "tables": {
    "ORDER_RELEASE_SPECIAL_SERVICE": {
      "columns": {
        "ORDER_RELEASE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "ORDER_RELEASE",
          "info": "The order release GID. "
        },
        "SPECIAL_SERVICE_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "SPECIAL_SERVICE",
          "info": "The special service code GID defining the service required. "
        },
        "TIME": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The duration required for the special service. "
        },
        "TIME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The unit of measure for the time. "
        },
        "TIME_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The time in the base unit of measure. "
        },
        "FOR_SOURCE_DEST": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "S",
            "D",
            "B"
          ],
          "info": "Define if this special service is required for source and/or destination location of this order. "
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
