// QUOTE_COST_OPTION_REMARK.js

window.QUOTE_COST_OPTION_REMARK = {
  "tables": {
    "QUOTE_COST_OPTION_REMARK": {
      "columns": {
        "QUOTE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "QUOTE_COST_OPTION",
          "info": "The GID for the quote. "
        },
        "COST_OPTION_SEQUENCE": {
          "type": "NUMBER(10)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "QUOTE_COST_OPTION",
          "info": "Option Number: Each possible cost option is assigned an Option Number. "
        },
        "REMARK_SEQUENCE": {
          "type": "NUMBER(10)",
          "nullable": false,
          "key_value": true,
          "info": "Internal sequence number for the remark. "
        },
        "REMARK_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "REMARK_QUAL",
          "info": "The GID for the remark qualifier. "
        },
        "REMARK_TEXT": {
          "type": "VARCHAR2(4000)",
          "nullable": false,
          "info": "Remark text related to the remark qualifier. "
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
