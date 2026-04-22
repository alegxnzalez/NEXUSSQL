// ITEM_REFNUM.js

window.ITEM_REFNUM = {
  "tables": {
    "ITEM_REFNUM": {
      "columns": {
        "ITEM_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "ITEM",
          "info": "The GID for the item that is having  a reference number added, updated, or removed. "
        },
        "ITEM_REFNUM_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "ITEM_REFNUM_QUAL",
          "info": "The GID for the qualifier used to qualify the reference number being added.  For example, part number. "
        },
        "ITEM_REFNUM_VALUE": {
          "type": "VARCHAR2(240)",
          "nullable": false,
          "key_value": true,
          "info": "The value entered qualified by the reference number qualifier. "
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
