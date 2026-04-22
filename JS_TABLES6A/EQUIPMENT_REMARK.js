// EQUIPMENT_REMARK.js

window.EQUIPMENT_REMARK = {
  "tables": {
    "EQUIPMENT_REMARK": {
      "columns": {
        "EQUIPMENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "EQUIPMENT",
          "info": "The Equipment ID for the remark. "
        },
        "REMARK_SEQUENCE": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true,
          "info": "The sequence number of the remark. "
        },
        "REMARK_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "REMARK_QUAL",
          "info": "The Remark Qualifier ID. "
        },
        "REMARK_TEXT": {
          "type": "VARCHAR2(4000)",
          "nullable": true,
          "info": "The Text of the Remark. "
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
