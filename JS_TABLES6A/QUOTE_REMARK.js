// QUOTE_REMARK.js

window.QUOTE_REMARK = {
  "tables": {
    "QUOTE_REMARK": {
      "columns": {
        "QUOTE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "QUOTE",
          "info": "Quote to which this remark is attached. "
        },
        "REMARK_SEQUENCE": {
          "type": "NUMBER(9)",
          "nullable": false,
          "key_value": true,
          "info": "The sequence to keep remarks unique. It allows multiple of the same qualifier. "
        },
        "REMARK_QUALIFIER_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "REMARK_QUAL",
          "info": "A qualifier for the remark. "
        },
        "REMARK_TEXT": {
          "type": "VARCHAR2(4000)",
          "nullable": false,
          "info": "The text of the remark. "
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
