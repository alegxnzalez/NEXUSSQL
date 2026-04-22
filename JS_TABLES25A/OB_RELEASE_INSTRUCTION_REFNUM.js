// OB_RELEASE_INSTRUCTION_REFNUM.js

window.OB_RELEASE_INSTRUCTION_REFNUM = {
  "tables": {
    "OB_RELEASE_INSTRUCTION_REFNUM": {
      "columns": {
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
          "info": "Date and time of the most recent data update. "
        },
        "OB_RELEASE_INSTR_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "OB_RELEASE_INSTRUCTION",
          "info": "The GID for the release instruction associated with the order base ship unit. "
        },
        "ORDER_RELEASE_REFNUM_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "ORDER_RELEASE_REFNUM_QUAL",
          "info": "The reference number qualifier identifier defining the reference code. "
        },
        "ORDER_RELEASE_REFNUM_VALUE": {
          "type": "VARCHAR2(240)",
          "nullable": false,
          "key_value": true,
          "info": "The text associated to the reference code."
        }
      },
      "fk_tables": []
    }
  }
};
