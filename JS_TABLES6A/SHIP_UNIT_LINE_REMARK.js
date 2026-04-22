// SHIP_UNIT_LINE_REMARK.js

window.SHIP_UNIT_LINE_REMARK = {
  "tables": {
    "SHIP_UNIT_LINE_REMARK": {
      "columns": {
        "SHIP_UNIT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "SHIP_UNIT_LINE",
          "info": "The GID for the ship unit associated with the order release. "
        },
        "SHIP_UNIT_LINE_NO": {
          "type": "NUMBER(4)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "SHIP_UNIT_LINE",
          "info": "The order release ship unit line number sequence. "
        },
        "REMARK_SEQUENCE": {
          "type": "NUMBER(10)",
          "nullable": false,
          "key_value": true,
          "info": "The sequence identifier for the remark associated with the order release. "
        },
        "REMARK_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "REMARK_QUAL",
          "info": "The remark qualifier identifier defining the remark code. "
        },
        "REMARK_TEXT": {
          "type": "VARCHAR2(4000)",
          "nullable": false,
          "info": "The text associated to the remark code. "
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
